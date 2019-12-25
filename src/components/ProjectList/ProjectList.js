import React, { Component } from "react";
import { TweenLite } from "gsap";

import image1 from "./image-1.jpg";
import image2 from "./image-2.jpg";
import image3 from "./image-3.jpg";
import image4 from "./image-4.jpg";

import "./ProjectList.scss";

class projectList extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  mouseMove = e => {
    TweenLite.to(this.myRef.current, 0.5, {
      css: {
        left: e.pageX,
        top: e.pageY
      },
      delay: 0.03
    });
  };

  handleMouseEnter = () => {
    TweenLite.to(this.myRef.current, 0, {
      css: {
        opacity: "1"
      }
    });
  };

  handleMouseLeave = () => {
    console.log("leaving");
    TweenLite.to(this.myRef.current, 0, {
      css: {
        opacity: "0"
      }
    });
  };

  onHover = e => {
    if (e.target.className === "project-overlay 1") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image1 + ")" }
      });
    }
    if (e.target.className === "project-overlay 2") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image2 + ")" }
      });
    }
    if (e.target.className === "project-overlay 3") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image3 + ")" }
      });
    }
    if (e.target.className === "project-overlay 4") {
      TweenLite.to(this.myRef.current, 0, {
        css: { "background-image": "url(" + image4 + ")" }
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="ProjectList"
          onMouseOver={this.mouseMove}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="cursor" ref={this.myRef}></div>
          <div className="wrapper">
            <div className="project-list">
              <div className="project p-1" onMouseEnter={this.onHover}>
                <div className="project-title">
                  <h1>Motionland</h1>
                </div>
                <div className="project-categ">Branding</div>
                <div className="project-overlay 1"></div>
              </div>
              <div className="project p-2" onMouseEnter={this.onHover}>
                <div className="project-title">
                  <h1>Focus Reactive</h1>
                </div>
                <div className="project-categ">Photography</div>
                <div className="project-overlay 2"></div>
              </div>
              <div className="project p-3" onMouseEnter={this.onHover}>
                <div className="project-title">
                  <h1>Aspect</h1>
                </div>
                <div className="project-categ">Web Design</div>
                <div className="project-overlay 3"></div>
              </div>
              <div className="project p-4" onMouseEnter={this.onHover}>
                <div className="project-title">
                  <h1>Logomark</h1>
                </div>
                <div className="project-categ">Branding</div>
                <div className="project-overlay 4"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default projectList;
