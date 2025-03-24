import React, { useEffect, useState } from "react";

export function Form() {
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
    Email: "",
    occupation: "",
    gender: "",
    languages: [],
  });
  function onchangehandler(event) {
    if (event.target.name === "languages") {
      let copy = { ...formData };
      if (event.target.checked) {
        copy.languages.push(event.target.value);
        // copy.languages = [...copy.languages, event.target.value]; // ✅ Correct way
      } else {
        copy.languages = copy.languages.filter(
          (lang) => lang !== event.target.value
        );
      }

      setFormdata(copy);
    } else {
      setFormdata(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  }
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function onsubmithandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <div style={{ backgroundColor: "black", color: "white" }}>
        {" "}
        {JSON.stringify(formData, null, 2)}
      </div>
      <form onSubmit={onsubmithandler}>
        <label>USERNAME</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your Name"
          value={formData.username}
          onChange={onchangehandler}
        />
        <br></br>

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onchangehandler}
        />
        <br></br>

        <label>Email</label>
        <input
          type="email"
          name="Email"
          placeholder="Enter your Email"
          value={formData.Email}
          onChange={onchangehandler}
        />
        <br></br>

        <select
          name="occupation"
          onChange={onchangehandler}
          value={formData.occupation}
        >
          <option value="student">Student</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="gender">GENDER</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={onchangehandler}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={onchangehandler}
        />
        <label htmlFor="female">Female</label>

        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={onchangehandler}
        />
        <label htmlFor="Other">other</label>

        <label htmlFor="languages" className="form-label">
          Languages
        </label>

        <input
          type="checkbox"
          name="languages"
          value="html"
          onChange={onchangehandler}
          checked={formData.languages.includes("html")}
        />
        <label htmlFor="html">HTML</label>
        <input
          type="checkbox"
          name="languages"
          value="css"
          onChange={onchangehandler}
          checked={formData.languages.includes("css")}
        />
        <label htmlFor="css">css</label>
        <input
          type="checkbox"
          name="languages"
          value="js"
          onChange={onchangehandler}
          checked={formData.languages.includes("js")}
        />
        <label htmlFor="js">js</label>

        <button type="button" onClick={onsubmithandler}>
          Submit
        </button>
      </form>
    </>
  );
}
