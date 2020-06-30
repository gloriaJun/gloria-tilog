interface ICommentPlugis {
  utterances?: string;
}

export interface ISiteMetadata {
  title?: string;
  description?: string;
  comment?: ICommentPlugis;
}

export interface ItemplateProps<T> {
  pageContext: {
    id: string;
    commentPlugins: ICommentPlugis;
  };
  data: T;
}
