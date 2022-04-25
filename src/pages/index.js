import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Masonry from "react-masonry-css";
import PostCard from "../components/postCard";
import Img from "gatsby-image";

//const Image = ({ data }) => <Img fluid={allS3Object.edges[1].node.localFile.childImageSharp.fluid} />;

const breakpointColumnsObj = {
  default: 5,
  1400: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Homepage = ({ data }) => {
  let { edges } = data.allDataJson;
  //const xy = data.allS3Object.edges[0].node.url;
  return (
    <Layout>

      <div>mk1masonry from index()</div>
      <Img fluid={data.images.nodes[1].localFile.childImageSharp.fluid} />

      <p>{ data.allS3Object.edges[1].node.localFile.publicURL }</p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.allS3Object.edges.map(({ node }, index) => {
          return (
            <Img fluid={data.images.nodes[index].localFile.childImageSharp.fluid} key={index} />
            // <PostCard
            //   title={node.localFile.name}
            //   imgSrc={node.localFile.publicURL}
            //   format={node.url}
            //   srcText={index}
            //   slug={index}
            //   key={index}
            // />
          );
        })}
        
        
        
      </Masonry>
    </Layout>
  );
};


export const query = graphql`
  query HomePageQuery {
    
      images: allS3Object {
        nodes {
          Key
          localFile {
            childImageSharp {
              fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    
    allS3Object: allS3Object {
      edges {
        node {
          url
          localFile {
            name
            publicURL
            relativePath
            id
            childrenImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allDataJson: allDataJson {
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
