import React from "react";
import img from "../../images/logo-white.png";
import img1 from "../../images/mountain1.jpg";
import img2 from "../../images/mountain2.jpg";
import img3 from "../../images/mountain3.jpg";
import vid1 from "../../images/samplevideo.mp4";
import { FaConnectdevelop, FaMap, FaCompass, FaHeart } from "react-icons/fa";

const Natour = () => {
  return (
    <div className="natour-wrapper">
      <header className="header">
        <div className="header__logo-box">
          <img src={img} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
      <section className="section-about">
        {/* <div className="section-about__heading">
          <h2 className="section-about__heading--text">
            Exciting tours for adventours people
          </h2>
        </div>
        <div className="section-about__content">
          <div className="section-about__content--text">
            <h3 class="text-heading">
              You're going to fall in love with nature
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>

            <h3 class="text-heading">
              Live adventures like you never have before
            </h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>

            <a href="#" class="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="section-about__content--images">There</div>
        </div> */}
        <div className="title margin-bottom-big">
          <h2>Exciting tours for adventours people</h2>
        </div>

        <div className="row-grid">
          <div className="col-1-of-2">
            <div style={{ padding: "2rem" }}>
              <h3 className="heading-tertiary margin-bottom-small">
                You're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>

              <h3 className="heading-tertiary margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores nulla deserunt voluptatum nam.
              </p>

              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="composition" style={{ padding: "2rem" }}>
              <img
                // srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
                src={img1}
              />

              <img
                // srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
                src={img2}
              />

              <img
                // srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
                src={img3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* // Features  */}
      <section className="section-features">
        <div class="row-grid">
          <div class="col-1-of-4">
            <div class="feature-box">
              <FaConnectdevelop className="feature-box__icon" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Explore the world
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <FaCompass className="feature-box__icon" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Meet nature
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <FaMap className="feature-box__icon" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Find your way
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <FaHeart className="feature-box__icon" />
              <h3 class="heading-tertiary u-margin-bottom-small">
                Live healthier
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tours  */}
      <section className="section-tours">
        <div className="title margin-bottom-big">
          <h2>Most popular tours</h2>
        </div>
        <div class="row-grid">
          <div class="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$249</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$249</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    The Sea Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tour</li>
                    <li>up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$249</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stories  */}
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={vid1} type="video/mp4" />
          </video>
        </div>
        <div className="title margin-bottom-big">
          <h2>We Make People Happy</h2>
        </div>
        <div className="row-grid">
          <div className="story">
            <figure className="story__shape">
              <img src={img3} className="story__img" />
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary margin-bottom-small">
                I had the best week ever with my familly
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aperiam, ipsum sapiente
                aspernatur.consectetur adipisicing elit. Aperiam, ipsum sapiente
                aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-book">
        <div className="row-grid">
          <div className="book">
            <div className="book__form">
              <form className="form">
                <div className="title margin-bottom-big">
                  <h2>Most popular tours</h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form__input"
                    id="name"
                  />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form__input"
                    id="email"
                  />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Natour;
