import React from "react";
import "./skills.css";
import java from "../../assets/java.png";
import ReactImg from "../../assets/React.png";
import sql from "../../assets/sql.png";
import springboot from "../../assets/springboot.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'm a skilled and passionate web developer, decated to building scalable
        and functional web apps
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={java} alt="skillImg" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Java Developer</h2>
            <p>Develop web applications using Java and Springboot Framework</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={springboot} alt="skillImg" className="skillbarImg" />
          <div className="skillBarText">
            <h2>Springboot Developer</h2>
            <p>
              Versatile with building applications with Springboot framework
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactImg} alt="skillImg" className="skillbarImg" />
          <div className="skillBarText">
            <h2>React Development</h2>
            <p>Building frontend that integrates with a Springboot backend</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={sql} alt="skillImg" className="skillbarImg" />
          <div className="skillBarText">
            <h2>MySQL Database</h2>
            <p>Writing queries that performs database operations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
