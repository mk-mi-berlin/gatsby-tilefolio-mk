import { Link } from "gatsby";
import React from "react";

const Pagination = ({ previous, next }) => {
  return (
    <nav className="pagination">
      {previous && (
        <Link
          to={"/" + previous.slug}
          rel="prev"
          className="pagination-previous"
        >
          ← {previous.title}
        </Link>
      )}
      {next && (
        <Link to={"/" + next.slug} rel="next" className="pagination-next">
          {next.title} →
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
