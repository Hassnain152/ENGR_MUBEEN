import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Exprnce.css";

const experiences = [
  {
    title: "Civil Superintendent Engineer",
    company: "Dynex Arabia - Saudi Arabia",
    duration: "July 2024 - Present",
    project: "13 Gas Wellpad, Thrust Anchor Block, Pipe Line & Burn Pit. HZEM-1, HZEM-3, HZEM GCP-4, HZEM GCP-5, HZEM-7 area",
    responsibilities: [
      "Oversee Precast Yard operations, workflow, production, and quality control.",
      "Manage Steel Cutting, Bending, and Rebar Installation with accuracy.",
      "Supervise Formwork assembly and alignment.",
      "Oversee Material Storage and Material Handling on-site.",
      "Arrange and oversee excavation of structures, trenches, and ductbanks.",
      "Prepare calculations and reports using MS Excel for Project Manager review."
    ],
  },
  {
    title: "Civil Sr. Engineer",
    company: "Project Pioneer Cont. Co. PPCO - Saudi Arabia",
    duration: "Nov 2022 - Jun 2024",
    project: "The Spine Line Rail Connector",
    responsibilities: [
      "Prepare daily, weekly, and monthly reports.",
      "Ensure compliance with contract specifications and safety regulations.",
      "Manage heavy equipment and vehicles efficiently.",
      "Oversee site supervision and construction activities.",
      "Conduct site surveys and inspections to ensure quality standards."
    ],
  },
  {
    title: "Civil Engineer",
    company: "Petrojet Cont. Co. - Saudi Arabia",
    duration: "Feb 2021 - Oct 2022",
    project: "Portable Water Pipe Line (HPR to GAYAL) Design & Build",
    responsibilities: [
      "Manage all construction activities to ensure timely completion.",
      "Supervise subcontractors and on-site teams for efficiency.",
      "Oversee excavation, concrete, blockwork, plaster, and finishing.",
      "Estimate material quantities using AutoCAD.",
      "Prepare structural calculations using MS Excel."
    ],
  },
  {
    title: "Civil Engineer",
    company: "CMH Kharian Military Engineering Service - Pakistan",
    duration: "Jan 2019 - Dec 2020",
    project: "Construction of CMH Hostel Building & Mosque",
    responsibilities: [
      "Plan and coordinate site activities and stakeholders.",
      "Perform quantity takeoffs from drawings using AutoCAD.",
      "Prepare estimates and calculations using MS Excel.",
      "Monitor labor, materials, and equipment efficiently.",
      "Conduct inspections to ensure adherence to standards."
    ],
  },
  {
    title: "Civil Site Engineer",
    company: "ARCO Construction Pvt. Limited - Pakistan",
    duration: "Jan 2013 - Dec 2016",
    project: "Aqwa Qaseer Ul Maqasid Trust Hospital",
    responsibilities: [
      "Supervise on-site construction to ensure compliance with plans.",
      "Coordinate with architects, consultants, and subcontractors.",
      "Conduct inspections to monitor progress and quality.",
      "Monitor resources and optimize efficiency.",
      "Assist in preparing BOQs, estimates, and cost analysis."
    ],
  },
];

export default function Exprnce() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="experience-section">
      <h2 className="section-title" data-aos="fade-down">Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div className="experience-card" key={idx} data-aos="fade-up">
          <h3 className="exp-title">{exp.title}</h3>
          <p className="exp-company">
            {exp.company} | <span className="exp-duration">{exp.duration}</span>
          </p>
          <p className="exp-project"><strong>Project:</strong> {exp.project}</p>
          <ul className="exp-responsibilities">
            {exp.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}