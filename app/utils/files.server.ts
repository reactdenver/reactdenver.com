import nodePath from "path";
import { readFile, readdir } from "fs/promises";

/**
 *
 * @param relativeMdxFileOrDirectory the path to the content. For example:
 * content/events/2001-01-01.mdx
 * @returns A promise that resolves to an object of the full path and the file content
 */
async function downloadMdxFile(
  relativeMdxFileOrDirectory: string
): Promise<{ entry: string; file: string }> {
  const mdxFileOrDirectory = `app/content/${relativeMdxFileOrDirectory}`;
  const content = await downloadFile(mdxFileOrDirectory);

  let file = "";
  let entry = mdxFileOrDirectory;
  if (content) {
    file = content;
  }
  return { entry, file };
}

/**
 *
 * @param filePath the full file path to the individual file
 * @returns a promise that resolves to a string of the contents of the file
 */
async function downloadFile(filePath: string) {
  const file = await readFile(filePath);
  return Buffer.from(file).toString();
}

/**
 *
 * @param path the full path to list
 * @returns a promise that resolves to a file ListItem of the files/directories in the given directory (not recursive)
 */
async function downloadDirList(path: string) {
  const directory = await readdir(nodePath.join(path), { withFileTypes: true });
  return directory;
}

export { downloadMdxFile, downloadDirList };
