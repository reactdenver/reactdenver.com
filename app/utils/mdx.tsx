import * as React from "react";
import * as mdxBundler from "mdx-bundler/client";
import { compileMdx as compileMdxFromServer } from "~/utils/compile-mdx.server";
import { downloadDirList, downloadMdxFile } from "~/utils/files.server";
import type { MdxPage } from "types";

async function compileMdx(slug: string, file: string) {
  const compiledPage = await compileMdxFromServer<MdxPage["frontmatter"]>(
    slug,
    file
  );

  return {
    ...compiledPage,
    slug,
  };
}

async function getMdxPage(contentDir: string, slug: string): Promise<MdxPage> {
  const pageFile = await downloadMdxFile(`${contentDir}/${slug}.mdx`);
  const compiledPage = await compileMdx(slug, pageFile.file).catch((err) => {
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

  const pageDatas = await Promise.all(
    dirList.map(async ({ name, slug }) => {
      return {
        ...(await downloadMdxFile(`${contentDir}/${name}`)),
        slug,
      };
    })
  );

  return Promise.all(
    pageDatas.map((pageData) => compileMdx(pageData.slug, pageData.file))
  );
}

async function getMdxDirList(contentDir: string) {
  const fullContentDirPath = `content/${contentDir}`;
  const dirList = (await downloadDirList(fullContentDirPath))
    .map(({ name }) => ({
      name,
      slug: name.replace(/\.mdx$/, ""),
    }))
    .filter(({ name }) => name !== "README.md");
  return dirList;
}

async function getEventMdxListItems() {
  let pages = await getMdxPagesInDirectory("events");

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
    return {
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
function mapFromMdxPageToMdxListItem(page: MdxPage) {
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
