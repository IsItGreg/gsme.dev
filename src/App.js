import React from 'react';
import { Jumbotron, Row, Col, Container, Nav, Button } from 'react-bootstrap';
import { FaChevronCircleDown, FaPlay, FaFileAlt, FaGithub, FaLinkedin, FaHome, FaEnvelope, FaFilePdf, FaUserCircle, FaHamburger } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';
import Pdf from '../src/GregorySmelkovResume.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
    }
  }

  // On mount, add in event listeners to allow for several of the elements of
  // the page to move based on the scroll position or adapt to page resizes
  componentDidMount() {
    window.addEventListener('scroll', this.onPageScroll);
    window.addEventListener('resize', this.onPageScroll);
  }

  onPageScroll = () => {
    // Move slider to the left when scrolling
    this.setState({
      slideRight: window.scrollY / (window.innerHeight * .5) * window.innerWidth + 10
    })
    // Close mobile navbar dropdown if page is scrolled up
    if (window.scrollY <= window.innerHeight - 50) {
      this.topbarDropdown.current.style.height = "0";
      this.setState({ showTopbarDropdown: false });
    }
    // Fade out arrow and fade in navbar when page is scrolled down
    this.setState({
      arrowOpacity: 1 - (window.scrollY - window.innerHeight / 4) / (window.innerHeight / 4),
      navbarOpacity: (window.scrollY - 4 * window.innerHeight / 5) / (window.innerHeight / 8)
    })

  }

  // Used the ref height to animate mobile navbar dropdown opening
  toggleTopbarDropdown = () => {
    if (window.scrollY > window.innerHeight - 50) {
      if (this.state.showTopbarDropdown) {
        this.topbarDropdown.current.style.height = "0";
      }
      else {
        this.topbarDropdown.current.style.height = "171px";
      }
      this.setState({ showTopbarDropdown: !this.state.showTopbarDropdown });
    }
  }

  render() {
    return (
      <div>
        {/* <FaPlay className="big-arrow" /> */}
        <Jumbotron style={{ height: window.innerHeight }}>
          <div style={{ right: this.state.slideRight }} className="slide-title">
            <h1 className="slide-title-title">
              <span className="title-red">G</span>regory <span className="title-red">Sme</span>lkov
            </h1>
            <h4 className="slide-title-subtitle">
              <span className="title-red">Dev</span>eloper / Student
            </h4>
          </div>
          <div style={{ opacity: this.state.arrowOpacity }} className="arrow"><a href="#about"><FaChevronCircleDown /></a></div>
        </Jumbotron>
        <div style={{ height: window.innerHeight }} className="hide-dropdown" />
        <div className="topbar">
          <h3 style={{ opacity: this.state.navbarOpacity }} className="navbar-name">
            <span className="title-red">G</span>regory <span className="title-red">Sme</span>lkov
          </h3>
          <div style={{ opacity: this.state.navbarOpacity }} className="scrollspy-wrapper">
            <Scrollspy className="page-navbar-scrollspy" items={['about', 'skills', 'education', 'work', 'projects']} currentClassName="navbar-active" offset={-1}>
              <Nav><a href="#about">About</a></Nav>
              <Nav><a href="#skills">Skills</a></Nav>
              <Nav><a href="#education">Education</a></Nav>
              <Nav><a href="#work">Work</a></Nav>
              <Nav><a href="#projects">Projects</a></Nav>
            </Scrollspy>
            <Button variant="outline" className="hamburger-menu-button" onClick={this.toggleTopbarDropdown}><FaHamburger /></Button>
          </div>
        </div>
        <div className="topbar-dropdown" ref={this.topbarDropdown}>
          <Scrollspy className="topbar-dropdown-scrollspy" items={['about', 'skills', 'education', 'work', 'projects']} currentClassName="navbar-active" offset={50}>
            <Nav onClick={this.toggleTopbarDropdown}><a href="#about">About</a></Nav>
            <Nav onClick={this.toggleTopbarDropdown}><a href="#skills">Skills</a></Nav>
            <Nav onClick={this.toggleTopbarDropdown}><a href="#education">Education</a></Nav>
            <Nav onClick={this.toggleTopbarDropdown}><a href="#work">Work</a></Nav>
            <Nav onClick={this.toggleTopbarDropdown}><a href="#projects">Projects</a></Nav>
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
                    <Col >
                      <p>
                        I have just completed my bachelors of Computer Science at UMass Lowell in December 2020 and I am currently looking for a full time position as a software engineer. You can reach me through my email or send a message through LinkedIn.
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
                      <div><a href="mailto: gsme+gsmelkov@gmail.com"><FaEnvelope /> gsmelkov@gmail.com </a></div>
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
                      <div><span>Working knowledge of:</span> JavaScript, HTML/CSS, C#, Python, C/C++</div>
                      <div><span>Experience with:</span> React, Redux, AngularJS, SQL, MongoDB</div>
                      <div><span>Exposure to:</span> Java, Docker</div>
                      <div><span>Other tools:</span> Git version control, Bootstrap, NodeJS, REST APIs, SSMS</div>
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
                  {/* <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>UMass Amherst</h3>
                      <p>Jan 2021 - May 2022</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Masters of Computer Science</h4>
                      <p>Pursuing graduate degree, expected May 2022</p>
                      <p>Notable courses: Machine Learning, Optimization, Wireless Networking & Sensing, Intelligent Visual Computing</p>
                    </Col>
                  </Row> */}
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>UMass Lowell</h3>
                      <p>Aug 2017 - Dec 2020</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Bachelors of Computer Science</h4>
                      <p>Minor in Business Administration</p>
                      <p>Minor in Math</p>
                      <p>3.87 GPA, Dean's list</p>
                      <p>Notable courses: Software Engineering, Analysis of Algorithms, Operating Systems, Foundations of CS, Organization of Programming Languages</p>
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
                      <p>Worked with development team to design and develop contract collaboration portal</p>
                      <p>Improved the users’ experience  by implementing new features and resolving bugs in an AngularJS/.NET web app (C#, JavaScript)</p>
                      <p>Created database migrations and used SSMS to write and run SQL queries (SQL)</p>
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
                      <p>Implemented many new features as well as found and fixed bugs in the .NET application (C#)</p>
                      <p>Adapted a microservice into a Docker container to run with the rest of the service infrastructure</p>
                    </Col>
                  </Row>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Text Machine Lab</h3>
                      <p>Jun 2018 - May 2019</p>
                      <p><a className="place-link" target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/1908.11443">NarrativeTime paper <FaFileAlt /></a></p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Research Intern</h4>
                      <p>Designed and developed an interface to annotate articles and other texts with regard to time to quickly and easily create annotated datasets (JavaScript, HTML)</p>
                      <p>Co-author on NarrativeTime research paper about temporal annotation tool</p>
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

        <section id="projects">
          <Container>
            <Row>
              <Col>
                <article>
                  <header>
                    <h2>Projects</h2>
                  </header>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Cage Inventory Management System</h3>
                      <p>June 2020 - Present</p>
                      <p><a className="place-link" target="_blank" rel="noopener noreferrer" href="https://github.com/IsItGreg/CageIMS">View on GitHub <FaGithub /></a></p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Camera inventory management web-app</h4>
                      <p>Lead the design and development on a full-stack inventory management solution for the photography department at UMass Lowell.</p>
                      <p>Built using React, Node.js, and MongoDB, this project was fun to create as it allowed me to learn those tools as well as RESTful APIs, managing user passwords, and all that goes into a larger project.</p>
                      <p>The front-end UI was implemented in React using Bootstrap, Material-UI, Semantic UI, and Sass.</p>
                    </Col>
                  </Row>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Personal Website</h3>
                      <p>Aug 2020 - Present</p>
                      <p><a className="place-link" target="_blank" rel="noopener noreferrer" href="https://github.com/IsItGreg/gsme.dev">View on GitHub <FaGithub /></a></p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>gsme.dev</h4>
                      <p>This website was intended to be a digital version of my resume that allows for more detailed descriptions of what I have done.</p>
                      <p>I built this site using React, Bootstrap, and hosted on GitHub pages and you can find the source code in the repository on the left.</p>
                    </Col>
                  </Row>
                  <Row className="place">
                    <Col xs={12} sm={6} className="place-name">
                      <h3>Freshman / Sophomore Projects</h3>
                      <p>Sep 2017 - Dec 2018</p>
                    </Col>
                    <Col xs={12} sm={6} className="place-about">
                      <h4>Ants and Doodlebugs</h4>
                      <p>Developed a small simulation to show a balance between predators and prey (C++)</p>
                      <h4>Big Int</h4>
                      <p>Created a class to handle mathematical operations with extremely large numbers by storing the data as strings (C++)</p>
                      <h4>Evil Hangman</h4>
                      <p>Programmed a console game of hangman where the computer will cheat to win (C)</p>
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
