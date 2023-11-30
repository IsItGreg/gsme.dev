import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFileAlt, FaGithub, FaMouse } from "react-icons/fa";

export default class Item extends React.Component {
  getLink = (link) => {
    switch (link.type) {
      case "github":
        return (
          <a
            className="place-link"
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
          >
            View on GitHub <FaGithub />
          </a>
        );
      case "website":
        return (
          <a
            className="place-link"
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
          >
            View Website <FaMouse />
          </a>
        );
      case "file":
        return (
          <a
            className="place-link"
            target="_blank"
            rel="noopener noreferrer"
            href={link.url}
          >
            {link.text || "View Document"} <FaFileAlt />
          </a>
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <Row className="place">
        <Col xs={12} sm={6} className="place-name">
          <h3>{this.props.item.title}</h3>
          <p>{this.props.item.date}</p>
          {this.props.item.links?.map((link, index) => (
            <p key={`place-${index}`}>{this.getLink(link)}</p>
          ))}
        </Col>
        <Col xs={12} sm={6} className="place-about">
          {this.props.item.about.map((about, index) => (
            <React.Fragment key={`about-${index}`}>
              <h4>{about.header}</h4>
              {about.text.map((text, index) => (
                <p key={`about-text-${index}`}>{text}</p>
              ))}
            </React.Fragment>
          ))}
        </Col>
      </Row>
    );
  }
}
