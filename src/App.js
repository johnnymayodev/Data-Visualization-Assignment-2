import "./App.css";
import Header from "./components/Header.js";
import PersonalProfile from "./components/PersonalProfile.js";
import WorkExperience from "./components/WorkExperience.js";
import Skills from "./components/Skills.js";
import Education from "./components/Education.js";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Zh Rimel",
      job: "Data Scientist",
      email: "abc@gmail.com",
      web: "abc.github.io/abc",
      phone: "01234567890",

      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis atque harum sint veniam repellendus nihil, aperiam, tempora voluptas minus accusantium, ex perspiciatis? Veritatis fugiat aliquam similique expedita, ratione quod vel!",

      jobs: [
        {
          title: "Job Title",
          company: "Company",
          start: "August 2022",
          end: "December 2023",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing " + 
          "elit. Asperiores debitis tenetur nihil iure aperiam numquam ipsum " +
          "eos eaque dignissimos molestias? Molestiae labore expedita ipsa, " + 
          "nisi hic veritatis quos aspernatur. Ullam."
        },
        {
          title: "Job Title 2",
          company: "Company 2",
          start: "August 2020",
          end: "December 2021",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing " + 
          "elit. Asperiores debitis tenetur nihil iure aperiam numquam ipsum " +
          "eos eaque dignissimos molestias? Molestiae labore expedita ipsa, " + 
          "nisi hic veritatis quos aspernatur. Ullam."
        }
      ],

      skills: [
        "A Key Skill",
        "A Key Skill", 
        "A Key Skill", 

        "A Key Skill", 
        "A Key Skill", 
        "A Key Skill", 
        
        "A Key Skill", 
        "A Key Skill", 
        "A Key Skill"
      ],

      education: [
        {
          degree: "BS in Computer Science",
          school: "New Jersey Institute of Technology",
          start: "2018",
          end: "2022",
          gpa: "3.9",
        },
        {
          degree: "MS in Data Science",
          school: "New Jersey Institute of Technology",
          start: "2022",
          end: "2023",
          gpa: "4.0",
        }
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Header
          name={this.state.name}
          job={this.state.job}
          email={this.state.email}
          web={this.state.web}
          phone={this.state.phone}
        />
        <div className="container">
          <PersonalProfile bio={this.state.bio}/>
          <WorkExperience jobs={this.state.jobs}/>
          <Skills skills={this.state.skills}/>
          <Education education={this.state.education}/>
        </div>
      </div>
    );
  }
}

export default App;
