import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/svg/header-img.svg";
import PDF from "../assets/resume.pdf";
const PERIOD = 2000;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Web Designer"];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
      console.log("tick");
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.6);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(PERIOD);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="d-flex aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Atakan AYYILDIZ `}
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Almost 2 years experience on Web Development. Gained
                    knowledge of various frontend frameworks. Such as ReactJS,
                    NextJS. Writing HTML based code on JSX files. Enjoys
                    designing with CSS on free time. On the other hand. In the
                    last job at Milsoft Software Techs, opportunity to learn
                    backend technologies. Java Spring, Vertx, Hibernate, SQL and
                    RDBMS(PostgreSQL) and NoSQL(MongoDB) db techs.
                  </p>
                  <button onClick={() => window.open(PDF)}>
                    Download CV <ArrowDownCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
