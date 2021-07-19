import { useStaticQuery, graphql } from "gatsby";
import React from "react";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          author
          authorWebsite
        }
      }
    }
  `);
  const { title, author, authorWebsite } = data.site.siteMetadata;
  return (
    <footer className="footer ">
      <div className="content has-text-centered is-primary">
        <p>
          <strong>{title}</strong> by <a href={authorWebsite}>{author}</a>. The
          source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
