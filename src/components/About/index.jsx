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
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="column right-column">
          <h2 className="shine">About me</h2>
          <h1 className="title">
            I am <span className="color__primary">Rahul Khandelwal</span>
          </h1>
          <p className="text__muted description">
            🚀 FullStack Developer | Tech Enthusiastic | Cloud Enthusiast
            <br />
            <br />
            Hey there! I'm Rahul khandelwal, a tech enthusiast with a proven
            track record in full stack development and cloud technologies.
            <br />
            <br />
            🧑‍🎓 Academic Roots
            <br />
            I kick-started my tech journey at SKIT, mastering Node.js, Python,
            Java, and MongoDB. The journey didn't stop there; I delved into the
            intricacies of building robust applications with Spring Boot.
            <br />
            <br />
            💼 Professional Journey
            <br />
            Transitioning to the backend, I embraced cloud computing and DevOps,
            becoming proficient in AWS and Azure. This journey led me to a
            pivotal internship with Cheerio, where I contributed to cutting-edge
            projects. Focused on building end to end products with low level and
            high level designs , such as Factory , Singleton , Builder . Also
            maintain logs , error handling .
            <br />
            <br />
            Have worked on caching on client side and server side , used
            Tanstack query on the client side with Thunk for handling
            asynchronous operations with Redux ( State Management ) .
            <br />
            <br />
            🎯Achievements
            <br />
            Has cleared the ACM-ICPC regionals in competitive programming with
            decent rank of 565 .
            <br />
            <br />
            ⚒️ Skills Snapshot
            <br />
            <br />
            Libraries - Reactjs , Node.js
            <br />
            <br />
            Languages: Python, Java, Go
            <br />
            <br />
            Databases: MongoDB, PostgreSQL, MySQL
            <br />
            <br />
            DynamoDB, Redis.
            <br />
            <br />
            Frameworks: Spring Boot, NextJs, FastAPI, Redux, Redux toolkit ,
            Thunk .
            <br />
            <br />
            Mobile - React Native
            <br />
            <br />
            Cloud - AWS ( EC2 , S3 , ECR )
            <br />
            <br />
          </p>
          <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default About;
