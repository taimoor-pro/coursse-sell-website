import "./App.css";
import { Registration } from "./pages/Registration";
import { LoginForm } from "./pages/Login";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Todos } from "./pages/Todos";
import { Navbar } from "./components/modules/Navbar";
import Update from "./components/modules/Update";
import { useSelector } from "react-redux";

function App() {
  const registrationData = useSelector((state) => state.addRegisterUser);
  const loginData = useSelector((state) => state.addLoginUser);

  const [loggedUser] = registrationData.filter((regUser) =>
    loginData.some(
      (logUser) =>
        logUser.email === regUser.email && logUser.password === regUser.password
    )
  );

  return (
    <div>
      {/* NavBar */}
      {loggedUser && (
        <Navbar role={loggedUser.roles} username={loggedUser.userName} />
      )}

      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/users" element={<Todos />} />
      </Routes>
      <Routes>
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
