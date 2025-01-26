import "./About.css";
import Hole from "../../ui/Hole";
import { skills } from "../../data";
const About = () => {
  return (
    <section id="about">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">My Skills</h3>
          <div className="skills__container">
            {skills.map((skill, index) => (
              <div className="skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
