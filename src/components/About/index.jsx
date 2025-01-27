import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className="column right-column">
          <h2 className="shine">About me</h2>
          <h1 className="title">
            I am <span className="color__primary">Rahul Khandelwal</span>
          </h1>
          <p className="text__muted description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nisi aliquam fugiat. Eius aliquid veritatis temporibus tempore, totam itaque minima non expedita laborum incidunt ea officia fugit beatae quidem recusandae. </p>
          <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default About;
