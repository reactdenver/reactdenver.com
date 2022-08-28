import * as React from "react";
import * as mdxBundler from "mdx-bundler/client";
import { compileMdx as compileMdxFromServer } from "~/utils/compile-mdx.server";
import {
  downloadDirList,
  downloadMdxFileOrDirectory,
} from "~/utils/github.server";
import { typedBoolean } from "./misc";
import type { MdxPage, MdxListItem, GitHubFile } from "types";

const getCompiledKey = (contentDir: string, slug: string) =>
  `${contentDir}:${slug}:compiled`;

async function compileMdx(slug: string, files: Array<GitHubFile>) {
  const compiledPage = await compileMdxFromServer<MdxPage["frontmatter"]>(
    slug,
    files
  );
  if (compiledPage) {
    return {
      ...compiledPage,
      slug,
    };
  } else {
    return null;
  }
}

async function getMdxPage({
  contentDir,
  slug,
}: {
  contentDir: string;
  slug: string;
}): Promise<MdxPage | null> {
  const pageFiles = await downloadMdxFileOrDirectory(`${contentDir}/${slug}`);
  const compiledPage = await compileMdx(slug, pageFiles.files).catch((err) => {
    console.error(`Failed to get a fresh value for mdx:`, {
      contentDir,
      slug,
    });
    return Promise.reject(err);
  });

  return compiledPage;
}

async function getMdxPagesInDirectory(contentDir: string) {
  const dirList = await getMdxDirList(contentDir);

  // our octokit throttle plugin will make sure we don't hit the rate limit
  const pageDatas = await Promise.all(
    dirList.map(async ({ slug }) => {
      const { files } = await downloadMdxFileOrDirectory(
        `${contentDir}/${slug}`
      );
      return {
        ...(await await downloadMdxFileOrDirectory(`${contentDir}/${slug}`)),
        slug,
      };
    })
  );

  const pages = await Promise.all(
    pageDatas.map((pageData) => compileMdx(pageData.slug, pageData.files))
  );
  return pages.filter(typedBoolean);
}

async function getMdxDirList(contentDir: string) {
  const fullContentDirPath = `content/${contentDir}`;
  const dirList = (await downloadDirList(fullContentDirPath))
    .map(({ name, path }) => ({
      name,
      slug: path.replace(`${fullContentDirPath}/`, "").replace(/\.mdx$/, ""),
    }))
    .filter(({ name }) => name !== "README.md");
  return dirList;
}

async function getEventMdxListItems() {
  let pages = await getMdxPagesInDirectory("events").then((allPosts) =>
    allPosts.filter((p) => !p.frontmatter.draft)
  );

  pages = pages.sort((a, z) => {
    const aTime = new Date(a.frontmatter.date ?? "").getTime();
    const zTime = new Date(z.frontmatter.date ?? "").getTime();
    return aTime > zTime ? -1 : aTime === zTime ? 0 : 1;
  });

  return pages.map(mapFromMdxPageToMdxListItem);
}

function mdxPageMeta({ data }: { data: { page: MdxPage | null } | null }) {
  if (data?.page) {
    const extraMeta = data.page.frontmatter.meta ?? {};
    let title = data.page.frontmatter.title;
    const isDraft = data.page.frontmatter.draft;
    if (isDraft) title = `(DRAFT) ${title ?? ""}`;
    return {
      ...(isDraft ? { robots: "noindex" } : null),
      ...extraMeta,
    };
  } else {
    return {
      title: "Not found",
      description: "You landed on a page that we could not find 😢",
    };
  }
}

/**
 * This is useful for when you don't want to send all the code for a page to the client.
 */
function mapFromMdxPageToMdxListItem(page: MdxPage): MdxListItem {
  const { code, ...mdxListItem } = page;
  return mdxListItem;
}

/**
 * This should be rendered within a useMemo
 * @param code the code to get the component from
 * @returns the component
 */
function getMdxComponent(code: string) {
  const Component = mdxBundler.getMDXComponent(code);
  function KCDMdxComponent({
    components,
    ...rest
  }: Parameters<typeof Component>["0"]) {
    return (
      // @ts-expect-error the types are wrong here
      <Component components={{ ...mdxComponents, ...components }} {...rest} />
    );
  }
  return KCDMdxComponent;
}

function useMdxComponent(code: string) {
  return React.useMemo(() => getMdxComponent(code), [code]);
}

export {
  getMdxPage,
  getMdxDirList,
  getMdxPagesInDirectory,
  getEventMdxListItems,
  mapFromMdxPageToMdxListItem,
  mdxPageMeta,
  useMdxComponent,
};
