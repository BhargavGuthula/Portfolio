import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql , SiFirebase} from 'react-icons/si';
import './MySkills.css';

const MySkills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="skill-icon" id='skill-icon-html'/> },
        { name: 'CSS3', icon: <FaCss3Alt className="skill-icon" id='skill-icon-css' /> },
        { name: 'JavaScript', icon: <FaJs className="skill-icon" id='skill-icon-js' /> },
        { name: 'React', icon: <FaReact className="skill-icon" id = 'skill-icon-react'/> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="skill-icon" id='skill-icon-tailwind' />},
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="skill-icon" id='skill-icon-node'/> },
        { name: 'Express.js', icon: <SiExpress className="skill-icon" id='skill-icon-express'  /> },
        { name: 'Python', icon: <FaPython className="skill-icon" id='skill-icon-python' /> },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="skill-icon" id='skill-icon-mongodb' />},
        { name: 'MySQL', icon: <SiMysql className="skill-icon" id='skill-icon-mysql'/>  },
        {name:'firebase', icon:<SiFirebase className="skill-icon" id='skill-icon-firebase' color='red'/>}
      ],
    },
  ];

  return (
    <div id="skills" className="skills-container" ref={skillsRef}>
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category" style={{ '--delay': index + 1 }}>
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  {/* <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ '--progress': `${skill.proficiency}%` }}
                    ></div>
                    <span className="proficiency">{skill.proficiency}%</span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;