import { useState, useEffect } from "react";
import "./Facts.css";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(()=>{

    const timeoutId = setTimeout(()=>{
      setExperience(2);
      setProjects(150);
      setClients(2.5);
    }, 3000)

    return () => clearTimeout(timeoutId);
  },[])
  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Years of Experience</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={projects} className="title" />
          <h3 className="title">+</h3>
        </div>
        <p className="label">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={clients } className="title" />
          <h3 className="title">K</h3>
        </div>
        <p className="label">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Facts;
