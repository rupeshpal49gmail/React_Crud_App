import { useEffect, useState } from "react";
// import "./App.css";
import { StudentDetails } from "./StudentDetails";

function App() {
  const [data, setData] = useState([]);

  // Bind Studentdetails file to render start //

  useEffect(() => {
    setData(StudentDetails);
  }, []);

  // Bind Studentdetails file to render end //

  // Handle edit section start //
  const handleEdit = (id) => {
    alert(id);
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

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
          <button className="btn btn-primary" onClick={() => handleSave(id)}>
            Save
          </button>
          <button className="btn btn-primary" onClick={() => handleClear(id)}>
            Clear
          </button>
        </div>
      </div>
      <table className="table table-hover">
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
