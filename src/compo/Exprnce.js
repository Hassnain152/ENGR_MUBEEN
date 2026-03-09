import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Exprnce.css";

const experiences = [
  {
    title: "Civil Superintendent Engineer",
    company: "Dynex Arabia - Saudi Arabia",
    duration: "July 2024 - Present",
    project: "13 Gas Wellpad, Thrust Anchor Block, Pipe Line & Burn Pit. HZEM-1 ,HZEM-3,HZEM GCP-4,HZEM GCP-5 HZEM-7 area",
    responsibilities: [
      "Oversee aspects of Precast Yard operations, ensuring efficient workflow, production, & quality control.",
      "Manage the entire process of Steel Cutting, Bending, and Rebar Installation.",
      "Supervise planning and execution of Formwork activities.",
      "Oversee systematic Material Storage and organized inventory.",
      "Manage safe and effective Material Handling processes.",
      "Arrange and oversee excavation of structures, trenches, and ductbanks.",
      "Supervise foundation alignment, installation, and scaffolding work.",
      "Prepare calculations and reports using MS Excel.",
      "Facilitate communication between contractors and project team.",
      "Ensure adherence to engineering standards and safety regulations."
    ]
  },
  {
    title: "Civil Sr.Engineer",
    company: "Project Pioneer Cont. Co. PPCO - Saudi Arabia",
    duration: "Nov 2022 - Jun 2024",
    project: "The Spine Line Rail Connector",
    responsibilities: [
      "Prepare Daily, Weekly, and Monthly reports.",
      "Ensure compliance with contract specifications.",
      "Manage heavy equipment and vehicles.",
      "Oversee site supervision and construction activities.",
      "Conduct site surveys to monitor progress.",
      "Maintain safe work environment.",
      "Manage excavation, blasting, leveling and shotcrete works.",
      "Update Traffic Management Plan (TMP).",
      "Ensure timely execution of project milestones.",
      "Coordinate and manage site labor."
    ]
  }
];

export default function Exprnce() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="experience-container">

      <h2 className="section-title" data-aos="zoom-in">
        Work Experience
      </h2>

      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>

          <h3 className="exp-title">{exp.title}</h3>

          <p className="exp-company">
            {exp.company} | <span className="exp-duration">{exp.duration}</span>
          </p>

          <p className="exp-project">
            <strong>Project:</strong> {exp.project}
          </p>

          <ul className="exp-responsibilities">
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

        </div>
      ))}

    </div>
  );
}