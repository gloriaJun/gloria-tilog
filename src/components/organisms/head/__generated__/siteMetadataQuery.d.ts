/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: siteMetadataQuery
// ====================================================

export interface siteMetadataQuery_site_siteMetadata {
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface siteMetadataQuery_site {
  siteMetadata: siteMetadataQuery_site_siteMetadata | null;
}

export interface siteMetadataQuery {
  site: siteMetadataQuery_site | null;
}
