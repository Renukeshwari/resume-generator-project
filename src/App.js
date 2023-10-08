import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Generator } from "./Generator";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./Login";

function App() {
  const [email, setEmail] = useState();
  const [loginOrRegister, switchTo] = useState("Login");
  const switchMode = useCallback(() => {
    switchTo(loginOrRegister === "Login" ? "Register" : "Login");
  }, [switchTo, loginOrRegister]);
  const [users, setUsers] = useState({});
  useEffect(
    () =>
      setUsers({
        ["renuka22@gmail.com"]: "Renuka@01",
      }),
    [setUsers]
  );
  const logout = useCallback(() => {
    setEmail(undefined);
  }, [setEmail]);
  return (
    <div className="App">
      {!email && loginOrRegister === "Login" && (
        <Login
          setEmail={setEmail}
          switchToRegister={switchMode}
          users={users}
        />
      )}
      {email && <Generator email={email} logout={logout} />}
    </div>
  );
}

export default App;
