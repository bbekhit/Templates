import React from "react";
import img from "../../images/man-156584_640.png";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Layout = () => {
  return (
    <div className="container-fluid head">
      <div className="row wrapper justify-content-between">
        <div className="col-md-3 tail">
          <div className="card ">
            <div className="overlay">
              <div className="text">Hello There</div>
            </div>
            <div className="image">
              <img src={img} alt="mountains" />
            </div>
            <div className="content">
              <h4>Joe Doe</h4>
              <h6>Engineer</h6>
              <h6>Apple Systems Inc</h6>
            </div>
            <div className="icons">
              <FaFacebook />
              <FaInstagram />
              <FaGoogle />
            </div>
          </div>
        </div>
        <div className="col-md-3 tail">
          <div className="card ">
            <div className="overlay">
              <div className="text">Hello There</div>
            </div>
            <div className="image">
              <img src={img} alt="mountains" />
            </div>
            <div className="content">
              <h4>Joe Doe</h4>
              <h6>Engineer</h6>
              <h6>Apple Systems Inc</h6>
            </div>
            <div className="icons">
              <FaFacebook />
              <FaInstagram />
              <FaGoogle />
            </div>
          </div>
        </div>
        <div className="col-md-3 tail">
          <div className="card ">
            <div className="overlay">
              <div className="text">Hello There</div>
            </div>
            <div className="image">
              <img src={img} alt="mountains" />
            </div>
            <div className="content">
              <h4>Joe Doe</h4>
              <h6>Engineer</h6>
              <h6>Apple Systems Inc</h6>
            </div>
            <div className="icons">
              <FaFacebook />
              <FaInstagram />
              <FaGoogle />
            </div>
          </div>
        </div>
        <div className="col-md-3 tail">
          <div className="card ">
            <div className="overlay">
              <div className="text">Hello There</div>
            </div>
            <div className="image">
              <img src={img} alt="mountains" />
            </div>
            <div className="content">
              <h4>Joe Doe</h4>
              <h6>Engineer</h6>
              <h6>Apple Systems Inc</h6>
            </div>
            <div className="icons">
              <FaFacebook />
              <FaInstagram />
              <FaGoogle />
            </div>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-around text-wrapper"
        style={{ border: "1px solid green" }}
      >
        <div
          className="left-top col-md-6"
          style={{ border: "1px solid purple" }}
        >
          <div>
            <div
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "3px solid red",
                margin: "0 auto",
                overflow: "hidden",
                padding: "10px"
              }}
            >
              <img
                src={img}
                style={{
                  width: "100%",
                  height: "100%"
                }}
                alt="mountains"
              />
            </div>

            <h1>Welcome! To the Magic</h1>
            <h4>
              Here you can find what you have been dreaming off for a while, and
              looking for it everywhere!!!
              <br />
              Welcome to the final Destination
            </h4>
          </div>
        </div>
        <div className="right-top col-md-6">
          <div className="col-md-3 tail">
            <div className="card ">
              <div className="overlay">
                <div className="text">Hello There</div>
              </div>
              <div className="image">
                <img src={img} alt="mountains" />
              </div>
              <div className="content">
                <h4>Joe Doe</h4>
                <h6>Engineer</h6>
                <h6>Apple Systems Inc</h6>
              </div>
              <div className="icons">
                <FaFacebook />
                <FaInstagram />
                <FaGoogle />
              </div>
            </div>
          </div>
        </div>
        <div className="right-top bottom col-md-6">
          <div className="col-md-3 tail">
            <div className="card ">
              <div className="overlay">
                <div className="text">Hello There</div>
              </div>
              <div className="image">
                <img src={img} alt="mountains" />
              </div>
              <div className="content">
                <h4>Joe Doe</h4>
                <h6>Engineer</h6>
                <h6>Apple Systems Inc</h6>
              </div>
              <div className="icons">
                <FaFacebook />
                <FaInstagram />
                <FaGoogle />
              </div>
            </div>
          </div>
        </div>
        <div
          className="left-top col-md-6"
          style={{ border: "1px solid purple" }}
        >
          <div>
            <img
              src={img}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "3px solid lightblue",
                padding: "10px",
                margin: "10px"
              }}
              alt="mountains"
            />
            <h1>Welcome! To the Magic</h1>
            <h4>
              Here you can find what you have been dreaming off for a while, and
              looking for it everywhere!!!
              <br />
              Welcome to the final Destination
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
