import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../store/slices/TodoSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.todoUsers);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/users");
  };

  return (
    <div>
      <div className="container p-5">
        <h2 className="text-center mt-2">Edit the data</h2>
        <form
          className="row g-3 p-0 m-0 align-items-center"
          onSubmit={handleUpdate}
        >
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={updateData && updateData.name}
              onChange={newData}
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
              value={updateData && updateData.email}
              onChange={newData}
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
              value={updateData && updateData.age}
              onChange={newData}
            />
          </div>
          <div
            className="col-md-6 mt-5 bg-black rounded bg-opacity-25 ms-2"
            style={{
              height: "4.65vh",
              color: "#e0e0e0",
              width: "fit-content",
            }}
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
                name="gender"
                value="male"
                checked={updateData && updateData.gender === "male"}
                onChange={newData}
              />
            </span>

            <span className="ms-5">
              <label htmlFor="female" className="form-label me-2 pt-1">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={updateData && updateData.gender === "female"}
                onChange={newData}
              />
            </span>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn w-25">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
