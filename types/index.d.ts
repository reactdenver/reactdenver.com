type MdxPage = {
  code: string;
  slug: string;

  /**
   * It's annoying that all these are set to optional I know, but there's
   * no great way to ensure that the MDX files have these properties,
   * especially when a common use case will be to edit them without running
   * the app or build. So we're going to force you to handle situations when
   * these values are missing to avoid runtime errors.
   */
  frontmatter: {
    title?: string;
    description?: string;
    meta?: {
      keywords?: Array<string>;
      [key as string]: string;
    };

    date?: string;
    location?: string;
    speakers?: Array<{ name: string; twitter?: string; github?: string }>;
    front_image?: string;
  };
};

type MdxListItem = Omit<MdxPage, "code">;

type GitHubFile = { path: string; content: string };

export { MdxPage, MdxListItem, GitHubFile };
