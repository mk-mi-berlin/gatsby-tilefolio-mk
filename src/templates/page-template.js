import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header";
import { graphql } from "gatsby";


export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout pageTitle={frontmatter.title}>
      <Seo />
      <Header pageTitle={frontmatter.title} />
      <div className="container">
        
        <section className="section box">
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
