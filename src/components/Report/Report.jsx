import React from "react";
import { NavLink } from "react-router-dom";
import "./report.css";

const Report = () => {
  return (
    <div className="main">
      <h1>Report Generation</h1>
      <div className="card-view">
        <div className="cards">
          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
              alt="Report"
            />
            <NavLink to="/compdept" className="card-title">
              Complete Report
            </NavLink>
          </div>
          <div className="card">
            <img
              src="https://www.pngmart.com/files/8/Report-PNG-Photos.png"
              alt="Report"
            />
            <NavLink to="/dept" className="card-title">
              Report
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
