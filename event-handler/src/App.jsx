import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {

  const [studentList, setStudentList] = useState([]);

  const addStudent = (studentName) => {

    const student = {
      id: Date.now(),
      name: studentName,
      status: "Absent",
      showDetails: false
    };

    setStudentList([...studentList, student]);
  };

  const removeStudent = (id) => {
    const updatedList = studentList.filter((s) => s.id !== id);
    setStudentList(updatedList);
  };

  const showDetails = (id) => {
    const updatedList = studentList.map((s) => {
      if (s.id === id) {
        return { ...s, showDetails: !s.showDetails };
      }
      return s;
    });

    setStudentList(updatedList);
  };

  const updateStatus = (id, newStatus) => {
    const updatedList = studentList.map((s) => {
      if (s.id === id) {
        return { ...s, status: newStatus };
      }
      return s;
    });

    setStudentList(updatedList);
  };

  const presentStudents = studentList.filter((s) => s.status === "Present").length;
  const absentStudents = studentList.filter((s) => s.status === "Absent").length;

  return (
    <div className="container">

      <h1 className="title">Student Activity Manager</h1>

      <StudentForm addStudent={addStudent} />

      <div className="stats">
        Total: {studentList.length} | Present: {presentStudents} | Absent: {absentStudents}
      </div>

      <StudentList
        students={studentList}
        removeStudent={removeStudent}
        showDetails={showDetails}
        updateStatus={updateStatus}
      />

    </div>
  );
}

export default App;