import React from "react";
const PostCard = ({ title, imgSrc, format, srcText, slug }) => {
  const imgFormat = format || "is-4by3";
  const figureClass = `image ${imgFormat}`;
  const text = srcText || "One title";
  return (
    <a href={slug}>
      <div className="card">
        <div className="card-image">
          <figure className={figureClass}>
            <img src={imgSrc} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-5">{title}</p>
          <div className="content">{text}</div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
