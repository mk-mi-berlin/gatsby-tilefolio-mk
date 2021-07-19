import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Masonry from "react-masonry-css";
import PostCard from "../components/postCard";

const breakpointColumnsObj = {
  default: 5,
  1400: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Homepage = ({ data }) => {
  let { edges } = data.allDataJson;

  return (
    <Layout>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {edges.map(({ node }, index) => {
          return (
            <PostCard
              title={node.title}
              imgSrc={node.imgSrc}
              format={node.format}
              srcText={node.srcText}
              slug={node.slug}
              key={index}
            />
          );
        })}
      </Masonry>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allDataJson {
      edges {
        node {
          id
          imgSrc
          slug
          srcText
          title
          content
          format
        }
      }
    }
  }
`;

export default Homepage;
