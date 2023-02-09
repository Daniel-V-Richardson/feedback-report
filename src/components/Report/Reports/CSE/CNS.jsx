import React, { useState } from "react";
import { firestore } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../admin.css"
const CNS = () => {
  const [allDocs, setAllDocs] = useState([]);
  const db = firestore;


  const fetchAll = async (e) => {
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, "cse-feedbacks/7/CNS"));

    querySnapshot.forEach((doc) => {
      setAllDocs((prev) => {
        return [...prev, doc.id, "=>", doc.data()];
      });
    });
  };

  const Print = () =>{     
    let printContents = document.getElementById('table').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    printContents.focus();
    printContents.document.close();
   document.body.innerHTML = originalContents; 
  }

  return (
    <div className="main-container">
      <button onClick={fetchAll} className="generate">Generate CNS</button>
      <button onClick={Print} className="generate">Print</button>
      <div className="table" id="table">
      <table className="table-data">
        <caption>Cryptography & Network Security</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Register Number</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Subject</th>
            <th>Subject Handler</th>
            <th>Total Credits
                (Out of 115)</th>
          </tr>
        </thead>
        <tbody>
          {allDocs.map((doc) => (
            <tr key={doc?.id}>
              <td>{doc?.Name}</td>
              <td>{doc?.RegisterNumber}</td>
              <td>{doc?.Department}</td>
              <td>{doc?.Semester}</td>
              <td>{doc?.Subject}</td>
              <td>{doc?.SubjectHandler}</td>
              <td>{doc?.TotalCredits}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CNS;
