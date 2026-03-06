import { useRef, useState, useEffect } from "react";

function StudentForm({ addStudent }) {

  const nameInput = useRef();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();

    const name = nameInput.current.value.trim();

    if (name === "") {
      setErrorMsg("Student name is required");
      nameInput.current.focus();
      return;
    }

    addStudent(name);

    nameInput.current.value = "";
    setErrorMsg("");
    nameInput.current.focus();
  };

  return (
    <>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter student name"
          ref={nameInput}
        />

        <button className="add-btn">Add</button>

      </form>

      {errorMsg && <p className="error">{errorMsg}</p>}

    </>
  );
}

export default StudentForm;