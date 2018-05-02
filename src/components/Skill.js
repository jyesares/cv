import React from "react";

import "./Skill.css";

export default ({ title, children }) => (
  <div className="Skill">
    <div className="SkillTitle">{title}</div>
    <ul className="List">
      {children.map((child, i) => (
        <li key={i} className="ListElement">
          {child.length === 2 ? (
            <div className="Icon">
              <img src={`${child[1]}.svg`} />
              {child[0]}
            </div>
          ) : (
            child
          )}
        </li>
      ))}
    </ul>
  </div>
);
