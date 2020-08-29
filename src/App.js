import React from 'react';
import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import { FaChevronCircleDown, FaGithub, FaLinkedin, FaHome, FaEnvelope, FaFilePdf, FaUserCircle } from 'react-icons/fa';
import Pdf from '../src/GregorySmelkovResume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onPageScroll = this.onPageScroll.bind(this);
    this.state = {
      winHeight: window.innerHeight,
      slideRight: 10
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onPageScroll);
    window.addEventListener('resize', this.onPageScroll);
  }

  onPageScroll = () => {
    this.setState({ slideRight: window.scrollY / (window.innerHeight * .5) * window.innerWidth + 10 })
  }

  render() {
    return (
      <div style={{ height: "2000px" }}>
        <Jumbotron style={{ height: window.innerHeight }}>
          <div style={{ right: this.state.slideRight }} className="slide-title">
            <h1 className="slide-title-title">
              <span className="title-red">G</span>regory <span className="title-red">Sme</span>lkov
            </h1>
            <h4 className="slide-title-subtitle">
              <span className="title-red">Dev</span>eloper / Student
            </h4>
          </div>
          <div className="arrow"><a href="#about"><FaChevronCircleDown /></a></div>
        </Jumbotron>

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
                        I'm a Computer Science student at UMass Lowell set to graduate in December 2020.
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
                      <div><FaUserCircle /><span> Gregory Smelkov </span></div>
                      <div><FaHome /><span> Lexington, MA </span></div>
                      <div><a target="_blank" rel="noopener noreferrer" href={Pdf}><FaFilePdf /><span> View Resume </span></a></div>
                    </Col>
                    <Col xs={12} sm={6} className="aboutme-list aboutme-right">
                      <div><a href="mailto: gsmelkov@gmail.com"><FaEnvelope /> gsmelkov@gmail.com </a></div>
                      <div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/greg-smelkov/"><FaLinkedin /> linkedin.com/in/greg-smelkov/ </a></div>
                      <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/IsItGreg"><FaGithub /> github.com/IsItGreg </a></div>
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
                      <div><span>Working knowledge of:</span> JavaScript/HTML/CSS, C#, Python, C/C++</div>
                      <div><span>Experience with:</span> React, AngularJS, SQL, MongoDB</div>
                      <div><span>Exposure to:</span> Java, Docker</div>
                      <div><span>Other tools:</span> Git, VisualStudio, Pycharm</div>
                    </Col>
                  </Row>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="education">
          <Container>
            <Row>
              <Col>
                <article>
                  <header>
                    <h2>Education</h2>
                  </header>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>UMass Lowell</h3>
                      <p>Aug 2017 - Dec 2020</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Bachelors in Computer Science</h4>
                      <p>Minor in Business Administration</p>
                      <p>Minor in Math</p>
                      <p>3.87 GPA, Dean's list</p>
                    </Col>
                  </Row>
                  <Row className="row place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Lexington High School</h3>
                      <p>Sep 2013 - May 2017</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Class of 2017</h4>
                      <p>Member of the nationally placing First Tech Challenge robotics team</p>
                    </Col>
                  </Row>
                </article>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="work">
          <Container>
            <Row>
              <Col>
                <article>
                  <header>
                    <h2>Work Experience</h2>
                  </header>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Contract Logix</h3>
                      <p>Sep 2019 - Present</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Software Developer Intern</h4>
                      <p>Working as a member of the development team on contract management solution (C#, JS)</p>
                      <p>Adding features and bug-fixes to the AngularJS/.NET web app using C#, JavaScript, and SQL in both the front end and the back end</p>
                    </Col>
                  </Row>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>MITRE Corporation</h3>
                      <p>May 2019 - Aug 2019</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Software Engineering Intern</h4>
                      <p>Worked alongside full-time developers as a member of an Agile/Scrum team on a DoD sponsored mission planning system</p>
                      <p>Implemented various features and bug fixes in the C#/.NET front-end application</p>
                      <p>Used Docker to adapt a micro-service into a container to have it work with the rest of the service infrastructure</p>
                    </Col>
                  </Row>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Text Machine Lab</h3>
                      <p>Jun 2018 - May 2019</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Research Intern</h4>
                      <p>Designed and developed an interface to annotate articles and other texts with regard to time for a temporal dataset (JavaScript, HTML)</p>
                      <p>Worked to create an annotated call-to-action dataset to predict political unrest (Python)</p>
                      <p>Created a program to extract user conversations from Reddit for teaching chat bots (Python)</p>
                      <p>Wrote a script to scrape and format text from news articles for a temporal dataset (Python)</p>
                    </Col>
                  </Row>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Empow Studios</h3>
                      <p>Jun 2016 - Oct 2018</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Lead Instructor</h4>
                      <p>Taught game design, robotics, animation, and programming to elementary and middle school students</p>
                      <h4>Marketing/Operations Intern</h4>
                      <p>Gathered marketing information and generated promotional materials</p>
                    </Col>
                  </Row>
                </article>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default App;
