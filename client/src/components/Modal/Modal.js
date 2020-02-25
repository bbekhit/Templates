import React, { useState } from "react";
import img from "../../images/mountain2.jpg";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(true);
  };
  const preventClick = e => {
    e.stopPropagation();
  };
  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen ? (
        <div className="bg" onClick={() => setIsOpen(false)}>
          <div className="close" onClick={() => setIsOpen(false)}>
            X
          </div>
          {/* <div className="content" onClick={e => preventClick(e)}>
            <img src={img} alt="mountains" />
          </div> */}
          <div className="content" onClick={e => preventClick(e)}>
            <div className="text">
              <div className="header">Welcome to The Magic</div>
              <div className="body">
                <p>
                  this is a trial body and you have to test it well so we can
                  proceed, this is a trial body and you have to test it well so
                  we can proceed, this is a trial body and you have to test it
                  well so we can proceed, this is a trial body and you have to
                  test it well so we can proceed, this is a trial body and you
                  have to test it well so we can proceed, this is a trial body
                  and you have to test it well so we can proceed, this is a
                  trial body and you have to test it well so we can proceed,
                  this is a trial body and you have to test it well so we can
                  proceed, this is a trial body and you have to test it well so
                  we can proceed, this is a trial body and you have to test it
                  well so we can proceed, this is a trial body and you have to
                  test it well so we can proceed, this is a trial body and you
                  have to test it well so we can proceed, this is a trial body
                  and you have to test it well so we can proceed, this is a
                  trial body and you have to test it well so we can proceed,
                </p>
              </div>
              <div className="footer">
                <FaFacebook />
                <FaInstagram />
                <FaGoogle />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
