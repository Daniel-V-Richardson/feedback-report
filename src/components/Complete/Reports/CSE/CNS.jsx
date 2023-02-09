import React, { useRef, useState } from "react";
import { firestore } from "../../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../report.css";
import { DownloadTableExcel } from "react-export-table-to-excel";
const CNS = () => {
  const [allDocs, setAllDocs] = useState([]);
  const db = firestore;

  const tableRef = useRef(null);

  const fetchAll = async (e) => {
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, "cse-feedbacks/7/CNS"));

    querySnapshot.forEach((doc) => {
      setAllDocs((prev) => {
        return [...prev, doc.id, "=>", doc.data()];
       
      });
    });
    alert("Data Generated Successfully, You can Export to excel");
  };

  // const Print = () => {
  //   let printContents = document.getElementById("table").innerHTML;
  //   let originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   printContents.focus();
  //   printContents.document.close();
  //   document.body.innerHTML = originalContents;
  // };

  return (
    <div className="main-container">
      <button onClick={fetchAll} className="generate">
        Generate CNS
      </button>
      {/* <button onClick={Print} className="generate">
        Print
      </button> */}
      <DownloadTableExcel
        filename="feedback_cns"
        sheet="feedbacks"
        currentTableRef={tableRef.current}
      >
        <button className="generate"> Export excel </button>
      </DownloadTableExcel>
      <div className="table" id="table">
        <table className="table-data" ref={tableRef}>
          <caption>Cryptography & Network Security</caption>
          <thead>
            <tr>
              {/* <th>Name</th>
              <th>Register Number</th> */}
              <th>Department</th>
              <th>Semester</th>
              <th>Subject</th>
              <th>Subject Handler</th>
              <th>Punctuality in the Class</th>
              <th>Regularity in taking Classes</th>
              <th>Completes syllabus of the course in time</th>
              <th>
                Scheduled organization of assignments, class test, quizzes and
                seminars
              </th>
              <th>Focus on Syllabi</th>
              <th>Self-confidence</th>
              <th>Communication skills</th>
              <th>Conducting the classroom discussions</th>
              <th>Teaching the subject matter</th>
              <th>Delivery of structured lecture</th>
              <th>
                Skill of linking subject to life experience & creating interest
                in the subject
              </th>
              <th>Refers to latest developments in the field</th>
              <th>Uses of teaching aids (OHP/Blackboard /PPT's)</th>
              <th>
                Blackboard/Whiteboard work in terms of legibility, visibility
                and structure
              </th>
              <th>Uses of innovative teaching methods</th>
              <th>
                Shares the answers of class tests or sessional test questions
                after the conduct of the class tests/sessional tests.
              </th>
              <th>
                Shows the evaluated answer books of class tests to the students
              </th>
              <th>Makes sure that he/she is being understood</th>
              <th>
                Helping approach towards varied academic interests of students
              </th>
              <th>
                Helps student in providing study material which is not readily
                available in the text books say through e-resources, e-journals,
                reference books, open course wares etc.
              </th>
              <th>
                Helps students irrespective of ethnicity and culture/background
              </th>
              <th>Helps students irrespective of gender</th>
              <th>
                Helps students facing physical, emotional and learning
                challenges
              </th>
              <th>Total Credits (Out of 115)</th>
            </tr>
          </thead>
          <tbody>
            {allDocs.map((doc) => (
              <tr key={doc?.id}>
                {/* <td>{doc?.Name}</td>
                <td>{doc?.RegisterNumber}</td> */}
                <td>{doc?.Department}</td>
                <td>{doc?.Semester}</td>
                <td>{doc?.Subject}</td>
                <td>{doc?.SubjectHandler}</td>
                <td>{doc?.cc1}</td>
                <td>{doc?.cc2}</td>
                <td>{doc?.cc3}</td>
                <td>{doc?.cc4}</td>
                <td>{doc?.cc5}</td>
                <td>{doc?.cc6}</td>
                <td>{doc?.cc7}</td>
                <td>{doc?.cc8}</td>
                <td>{doc?.cc9}</td>
                <td>{doc?.cc10}</td>
                <td>{doc?.cc11}</td>
                <td>{doc?.cc12}</td>
                <td>{doc?.cc13}</td>
                <td>{doc?.cc14}</td>
                <td>{doc?.cc15}</td>
                <td>{doc?.cc16}</td>
                <td>{doc?.cc17}</td>
                <td>{doc?.cc18}</td>
                <td>{doc?.cc19}</td>
                <td>{doc?.cc20}</td>
                <td>{doc?.cc21}</td>
                <td>{doc?.cc22}</td>
                <td>{doc?.cc23}</td>

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
