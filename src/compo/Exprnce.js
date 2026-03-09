import React, { useEffect, useState } from "react";
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
      "Manage the entire process of Steel Cutting, Bending, and Rebar Installation, ensuring accuracy and adherence to project specifications.",
      "Supervise planning and execution of Formwork activities, ensuring proper assembly and alignment.",
      "Oversee systematic Material Storage, ensuring organized inventory for easy tracking.",
      "Manage safe and effective Material Handling processes for timely transportation within the project site.",
      "Arrange and oversee excavation of structures, trenches, and ductbanks, ensuring safety and quality.",
      "Supervise foundation alignment, installation, and scaffolding work for structural stability.",
      "Prepare calculations and reports using MS Excel for review and approval by the Project Manager.",
      "Facilitate communication between contractors and project team, ensuring alignment with project goals.",
      "Ensure strict adherence to engineering standards, safety regulations, and quality control through inspections."
    ]
  },
  {
    title: "Civil Sr.Engineer",
    company: "Project Pioneer Cont. Co. PPCO - Saudi Arabia",
    duration: "Nov 2022 - Jun 2024",
    project: "The Spine Line Rail Connector",
    responsibilities: [
      "Prepare & submit Daily, Weekly, & Monthly reports to document project progress.",
      "Ensure compliance with contract specifications, industry standards, and safety regulations.",
      "Manage heavy equipment and vehicles for operational efficiency.",
      "Oversee site supervision and coordination of construction activities.",
      "Conduct site surveys to monitor progress and ensure quality standards.",
      "Implement and maintain a safe work environment with required safety protocols.",
      "Manage excavation, blasting, leveling, haulage, slope protection, and shotcrete works.",
      "Update and manage Traffic Management Plan (TMP) daily.",
      "Ensure timely execution of critical project milestones and mitigate risks.",
      "Coordinate and manage site labor and report to Construction Manager."
    ]
  },
  {
    title: "Civil Engineer",
    company: "Petrojet Cont.Co. - Saudi Arabia",
    duration: "Feb 2021 - Oct 2022",
    project: "Portable Water Pipe Line (HPR to GAYAL) Design & Build",
    responsibilities: [
      "Manage & control construction activities to ensure smooth execution and timely completion.",
      "Supervise subcontractors and construction teams for efficiency.",
      "Oversee excavation, backfilling, concrete pouring, blockwork, plasterwork, and finishing works.",
      "Estimate quantity of Bar Bending Schedule (B.B.S), Concrete, & Blockwork.",
      "Perform quantity take-offs from AutoCAD drawings for cost estimation.",
      "Prepare structural quantity calculations using MS Excel for Project Manager approval.",
      "Verify and validate Bill of Quantities (BOQ) for accuracy and compliance.",
      "Execute and manage structural construction activities ensuring safety and quality."
    ]
  },
  {
    title: "Civil Engineer",
    company: "CMH Kharian Military Engineering Service - Pakistan",
    duration: "Jan 2019 - Dec 2020",
    project: "Construction of CMH Hostel Building & Mosque",
    responsibilities: [
      "Plan, coordinate, and oversee all site activities and stakeholders.",
      "Perform quantity take-offs using AutoCAD for material estimation.",
      "Prepare and review estimates for excavation, backfilling, waterproofing, bar bending schedules, concrete blockwork, and finishing.",
      "Validate calculations using MS Excel for Project Manager approval.",
      "Monitor project resources including labor, materials, and equipment.",
      "Ensure all engineering activities comply with approved design specifications.",
      "Conduct site inspections and quality checks to verify adherence to technical drawings.",
      "Coordinate with contractors, suppliers, and consultants for smooth project execution."
    ]
  },
  {
    title: "Civil Site Engineer",
    company: "ARCO Construction Pvt. Limited - Pakistan",
    duration: "Jan 2013 - Dec 2016",
    project: "Aqwa Qaseer Ul Maqasid Trust Hospital",
    responsibilities: [
      "Supervise and manage on-site construction activities for compliance with plans & specs.",
      "Coordinate with architects, consultants, and subcontractors to ensure smooth execution.",
      "Conduct site inspections to assess progress and ensure engineering standards.",
      "Monitor construction materials, labor, and equipment for efficient resource allocation.",
      "Ensure adherence to quality control standards and structural integrity.",
      "Assist in preparing BOQs, estimates, and cost analysis for financial control.",
      "Perform quantity take-offs from digital drawings for cost estimation and material planning."
    ]
  }
];

export default function Exprnce() {
  useEffect(() => {
                Aos.init({ duration: 2000 });
              }, []);
  return (
    <div className="experience-container">
      <h2 className="section-title"  data-aos="zoom-in">Work Experience.</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <h3 className="exp-title">{exp.title}</h3>
          <p className="exp-company">{exp.company} | <span className="exp-duration">{exp.duration}</span></p>
          <p className="exp-project"><strong>Project:</strong> {exp.project}</p>
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