/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostBySlug
// ====================================================

export interface BlogPostBySlug_mdx_frontmatter {
  date: any | null;
  title: string;
}

export interface BlogPostBySlug_mdx {
  id: string;
  body: string;
  frontmatter: BlogPostBySlug_mdx_frontmatter | null;
}

export interface BlogPostBySlug {
  mdx: BlogPostBySlug_mdx | null;
}

export interface BlogPostBySlugVariables {
  id: string;
}
