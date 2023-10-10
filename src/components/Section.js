import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

export default class Section extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
        return (
            <section id={this.props.section.id}>
              <Container>
                <Row>
                  <Col>
                    <article>
                      <header>
                        <h2>{this.props.section.title}</h2>
                      </header>
                      {this.props.section.items.map((item, index) => (
                        <Item key={index} item={item} />
                      ))}
                    </article>
                  </Col>
                </Row>
              </Container>
            </section>
        )
    }
}

