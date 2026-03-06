import StudentCard from "./StudentCard";

function StudentList({ students, removeStudent, showDetails, updateStatus }) {

  if (students.length === 0) {
    return <h3>No Students Found</h3>;
  }

  return (
    <>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          removeStudent={removeStudent}
          showDetails={showDetails}
          updateStatus={updateStatus}
        />
      ))}
    </>
  );
}

export default StudentList;