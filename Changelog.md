# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.1] 10.2.2024

### Changed
- Updated Drupal core to 10.1.8 and contrib modules to latest versions
- Updated the graphql_compose module to 2.1 beta1
- Switched the graphql schema to use Drupal entity ids instead of UUIDs, to fix rendering of nodes at specific revisions.


## [2.0.0] 9.2.2024

This release is a major update. Instead of using JSONAPI, the starterkit now uses GraphQL to fetch data from Drupal.
All features are kept but have been re-implemented to use the new way of handling data coming from the backend.

### Added

- GraphQL Drupal modules and related configuration
- `graphql-request` for fetching data from Drupal
- `graphql-codegen` for generating types from GraphQL schema, queries and fragments

### Removed
- JSONAPI modules and related configuration
- Manual definitions in `zod` for JSONAPI responses

### Changed
- Reorganization of the components directory structure
- Updated Readme with new instructions regarding GraphQL setup


## [1.0.0] - 09.02.2024

The starterkit provides a basic setup for a new project using next-drupal to build a decoupled Drupal frontend with Next.js.

At this point, the starterkit includes the following features:

- Automated setup with Drupal recipes and Lando
- Integration with Wunder's Silta hosting setup
- Content types
  - Frontpage
  - Article
  - Page
- Paragraph types
  - Text
  - Image
  - Video
  - Accordion (with nested paragraphs)
  - Articles listing
  - Hero
- Data fetching from the frontend to the backend via JSONAPI
- Schema definition with Zod
- Basic styling with Tailwind CSS
- Basic SEO setup with Next.js
- Example of integration with Drupal's webform module
- Authentication with next-auth, user registration and change password
- Ready integration with Elasticsearch (indexing and front page for results)
- Preview mode and on-demand regeneration of static pages
- Metatags support
- Importable demo content
- Multilingual support (included English, Finnish and Swedish)
- Typesafe environment variables with Zod
- Xml sitemap
- basic Cypress testing setup
- initial UI library of components
- integration with Storybook