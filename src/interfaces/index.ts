interface ICommentPlugis {
  utterances?: string;
}

export interface ISiteMetadata {
  comment: ICommentPlugis;
}

export interface ItemplateProps<T> {
  pageContext: {
    id: string;
    commentPlugins: ICommentPlugis;
  };
  data: T;
}
