import { Col } from "react-bootstrap";
import React from "react";

export const ProjectCard = (props) => {
  const { description, imgUrl, title, navigate } = props || {};
  return (
    // eslint-disable-next-line no-restricted-globals
    <Col size={12} sm={6} md={4} onClick={() => open(navigate)}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title + imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
