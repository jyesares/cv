import React from "react";
import "./Block.css";

const splitP = i =>
  Array.isArray(i) ? i.map((j, z) => <p key={z}>{j}</p>) : i;

export default ({ title, subtitle, description, date, techs }) => (
  <div className="Block">
    <div className="Title">{splitP(title)}</div>
    <div className="Subtitle">{splitP(subtitle)}</div>
    <div className="Date">{date}</div>
    <div className="Description">{splitP(description)}</div>
    <div className="Tech">{splitP(techs)}</div>
  </div>
);
