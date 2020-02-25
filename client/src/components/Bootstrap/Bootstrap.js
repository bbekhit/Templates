import React from "react";
import img from "../../images/main.jpg";
import img1 from "../../images/mountain1.jpg";
import img2 from "../../images/mountain2.jpg";
import img3 from "../../images/mountain3.jpg";
import img4 from "../../images/mountain4.jpg";
import person from "../../images/man-156584_640.png";
import { FaPlayCircle } from "react-icons/fa";
const Bootstrap = () => {
  return (
    <>
      {/* fullscreen */}
      <section className="banner">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col">
              <img src={img} alt="mountains" />
            </div>
          </div>
        </div>
      </section>

      {/* ordering and layout */}
      <section className="about">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img src={img1} alt="mountains" />
            </div>
            <div className="col-md-6 left">
              <h1>About Me</h1>
              <p>
                I am Boutros, a Software Engineer at Epam. Basically i prefer to
                work as front-end using HTML, CSS, JavaScript, and ReactJS.
                <br />I guarantee satisfaction about my work and give a 6 month
                customer support on all my work so feel free to contact me any
                time
              </p>
            </div>

            <div className="col-md-6 bottom-left">
              <h1>About Me</h1>
              <p>
                I am Boutros, a Software Engineer at Epam. Basically i prefer to
                work as front-end using HTML, CSS, JavaScript, and ReactJS.
                <br />I guarantee satisfaction about my work and give a 6 month
                customer support on all my work so feel free to contact me any
                time
              </p>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="mountains" />
            </div>
          </div>
        </div>
      </section>

      {/* hr separator */}
      <section className="separator">
        <hr />
        <div className="icon">
          <FaPlayCircle />
        </div>
      </section>

      {/* cards */}
      <section className="cards">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="photo">
                  <img src={person} alt="per" />
                </div>
                <div className="content">
                  <p>Boutros Bekhit</p>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="photo">
                  <img src={person} alt="per" />
                </div>
                <div className="content">
                  <p>Boutros Bekhit</p>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="photo">
                  <img src={person} alt="per" />
                </div>
                <div className="content">
                  <p>Boutros Bekhit</p>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="photo">
                  <img src={person} alt="per" />
                </div>
                <div className="content">
                  <p>Boutros Bekhit</p>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bootstrap;
