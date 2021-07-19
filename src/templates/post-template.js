import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import Pagination from "../components/pagination";

const postTemplate = ({ data }) => {
  const { dataJson, previous, next } = data;
  return (
    <Layout>
      <Seo />
      <Header pageTitle={dataJson.title} />
      <div className="container">
        <section className="section box">
          <h3 className="subtitle">{dataJson.srcText}</h3>
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={dataJson.imgSrc} alt="" />
              </figure>
            </div>
            <div
              className="column"
              dangerouslySetInnerHTML={{ __html: dataJson.content }}
            />
          </div>
        </section>
        <Pagination previous={previous} next={next} />
      </div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query postQuery($id: String, $previousPostId: String, $nextPostId: String) {
    dataJson(id: { eq: $id }) {
      id
      content
      format
      imgSrc
      slug
      srcText
      title
    }
    previous: dataJson(id: { eq: $previousPostId }) {
      slug
      title
    }
    next: dataJson(id: { eq: $nextPostId }) {
      slug
      title
    }
  }
`;

export default postTemplate;
