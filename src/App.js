import React, { Component } from "react";
import "./App.css";
import data from "./data";

import Block from "./components/Block";
import Skill from "./components/Skill";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" src="terminal.svg" alt="terminal" />
          <h2>Francisco Javier Romero Yesares</h2>
          <h3>Software Engineer</h3>
        </div>
        <div className="Sections">
          <div className="Info">
            <div className="Skills">
              {data.skills.map((skill, i) => (
                <Skill key={i} title={skill.title}>
                  {skill.content}
                </Skill>
              ))}
            </div>
          </div>
          <div className="Blocks">
            <div className="BlockTitle">Experience</div>
            {data.blocks.experience.map((block, i) => (
              <Block
                key={i}
                title={block.title}
                date={block.date}
                description={block.description}
                techs={block.techs}
              />
            ))}
            <div className="BlockTitle">Education</div>
            {data.blocks.education.map((block, i) => (
              <Block
                key={i}
                title={block.title}
                subtitle={block.subtitle}
                date={block.date}
                description={block.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
