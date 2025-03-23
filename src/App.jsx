import { useEffect, useState } from "react";
// import "./App.css";
import { StudentDetails } from "./StudentDetails";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(StudentDetails);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Sr. No</td>
            <td>Id</td>
            <td>Student Name</td>
            <td>Roll Number</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.studentName}</td>
                <td>{item.rollNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
