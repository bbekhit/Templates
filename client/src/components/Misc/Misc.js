import React, { useState, useEffect } from "react";
import img from "../../images/man-156584_640.png";
import img2 from "../../images/wave.svg";
import img3 from "../../images/wave2.svg";
import sampleVideo from "../../images/samplevideo.mp4";
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaCaretDown,
  FaDribbble,
  FaCaretUp,
  FaCaretRight
} from "react-icons/fa";
import Typer from "../Typer/Typer";

const Misc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconOpen, setIconOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isCapsLockActive, setIsCapsLocked] = useState(false);
  const months = ["Jan", "Feb", "March"];
  let msgs = [
    "WELCOME TO MY WORLD",
    "THIS IS MY WEBSITE",
    "I AM AT YOUR SERVICE"
  ];

  const EVENT_KEY_DOWN = "keydown";
  const EVENT_KEY_UP = "keyup";

  //////////////////////////////////
  useEffect(() => {
    // document.addEventListener(EVENT_KEY_DOWN, wasCapsLockActivated);
    // document.addEventListener(EVENT_KEY_UP, wasCapsLockDeactivated);

    // return () => {
    //   document.removeEventListener(EVENT_KEY_DOWN, wasCapsLockActivated);
    //   document.removeEventListener(EVENT_KEY_UP, wasCapsLockDeactivated);
    // };
    document
      .getElementById("caps")
      .addEventListener(EVENT_KEY_UP, wasCapsLockActivated);
    document
      .getElementById("caps")
      .addEventListener(EVENT_KEY_DOWN, wasCapsLockDeactivated);

    return () => {
      document
        .getElementById("caps")
        .removeEventListener(EVENT_KEY_DOWN, wasCapsLockDeactivated);
      document
        .getElementById("caps")
        .removeEventListener(EVENT_KEY_UP, wasCapsLockActivated);
    };
  });

  const wasCapsLockActivated = event => {
    if (
      event.getModifierState &&
      event.getModifierState("CapsLock") &&
      isCapsLockActive === false
    ) {
      setIsCapsLocked(true);
    }
  };

  const wasCapsLockDeactivated = event => {
    if (
      event.getModifierState &&
      !event.getModifierState("CapsLock") &&
      isCapsLockActive === true
    ) {
      setIsCapsLocked(false);
    }
  };
  return (
    <div className="misc-wrapper">
      {/* hoverable + socialbar */}
      <div className="hoverable">
        <button className="green">Green</button>
        <button className="blue">blue</button>
        <div class="icon-bar">
          <button className="facebook btn">
            <FaFacebook />
          </button>
          <button className="twitter btn">
            <FaTwitter />
          </button>
          <button className="google btn">
            <FaGoogle />
          </button>
          <button className="linkedin btn">
            <FaLinkedin />
          </button>
          <button className="youtube btn">
            <FaYoutube />
          </button>
        </div>
      </div>
      {/* ***************************************************************** */}

      <div className="right-content">
        {/* ***************************************************************** */}
        {/* group button */}
        <div className="btn-group">
          <button>Apple</button>
          <button>Samsung</button>
          <button>Sony</button>
        </div>
        {/* ***************************************************************** */}

        {/* ***************************************************************** */}
        {/* split button */}
        <div className="split-button">
          <button>Click</button>
          <div className="icon">
            <FaCaretDown />
          </div>
          <div className="dropdown">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        {/* ***************************************************************** */}

        {/* ***************************************************************** */}
        {/* flip card   */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={img} alt="avatar" />
              <div className="wrapper-1">
                <h1>John Doe</h1>
                <p class="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div>
                  <a href="#">
                    <FaDribbble className="fa" />
                  </a>
                  <a href="#">
                    <FaTwitter className="fa" />
                  </a>
                  <a href="#">
                    <FaYoutube className="fa" />
                  </a>
                </div>
              </div>

              <p>
                <button>Contact</button>
              </p>
            </div>
            <div className="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
        {/* ***************************************************************** */}

        {/* ***************************************************************** */}
        {/* arrow  */}
        <div className="arrow-wrapper">
          <div className="content"></div>
        </div>
        {/* ***************************************************************** */}

        {/* ***************************************************************** */}
        {/* responsive text */}
        <div
          className="responsive-text"
          style={{
            width: "80vw",
            border: "1px solid teal",
            textAlign: "center",
            fontSize: "40px",
            padding: "20px",
            marginTop: "30px",
            whiteSpace: "wrap"
          }}
        >
          <h1>Responsive Text</h1>

          <p>Resize the browser window to see how the text size scales.</p>

          <p>
            Use the "vw" unit when sizing the text. 10vw will set the size to
            10% of the viewport width.
          </p>

          <p>
            Viewport is the browser window size. 1vw = 1% of viewport width. If
            the viewport is 50cm wide, 1vw is 0.5cm.
          </p>
        </div>
        {/* ***************************************************************** */}

        {/* ***************************************************************** */}
        {/* wavy   */}
        {/* <div
          style={{
            position: "fixed",
            bottom: "0",
            left: "0",
            width: "100vw"
          }}
        >
          <img src={img2} alt="wave" style={{ width: "100%" }} />
          <div
            style={{ position: "absolute", bottom: "100px", right: "135px" }}
          >
            Hello There
          </div>
          <div
            style={{
              position: "fixed",
              top: "0",
              right: "0",
              width: "30vw"
            }}
          >
            <img src={img3} alt="wave" />
          </div>
        </div> */}
        {/* ***************************************************************** */}

        {/* ***************************************************************** */}
        {/* list wrapper    */}
        <div className="list-wrapper">
          <div className="title" onClick={() => setIconOpen(!iconOpen)}>
            <div>Months</div>
            <div className="icon">
              {iconOpen ? <FaCaretUp /> : <FaCaretDown />}
            </div>
          </div>

          {iconOpen
            ? months.map((item, i) => (
                <div className="item" key={i}>
                  {item}
                </div>
              ))
            : null}
        </div>
        {/* ***************************************************************** */}

        {/* ***************************************************************** */}
        {/* placeholder    */}
        {/* https://codepen.io/design8383/pen/BKnFI?editors=0100 */}
        {/* https://codepen.io/dodozhang21/pen/ceDtL */}
        <div className="placeholder-wrapper">
          <input
            placeholder="Hello styled"
            type="email"
            className="formatted"
          />
          <form class="form">
            <input
              type="email"
              className="form__field"
              placeholder="Your E-Mail Address"
            />
            <button
              type="button"
              className="btn btn--primary btn--inside uppercase"
            >
              Send
            </button>
          </form>
        </div>

        {/* ***************************************************************** */}
        {/* custom select */}
        <div class="custom-select" style={{ width: "200px" }}>
          <select>
            <option value="0">Select car:</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
        </div>

        {/* ***************************************************************** */}
        {/* // custom checkbox  */}
        {/* <div className="checkbox-wrapper">
          {months.map((item, i) => (
            <div key={i} className="checkbox-wrapper">
              <input type="checkbox" />
              <div className="label">{item}</div>
            </div>
          ))}
        </div> */}
        {/* mycustom checkbox  */}
        <div className="myCheckbox-wrapper">
          {months.map((item, i) => (
            <label key={i} className="checkbox-container">
              <input type="checkbox" />
              <span className="checkbox"></span>
              {item}
            </label>
          ))}
        </div>
        {/* radio buttons  */}
        <div className="radio-wrapper">
          {months.map((item, i) => (
            <label key={i} className="radio-container">
              <input
                type="radio"
                name="radio"
                checked={isSelected}
                onChange={() => setIsSelected(!isSelected)}
              />
              <span className="radio"></span>
              {item}
            </label>
          ))}
        </div>

        {/* ***************************************************************** */}
        {/* animated button  */}
        {/* https://codepen.io/davidicus/pen/emgQKJ */}
        <div className="btn-wrap">
          <button>
            <div className="content-wrapper">
              <div className="text">Hello</div>
              <div className="icon-wrapper">
                <FaCaretRight className="icon" />
              </div>
            </div>
          </button>
        </div>
        {/* ***************************************************************** */}
        {/* ***************************************************************** */}
        {/* video  */}
        <div className="video-wrapper" style={{ margin: "20px" }}>
          <div className="row">
            <div
              className="col"
              style={{
                border: "1px solid red",
                height: "700px",
                overflow: "hidden"
              }}
            >
              <video
                autoPlay
                loop
                muted
                id="myVideo"
                style={{
                  position: "relative",
                  // zIndex: "-1",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              >
                <source src={sampleVideo} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="col" style={{ background: "green" }}>
              right
            </div>
          </div>
        </div>
        {/* ***************************************************************** */}
        {/* loading-dots  */}
        <div className="loading-wrapper">
          <div className="circle one"></div>
          <div className="circle two"></div>
          <div className="circle three"></div>
        </div>
        {/* <div className="glowing">
          <div className="circle one">
            <div className="circle two">
              <div className="circle three">Hello</div>
            </div>
          </div>
        </div> */}
        <div className="glowing">
          <div className="circle one"></div>
          <div className="circle two"> </div>
          <div className="circle three">Hello</div>
        </div>

        {/* ***************************************************************** */}
        {/* ***************************************************************** */}
        {/* toggle button  */}
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        {/* ***************************************************************** */}
        {/* ***************************************************************** */}
        {/* custom scroll  */}
        <div className="custom-scroll">
          <h2>Custom Scrollbar Example</h2>

          <p>
            <strong>Note:</strong> The -webkit-scrollbar is not supported by
            Firefox or IE and Edge.
          </p>

          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
          <p>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum{" "}
          </p>
        </div>
        {/* ***************************************************************** */}
        {/* ***************************************************************** */}
        {/* responsive form  */}
        <div className="reponsive-form">
          <div className="row" style={{ margin: "0" }}>
            <div
              className="col-md-2"
              style={{
                padding: "0",
                alignSelf: "center",
                fontSize: "20px"
              }}
            >
              Name:
            </div>
            <div className="col-md-10" style={{ padding: "0" }}>
              <input />
            </div>
            <div
              className="col-md-2"
              style={{
                padding: "0",
                alignSelf: "center",
                fontSize: "20px"
              }}
            >
              E-mail:
            </div>
            <div className="col-md-10" style={{ padding: "0" }}>
              <input />
            </div>
          </div>
        </div>
        {/* ********************************************************************* */}
        <div className="typing">
          <Typer heading={"Things I want to type:"} messages={msgs} />
        </div>
        {/* ********************************************************************* */}
        {/* ********************************************************************* */}
        {/* caps lock  */}
        <input
          style={{ margin: "40px", height: "35px", width: "300px" }}
          id="caps"
        />
        {isCapsLockActive ? "error" : null}
        {/* ********************************************************************* */}
      </div>
    </div>
  );
};

export default Misc;
