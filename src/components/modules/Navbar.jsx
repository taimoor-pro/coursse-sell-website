import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/slices/LoginSlice";
import { searchUser } from "../../store/slices/TodoSlice";

export const Navbar = ({ role, username, to }) => {
  const allusers = useSelector((state) => state.todoUsers.users);

  // Navbar component implementation
  const loginData = useSelector((state) => state.addLoginUser);
  const history = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    console.log("Clicked!!");
    dispatch(logoutUser());
    history("/");
  };

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="#">
          {username} | {role}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 p-3">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Create Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                All Post ({allusers.length})
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              type="submit"
              onClick={logout}
              className="btn ms-5 me-5"
              id="logout"
            >
              LogOut
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
