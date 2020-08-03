import React from "react";
import { graphql } from "gatsby";

import DocsLayout from "./components/DocsLayout";

const SiteLayout = ({ data }) => (
  <DocsLayout data={data} enableNavSearch={false} navItems={[]} />
);

export const query = graphql`
  query DocsQuery($id: String, $instanceName: String) {
    mdx(id: { eq: $id }) {
      id
      fields {
        file
        instanceName
      }
      frontmatter {
        title
      }
      code {
        body
      }
      tableOfContents
    }
    allMdx(
      filter: {
        fields: { title: { ne: "404" }, instanceName: { eq: $instanceName } }
      }
    ) {
      group(field: fields___category) {
        fieldValue
        edges {
          node {
            frontmatter {
              order
            }
            fields {
              title
              slug
            }
          }
        }
      }
    }
  }
`;

export default SiteLayout;
