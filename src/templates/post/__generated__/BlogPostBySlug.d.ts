/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogPostBySlug
// ====================================================

export interface BlogPostBySlug_mdx_frontmatter_thumbnail_childImageSharp_fluid {
  src: string;
}

export interface BlogPostBySlug_mdx_frontmatter_thumbnail_childImageSharp {
  fluid: BlogPostBySlug_mdx_frontmatter_thumbnail_childImageSharp_fluid | null;
}

export interface BlogPostBySlug_mdx_frontmatter_thumbnail {
  childImageSharp: BlogPostBySlug_mdx_frontmatter_thumbnail_childImageSharp | null;
}

export interface BlogPostBySlug_mdx_frontmatter {
  title: string;
  date: any | null;
  category: string | null;
  tags: (string | null)[] | null;
  thumbnail: BlogPostBySlug_mdx_frontmatter_thumbnail | null;
}

export interface BlogPostBySlug_mdx {
  id: string;
  body: string;
  frontmatter: BlogPostBySlug_mdx_frontmatter | null;
  excerpt: string;
}

export interface BlogPostBySlug {
  mdx: BlogPostBySlug_mdx | null;
}

export interface BlogPostBySlugVariables {
  id: string;
}
