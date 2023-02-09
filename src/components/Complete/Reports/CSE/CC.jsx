import React, { useRef, useState } from "react";
import { firestore } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../report.css"
import { DownloadTableExcel } from "react-export-table-to-excel";
const CC = () => {
  const [allDocs, setAllDocs] = useState([]);
  const db = firestore;
  const tableRef = useRef(null);

  const fetchAll = async (e) => {
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, "cse-feedbacks/7/CC"));

    querySnapshot.forEach((doc) => {
      setAllDocs((prev) => {
        return [...prev, doc.id, "=>", doc.data()];
      });
    });
    alert("Data Generated Successfully, You can Export to excel");
  };

  // const Print = (e) =>{
  //   e.preventDefault()     
  //   let printContents = document.getElementById('cc').innerHTML;
  //   let originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   printContents.document.close();
  //   document.body.innerHTML = originalContents; 
    
  // }

  return (
    <div className="main-container">
      <button onClick={fetchAll} className="generate">Generate CC</button>
      {/* <button onClick={Print} className="generate">Print</button> */}
      <DownloadTableExcel
        filename="feedback_cc"
        sheet="feedbacks"
        currentTableRef={tableRef.current}
      >
        <button className="generate"> Export excel </button>
      </DownloadTableExcel>
      <div className="table" id="cc">
      <table className="table-data"ref={tableRef}>
        <caption>Cloud Computing</caption>
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

export default CC;
