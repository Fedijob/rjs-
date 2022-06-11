import React from "react";
import "./NewHome.css";

function NewHome() {
  return (
    <div>
      <div className="slider">
        <div className="callbacks_container">
          <ul className="rslides callbacks callbacks1" id="slider">
            <div
              className="slid banner1 callbacks1_on"
              id="callbacks1_s0"
              style={{
                display: "block",
                float: "left",
                position: "relative",
                opacity: 1,
                zIndex: 2,
                transition: "opacity 500ms ease-in-out 0s",
              }}
            >
              <div className="caption">
                <h3>Adventure Game - 343 industries - master chief</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec pellentesque ex. Morbi iaculis mi in varius auctor. Nullam
                  feugiat erat ex, eu vehicula velit efficitur non.
                </p>
              </div>
            </div>
            <div
              className="slid banner2"
              id="callbacks1_s1"
              style={{
                display: "block",
                float: "none",
                position: "absolute",
                opacity: 0,
                zIndex: 1,
                transition: "opacity 500ms ease-in-out 0s",
              }}
            >
              <div className="caption">
                <h3>God of war - kratos - sony santa monica</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec pellentesque ex. Morbi iaculis mi in varius auctor. Nullam
                  feugiat erat ex, eu vehicula velit efficitur non.
                </p>
              </div>
            </div>
            <div
              className="slid banner3"
              id="callbacks1_s2"
              style={{
                display: "block",
                float: "none",
                position: "absolute",
                opacity: 0,
                zIndex: 1,
                transition: "opacity 500ms ease-in-out 0s",
              }}
            >
              <div className="caption">
                <h3>Battlefield 4 - game - explosion - digital illusions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  nec pellentesque ex. Morbi iaculis mi in varius auctor. Nullam
                  feugiat erat ex, eu vehicula velit efficitur non.
                </p>
              </div>
            </div>
          </ul>
          <ul className="callbacks_tabs callbacks1_tabs">
            <li className="callbacks1_s1 callbacks_here">
              <a href="#" className="callbacks1_s1">
                1
              </a>
            </li>
            <li className="callbacks1_s2">
              <a href="#" className="callbacks1_s2">
                2
              </a>
            </li>
            <li className="callbacks1_s3">
              <a href="#" className="callbacks1_s3">
                3
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="top-games">
            <h3>Top Games</h3>
            <span />
          </div>
          <div className="top-game-grids">
            <div className="nbs-flexisel-container">
              <div className="nbs-flexisel-inner">
                <ul
                  id="flexiselDemo1"
                  className="nbs-flexisel-ul"
                  style={{ left: "-316.065px", display: "block" }}
                >
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>Arcade Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>Action Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>Racing Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t3.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>3D Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t4.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>Arcade Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t2.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>Action Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t1.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>Racing Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t3.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="nbs-flexisel-item" style={{ width: "327px" }}>
                    <div className="game-grid">
                      <h4>3D Games</h4>
                      <p>Nulla elementum nunc tempus.</p>
                      <img
                        src="images/t4.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </li>
                </ul>
                <div
                  className="nbs-flexisel-nav-left"
                  style={{ top: "196px" }}
                />
                <div
                  className="nbs-flexisel-nav-right"
                  style={{ top: "196px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHome;
