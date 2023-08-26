import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/slices/TodoSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const CreateTodo = () => {
  const [todoUsers, setTodoUsers] = useState({});
  const dispatch = useDispatch();
  const history = useNavigate();
  const getUserData = (e) => {
    setTodoUsers({ ...todoUsers, [e.target.name]: e.target.value });
    // console.log(todoUsers);
    // ...spreadOP use for previous data store rary and also j name in put field woo sari : values as specific name
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users ....", todoUsers);
    dispatch(
      createUser({
        name: todoUsers.name,
        email: todoUsers.email,
        age: todoUsers.age,
        gender: todoUsers.gender,
      })
    );
    toast.success("Create User Successfully!");
    history("/users");
  };

  return (
    <div>
      <div className="container p-5">
        <h2 className="text-center">Create Users</h2>
        <form
          className="row g-3 p-0 m-0 align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Your Name"
              onChange={getUserData}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={getUserData}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              name="age"
              id="age"
              placeholder="Your Age"
              onChange={getUserData}
            />
          </div>
          <div
            className="col-md-6 mt-5 bg-black rounded bg-opacity-25 ms-2"
            style={{ height: "4.65vh", color: "#e0e0e0", width: "fit-content" }}
          >
            <span>
              <label htmlFor="gender" className="form-label pt-1 text-black-50">
                Gender:
              </label>
            </span>

            <span className="ms-5">
              <label htmlFor="male" className="form-label me-2 pt-1">
                Male
              </label>
              <input
                type="radio"
                value="male"
                name="gender"
                id="male"
                onChange={getUserData}
              />
            </span>

            <span className="ms-5">
              <label htmlFor="female" className="form-label me-2 pt-1">
                Female
              </label>
              <input
                type="radio"
                value="female"
                name="gender"
                id="female"
                onChange={getUserData}
              />
            </span>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn w-25">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 40:00