import { useEffect, useState } from "react";
// import "./App.css";
import { StudentDetails } from "./StudentDetails";

function App() {
  const [data, setData] = useState([]);
  const [stdName, setStdName] = useState("");
  const [stdAge, setStdAge] = useState(0);
  const [stdId, setStdId] = useState(0);
  const [stdRollNumber, setStdRollNumber] = useState(0);

  // Bind Studentdetails file to render, start //

  useEffect(() => {
    setData(StudentDetails);
  }, []);

  // Bind Studentdetails file to render end //

  // Handle edit section start //
  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setStdId(stdId);
      setStdName(dt[0].stdName);
      setStdAge(dt[0].stdAge);
      setStdRollNumber(dt[0].stdRollNumber);
    }
  };
  // Handle edit section end //

  // Handle delete section start //
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure to delete this item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  // Handle delete section end //

  // Handle save start //
  const handleSave = () => {};

  // Handle save end //

  // Handle clear start //
  const handleClear = () => {};

  // Handle save end //

  return (
    <>
      <div
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          height: "35vh",
          color: "white",
        }}
      >
        <div>
          <label>Student Name</label>
          <input type="text" placeholder="Student name" />
        </div>
        <div>
          <label>Age</label>
          <input type="number" placeholder="Age" />
        </div>
        <div>
          <label>Roll number</label>
          <input type="number" placeholder="Roll number" />
        </div>
        <div>
          <button
            className="btn btn-primary mx-2"
            onClick={() => handleSave(id)}
          >
            Save
          </button>
          <button
            className="btn btn-primary mx-5"
            onClick={() => handleClear(id)}
          >
            Clear
          </button>
        </div>
      </div>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <td>Sr. No</td>
            <td>Id</td>
            <td>Student Name</td>
            <td>Age</td>
            <td>Roll Number</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.studentName}</td>
                <td>{item.studentAge}</td>
                <td>{item.rollNumber}</td>
                <td>
                  <button
                    className="btn btn-primary mx-4"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
