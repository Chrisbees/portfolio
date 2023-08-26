import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import ProfileImg from "../../../assets/bg2.png";
import hireme from "../../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello </span>
        <span className="introText">
          I'm <span className="introName">Chris</span>
          <br />
          Web Developer
        </span>
        <p className="IntroPara">
          I am a skilled web developer with an experience in creating <br />{" "}
          functional applications
        </p>
        <Link className="">
          <button className="btn">
            <img src={hireme} alt="hireMeBtn" className="btnImg" />
            <p>Hire Me</p>
          </button>
        </Link>
      </div>
      <img src={ProfileImg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
