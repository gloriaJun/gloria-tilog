interface ICommentPlugis {
  utterances?: string;
}

interface ISiteMetadata {
  title: string;
  author?: string;
  description?: string;
  comment?: ICommentPlugis;
}

export interface ISite {
  siteMetadata: ISiteMetadata;
}

export interface ITemplateProps<T> {
  pageContext: {
    id: string;
    commentPlugins: ICommentPlugis;
  };
  data: T;
}

export interface IPostContent {
  category: string;
  title: string;
  date: string;
  tags?: string[];
  thumbnail?: {
    childImageSharp: {
      fluid: {
        src: string;
      };
    };
  };
}

export interface IPostContentFrontmatter {
  frontmatter: IPostContent;
}
