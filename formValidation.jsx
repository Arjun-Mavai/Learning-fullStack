import React, { useState } from "react";

export default function FormComponent() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fName === "" || lName === "") {
      setErrorMessage("Please fill the details");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label> First name</label>

         
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div>
            <label> Last name</label>

            <input type="text" onChange={(e) => setLastName(e.target.value)} />
          </div>

          <button>click </button>

          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </>
  );
}
