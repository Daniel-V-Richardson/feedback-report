import React from "react";
import { NavLink } from "react-router-dom";
import "./dept.css"

const CompDept = () => {
  return (
    <div className="dept-container">
      <h1>Select Departments</h1>
      <div className="dept-view">
        <NavLink to="/cse" className="link">
          <div className="dept">
            <div className="dept-card">
              <div className="card-title">Computer Science and Engineering</div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/ece" className="link">
          <div className="dept">
            <div className="dept-card">
              <div className="card-title">Electronics and Communication Engineering</div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/mech" className="link">
          <div className="dept">
            <div className="dept-card">
              <div className="card-title">Mechanical Engineering</div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/civil" className="link">
          <div className="dept">
            <div className="dept-card">
              <div className="card-title">Civil Engineering</div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/eee" className="link">
          <div className="dept">
            <div className="dept-card">
              <div className="card-title">Electrical and Electronics Engineering</div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default CompDept;
