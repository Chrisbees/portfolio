import React from "react";
import "./works.css";
import home from "../../assets/home.png";
import student_login from "../../assets/student_login.png";
import admin_login from "../../assets/admin_login.png";
import all_students from "../../assets/all_students.png";
import dashboard from "../../assets/dashboard.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to small details
      </span>
      <div className="worksImgs">
        <img src={home} alt="works" className="worksImg" />
        <img src={student_login} alt="works" className="worksImg" />
        <img src={admin_login} alt="works" className="worksImg" />
        <img src={all_students} alt="works" className="worksImg" />
        <img src={dashboard} alt="works" className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
