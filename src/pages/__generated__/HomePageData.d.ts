/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageData
// ====================================================

export interface HomePageData_allMdx_edges_node_fields {
  slug: string | null;
}

export interface HomePageData_allMdx_edges_node_frontmatter {
  category: string | null;
  tags: (string | null)[] | null;
  date: any | null;
  title: string;
}

export interface HomePageData_allMdx_edges_node {
  id: string;
  fields: HomePageData_allMdx_edges_node_fields | null;
  frontmatter: HomePageData_allMdx_edges_node_frontmatter | null;
  excerpt: string;
}

export interface HomePageData_allMdx_edges {
  node: HomePageData_allMdx_edges_node;
}

export interface HomePageData_allMdx {
  edges: HomePageData_allMdx_edges[];
}

export interface HomePageData {
  allMdx: HomePageData_allMdx;
}
