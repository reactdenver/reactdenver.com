import { bundleMDX } from "mdx-bundler";
import type TPQueue from "p-queue";

async function compileMdx<FrontmatterType extends Record<string, unknown>>(
  slug: string,
  fileContent: string
) {
  try {
    const { frontmatter, code } = await bundleMDX({
      source: fileContent,
    });

    return {
      code,
      frontmatter: frontmatter as FrontmatterType,
    };
  } catch (error: unknown) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
}

let _queue: TPQueue | null = null;
async function getQueue() {
  const { default: PQueue } = await import("p-queue");
  if (_queue) return _queue;

  _queue = new PQueue({ concurrency: 1 });
  return _queue;
}

// We have to use a queue because we can't run more than one of these at a time
// or we'll hit an out of memory error because esbuild uses a lot of memory...
async function queuedCompileMdx<
  FrontmatterType extends Record<string, unknown>
>(...args: Parameters<typeof compileMdx>) {
  const queue = await getQueue();
  const result = await queue.add(() => compileMdx<FrontmatterType>(...args));
  return result;
}

export { queuedCompileMdx as compileMdx };
