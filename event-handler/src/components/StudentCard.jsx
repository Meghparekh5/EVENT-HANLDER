function StudentCard({ student, removeStudent, showDetails, updateStatus }) {

  return (
    <div className="student-card">

      <h3>{student.name}</h3>

      <button
        className="toggle-btn"
        onClick={() => showDetails(student.id)}
      >
        {student.showDetails ? "Hide Details" : "Show Details"}
      </button>

      <button
        className="delete-btn"
        onClick={() => removeStudent(student.id)}
      >
        Delete
      </button>

      {student.showDetails && (
        <>

          <div className="status">
            Status: {student.status}
          </div>

          <button
            className="present-btn"
            onClick={() => updateStatus(student.id, "Present")}
          >
            Present
          </button>

          <button
            className="absent-btn"
            onClick={() => updateStatus(student.id, "Absent")}
          >
            Absent
          </button>

        </>
      )}

    </div>
  );
}

export default StudentCard;