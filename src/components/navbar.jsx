import { useStaticQuery, graphql, Link } from "gatsby";
import React, { useState } from "react";

const NavBarItem = ({ title, path }) => (
  <Link to={path} className="navbar-item">
    {title}
  </Link>
);

const BurgerMenu = ({ active, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      onKeyDown={toggleMenu}
      className={`navbar-burger burger ${active ? "is-active" : ""}`}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarId"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
};

const NavMenu = ({ pageList }) => {
  const sortedList = pageList.sort(function (a, b) {
    return a.frontmatter.position - b.frontmatter.position;
  });

  return (
    <>
      <NavBarItem title={"Home"} path={"/"} key={"Home_id0"} />
      {sortedList.map(({ frontmatter, id }) => {
        return (
          <NavBarItem
            title={frontmatter.title}
            path={frontmatter.path}
            key={id}
          />
        );
      })}
    </>
  );
};

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query navbarQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { visibleInNavbar: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            title
            path
            position
          }
          id
        }
      }
    }
  `);
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const { title, siteUrl } = data.site.siteMetadata;
  const { nodes } = data.allMarkdownRemark;
  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href={siteUrl}>
            <h1>{title}</h1>
          </a>

          <BurgerMenu active={activeMenu} toggleMenu={toggleMenu} />
        </div>

        <div
          id="navbarId"
          className={`navbar-menu ${activeMenu ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <NavMenu pageList={nodes} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
