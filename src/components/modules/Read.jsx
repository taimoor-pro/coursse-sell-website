import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { deleteUser, showUser } from "../../store/slices/TodoSlice";
import ViewTodo from "./ViewTodo";
import "./todo.css";
// const registrationData = useSelector((state) => state.addRegisterUser);
// const loginData = useSelector((state) => state.addLoginUser);

// const [loggedUser] = registrationData.filter((regUser) =>
//   loginData.some(
//     (logUser) =>
//       logUser.email === regUser.email && logUser.password === regUser.password
//   )
// );

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector(
    (state) => state.todoUsers
  );

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      {/* View */}
      {showPopup && (
        <ViewTodo id={id} showPopup={showPopup} setShowPopup={setShowPopup} />
      )}

      {/* Gender Search Wise */}
      <h2 className="text-center mt-2 mb-0">All Users</h2>

      <div
        className="col-md-6 ms-5 p-2 mt-5 bg-black rounded bg-opacity-25 ms-2"
        style={{ height: "4.65vh", color: "#e0e0e0", width: "fit-content" }}
      >
        <span>
          <label htmlFor="gender" className="form-label pt-1 text-black-50">
            Gender:
          </label>
        </span>
        <span className="ms-5">
          <label htmlFor="all" className="form-label me-2 pt-1">
            All
          </label>
          <input
            type="radio"
            id="all"
            name="gender"
            checked={radioData === ""}
            onChange={(e) => setRadioData("")}
          />
        </span>

        <span className="ms-5">
          <label htmlFor="male" className="form-label me-2 pt-1">
            Male
          </label>
          <input
            type="radio"
            id="male"
            checked={radioData === "male"}
            value="male"
            onChange={(e) => setRadioData(e.target.value)}
          />
        </span>

        <span className="ms-5">
          <label htmlFor="female" className="form-label me-2 pt-1">
            Female
          </label>
          <input
            type="radio"
            value="female"
            id="female"
            checked={radioData === "female"}
            onChange={(e) => setRadioData(e.target.value)}
          />
        </span>
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "male") {
                return ele.gender === radioData;
              } else if (radioData === "female") {
                return ele.gender === radioData;
              } else return ele;
            })
            .map((ele) => (
              <div key={ele.id}>
                <div className="card m-4 mt-5">
                  <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {ele.email}
                    </h6>
                    <p className="card-text">{ele.gender}</p>
                    <button
                      className="btn btn-color-primary me-2"
                      onClick={() => [setId(ele.id), setShowPopup(true)]}
                    >
                      View
                    </button>

                    <button className="btn btn-color-sec me-2 border-0">
                      <NavLink to={`/edit/${ele.id}`}>Edit</NavLink>
                    </button>

                    <button className="btn btn-color-danger me-2 border-0">
                      <NavLink onClick={() => dispatch(deleteUser(ele.id))}>
                        Delete
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
