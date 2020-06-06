/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageData
// ====================================================

export interface HomePageData_list_group_edges_node_childMdx_fields {
  slug: string | null;
}

export interface HomePageData_list_group_edges_node_childMdx_frontmatter {
  category: string | null;
  date: any | null;
  tags: (string | null)[] | null;
  title: string;
}

export interface HomePageData_list_group_edges_node_childMdx {
  id: string;
  fields: HomePageData_list_group_edges_node_childMdx_fields | null;
  frontmatter: HomePageData_list_group_edges_node_childMdx_frontmatter | null;
  excerpt: string;
}

export interface HomePageData_list_group_edges_node {
  sourceInstanceName: string;
  childMdx: HomePageData_list_group_edges_node_childMdx | null;
}

export interface HomePageData_list_group_edges {
  node: HomePageData_list_group_edges_node;
}

export interface HomePageData_list_group {
  edges: HomePageData_list_group_edges[];
}

export interface HomePageData_list {
  group: HomePageData_list_group[];
}

export interface HomePageData {
  list: HomePageData_list;
}
