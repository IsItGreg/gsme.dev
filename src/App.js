import React from "react";
import { Jumbotron, Row, Col, Container, Nav, Button } from "react-bootstrap";
import {
  FaChevronCircleDown,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaEnvelope,
  FaFilePdf,
  FaUserCircle,
  FaHamburger,
} from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import Resume from "../src/Resume 10_2023.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./data.js";
import { randomJoke } from "./joke.js";
import Section from "./components/Section";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.topbarDropdown = React.createRef();
    this.onPageScroll = this.onPageScroll.bind(this);
    this.state = {
      slideRight: 10,
      arrowOpacity: 1,
      navbarOpacity: 0,
      showTopbarDropdown: false,
      data: data,
    };
  }

  // On mount, add in event listeners to allow for several of the elements of
  // the page to move based on the scroll position or adapt to page resizes
  componentDidMount() {
    window.addEventListener("scroll", this.onPageScroll);
    window.addEventListener("resize", this.onPageScroll);
  }

  onPageScroll = () => {
    // Move slider to the left when scrolling
    this.setState({
      slideRight:
        (window.scrollY / (window.innerHeight * 0.5)) * window.innerWidth + 10,
    });
    // Close mobile navbar dropdown if page is scrolled up
    if (window.scrollY <= window.innerHeight - 50) {
      this.topbarDropdown.current.style.height = "0";
      this.setState({ showTopbarDropdown: false });
    }
    // Fade out arrow and fade in navbar when page is scrolled down
    this.setState({
      arrowOpacity:
        1 -
        (window.scrollY - window.innerHeight / 4) / (window.innerHeight / 4),
      navbarOpacity:
        (window.scrollY - (4 * window.innerHeight) / 5) /
        (window.innerHeight / 8),
    });
  };

  // Used the ref height to animate mobile navbar dropdown opening
  toggleTopbarDropdown = () => {
    if (window.scrollY > window.innerHeight - 50) {
      if (this.state.showTopbarDropdown) {
        this.topbarDropdown.current.style.height = "0";
      } else {
        this.topbarDropdown.current.style.height = "171px";
      }
      this.setState({ showTopbarDropdown: !this.state.showTopbarDropdown });
    }
  };

  render() {
    return (
      <div>
        {/* <FaPlay className="big-arrow" /> */}
        <Jumbotron style={{ height: window.innerHeight }}>
          <div style={{ right: this.state.slideRight }} className="slide-title">
            <h1 className="slide-title-title">
              <span className="title-red">G</span>regory{" "}
              <span className="title-red">Sme</span>lkov
            </h1>
            <h4 className="slide-title-subtitle">
              {randomJoke()} / Software <span className="title-red">Dev</span>
              eloper
            </h4>
          </div>
          <div style={{ opacity: this.state.arrowOpacity }} className="arrow">
            <a href="#about">
              <FaChevronCircleDown />
            </a>
          </div>
        </Jumbotron>
        <div style={{ height: window.innerHeight }} className="hide-dropdown" />
        <div className="topbar">
          <h3
            style={{ opacity: this.state.navbarOpacity }}
            className="navbar-name"
          >
            <span className="title-red">G</span>regory{" "}
            <span className="title-red">Sme</span>lkov
          </h3>
          <div
            style={{ opacity: this.state.navbarOpacity }}
            className="scrollspy-wrapper"
          >
            <Scrollspy
              className="page-navbar-scrollspy"
              items={["about", "skills", "education", "work", "projects"]}
              currentClassName="navbar-active"
              offset={-1}
            >
              <Nav>
                <a href="#about">About</a>
              </Nav>
              <Nav>
                <a href="#skills">Skills</a>
              </Nav>
              <Nav>
                <a href="#education">Education</a>
              </Nav>
              <Nav>
                <a href="#work">Work</a>
              </Nav>
              <Nav>
                <a href="#projects">Projects</a>
              </Nav>
            </Scrollspy>
            <Button
              variant="outline"
              className="hamburger-menu-button"
              onClick={this.toggleTopbarDropdown}
            >
              <FaHamburger />
            </Button>
          </div>
        </div>
        <div className="topbar-dropdown" ref={this.topbarDropdown}>
          <Scrollspy
            className="topbar-dropdown-scrollspy"
            items={["about", "skills", "education", "work", "projects"]}
            currentClassName="navbar-active"
            offset={50}
          >
            <Nav onClick={this.toggleTopbarDropdown}>
              <a href="#about">About</a>
            </Nav>
            <Nav onClick={this.toggleTopbarDropdown}>
              <a href="#skills">Skills</a>
            </Nav>
            <Nav onClick={this.toggleTopbarDropdown}>
              <a href="#education">Education</a>
            </Nav>
            <Nav onClick={this.toggleTopbarDropdown}>
              <a href="#work">Work</a>
            </Nav>
            <Nav onClick={this.toggleTopbarDropdown}>
              <a href="#projects">Projects</a>
            </Nav>
          </Scrollspy>
        </div>

        <section id="about">
          <Container>
            <Row>
              <Col>
                <article>
                  <header>
                    <h2>About Me</h2>
                  </header>
                  <Row className="aboutme-blurb">
                    <Col>
                      <p>
                        Currently working as a full-stack software engineer at
                        Markforged,
                        <br /> a 3D printing company known for inventing
                        continuous carbon fiber reinforced parts.
                      </p>
                      <p>
                        Feel free to contact me at the links below if you want
                        to chat.
                      </p>
                    </Col>
                  </Row>
                  <Row className="contact-info-header">
                    <Col>
                      <h3>Contact & Info</h3>
                    </Col>
                  </Row>
                  <Row className="contact-info">
                    <Col xs={12} sm={6} className="aboutme-list aboutme-left">
                      <div>
                        <FaUserCircle />
                        <span> Gregory Smelkov </span>
                      </div>
                      <div>
                        <FaHome />
                        <span> Needham, MA </span>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={Resume}
                        >
                          <FaFilePdf />
                          <span> View Resume </span>
                        </a>
                      </div>
                    </Col>
                    <Col xs={12} sm={6} className="aboutme-list aboutme-right">
                      <div>
                        <a href="mailto: gsme+gsmelkov@gmail.com">
                          <FaEnvelope /> gsmelkov@gmail.com{" "}
                        </a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/in/greg-smelkov/"
                        >
                          <FaLinkedin /> linkedin.com/in/greg-smelkov/{" "}
                        </a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/IsItGreg"
                        >
                          <FaGithub /> github.com/IsItGreg{" "}
                        </a>
                      </div>
                    </Col>
                  </Row>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="skills">
          <Container>
            <Row>
              <Col>
                <article>
                  <header>
                    <h2>Skills</h2>
                  </header>
                  <Row className="justify-content-md-center">
                    <Col md="auto" className="skills-list">
                      <div>
                        <span>Languages:</span> TypeScript/JavaScript, Python,
                        PostgreSQL, SQL, HTML, CSS, C/C++, C#
                      </div>
                      <div>
                        <span>Experience with:</span> Angular, React, Redux,
                        MongoDB, NodeJS, Sass
                      </div>
                      <div>
                        <span>Other tools:</span> Git version control,
                        Bootstrap, REST APIs, Docker, SSMS
                      </div>
                    </Col>
                  </Row>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        {this.state.data.sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}

        <p className="copyright">© 2023 Gregory Smelkov</p>
      </div>
    );
  }
}

export default App;
