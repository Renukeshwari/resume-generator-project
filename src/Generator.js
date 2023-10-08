import { useCallback, useState } from "react";

export const Generator = ({ email, logout }) => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: email,
    about: "",
    college: "",
    degree: "",
    cgpa: "",
    skills: "",
    projects: "",
  });
  const setResumeDataForProp = useCallback(
    (propName, value) => {
      setResumeData({ ...resumeData, [propName]: value });
    },
    [setResumeData, resumeData]
  );
  const marginTop33 = { marginTop: "33px" };
  const marginRight33 = { marginRight: "10px" };
  const generateResume = useCallback(() => {
    // do something to generate resume
    document.getElementById("root-gen-div").style.display = "none";
    document.getElementById("actual-resume").style.display = "block";
    window.print();
    document.getElementById("root-gen-div").style.display = "block";
    document.getElementById("actual-resume").style.display = "none";
  }, []);
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ marginLeft: "20px", maxWidth: "500px" }} id="root-gen-div">
        <h2>Resume Generator:</h2>
        {Object.keys(resumeData).map((propName) => (
          <div style={{ marginBottom: "20px" }}>
            <label
              for={propName}
              className="form-label"
              style={{ marginRight: "20px" }}
            >
              {propName.toUpperCase()}:
            </label>
            <input
              type="text"
              key={propName}
              name={propName}
              value={resumeData[propName]}
              className="form-control"
              onChange={(e) => setResumeDataForProp(propName, e.target.value)}
              disabled={propName === "email"}
            />
          </div>
        ))}
        <button
          onClick={generateResume}
          className="btn btn-primary"
          style={{ marginBottom: "20px", marginRight: "33px" }}
        >
          Generate Resume!
        </button>
        <button
          onClick={logout}
          className="btn btn-danger"
          style={{ marginBottom: "20px" }}
        >
          Logout
        </button>
      </div>
      <div
        id="actual-resume"
        style={{ marginBottom: "200px", display: "none" }}
      >
        <h2>{resumeData["name"]}</h2>
        <h6>
          Contact:{" "}
          <i>
            <a href={`mailto:${email}`}>{email}</a>
          </i>
        </h6>
        <h3 style={marginTop33}>About</h3>
        {resumeData["about"]}
        <h4 style={marginTop33}>{resumeData["degree"]}</h4>
        at {resumeData["college"]} (2020 - 24)
        <br />
        <b>{resumeData["cgpa"]} CGPA</b>
        <h4 style={marginTop33}>Skills</h4>
        {resumeData["skills"].split(" ").map((skill) => (
          <button key={skill} style={marginRight33} className="btn btn-primary">
            {skill}
          </button>
        ))}
        <h4 style={marginTop33}>Projects</h4>
        <ul>
          {resumeData["projects"].split(" ").map((projectName) => (
            <li key={projectName}>
              <b>
                <i>{projectName}</i>
              </b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
