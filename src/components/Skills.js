import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/svg/color-sharp.png";
import "./progress.css";
const RESPONSİVE_DESGIN_PROPERTIES = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                In a large React based projectby providing type-safety with
                TypeScript, many frontend concepts and libraries were used. Such
                as life-cycle hooks, tanstack, redux, etc...
              </p>
              <Carousel
                responsive={RESPONSİVE_DESGIN_PROPERTIES}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item fit-content">
                  <div className="progress blue">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">90%</div>
                  </div>
                  <h5>Javascript/TypeScript</h5>
                </div>
                <div className="item fit-content">
                  <div className="progress green">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">75%</div>
                  </div>
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item fit-content">
                  <div className="progress yellow">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">70%</div>
                  </div>
                  <h5>React</h5>
                </div>
                <div className="item fit-content">
                  <div className="progress yellow">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">70%</div>
                  </div>
                  <h5>Utility Libraries</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="change" />
    </section>
  );
};
