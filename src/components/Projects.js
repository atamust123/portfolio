import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/svg/color-sharp2.png";
import mern from "../assets/svg/mern.jpg";
import poi from "../assets/svg/poi.jpg";
import webpack from "../assets/svg/webpack.png";
import jwt from "../assets/svg/jwt.jpg";
import rq from "../assets/svg/rq.jpg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Excel Read on Java",
      description: "Simple xlsx file reader for java using apache poi",
      imgUrl: poi,
      navigate: "https://github.com/atamust123/xlsxReader",
    },
    {
      title: "JWT Authentication",
      description:
        "Basic JWT token is created and simple login and sign up pages using expressJS",
      imgUrl: jwt,
      navigate: "https://github.com/atamust123/JWT",
    },
    {
      title: "React query ",
      description:
        "In order to ignore react hooks side effects react query library is used",
      imgUrl: rq,
      navigate: "https://github.com/atamust123/react-query",
    },
    {
      title: "Webpack practice",
      description: "In order to learn how webpack and babel work",
      imgUrl: webpack,
      navigate: "https://github.com/atamust123/webpack",
    },
    {
      title: "MERN Stack",
      description: "Create an complete MERN stack project with CRUD operations",
      imgUrl: mern,
      navigate: "https://github.com/atamust123/mernlearn/tree/master",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Github</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Work</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Currently Worked On
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first" title="Github">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Since I had worked in a defense industry company
                          before I left, it is prohibited to share my components
                          on my github account. I have deep dived in form and
                          validations on React. Any kind of frontend components
                          were created such as Combobox, Input, Checkbox,
                          Pickers and so on...
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Nowadays I have been worked on Traffic management
                          topics. Such as how load balancer works, what is Kafka
                          and RabbitMQ. Network topics like protocols,
                          configurations. How API-gateway works, how NGINX can
                          be the plus on it.{" "}
                        </p>
                        <p>
                          On the other hand there are some new frontend
                          technologies. NextJS is one of them. SSR components
                          brought back. In my opinion it is crucial to learn
                          SSR, because they provide better SEO,and it's worth a
                          lot these days. So I have been reading articles and
                          practicing on it
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="simple"
      ></img>
    </section>
  );
};
