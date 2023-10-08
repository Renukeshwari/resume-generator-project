import { useCallback, useEffect, useState } from "react";

export const Login = ({ users, setEmail, switchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const login = useCallback(() => {
    if (users[username] === password) {
      setEmail(username);
    } else {
      setErrorText("Wrong credentials!");
      setTimeout(() => setErrorText(""), 2000);
    }
  }, [setEmail, users, username, password]);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <div style={{ maxWidth: "440px", display: "inline-block" }}>
        <h3>Login Using Credentials:</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginTop: "33px" }}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: "33px" }}
        />
        <button
          onClick={login}
          className="btn btn-success"
          style={{ marginTop: "33px" }}
        >
          Login
        </button>
        <button
          onClick={switchToRegister}
          style={{ marginTop: "33px", marginLeft: "33px" }}
          className="btn btn-primary"
        >
          Still not an user? Click here to register.
        </button>
        <h5 style={{ color: "red", marginTop: "33px" }}>{errorText}</h5>
      </div>
    </div>
  );
};
