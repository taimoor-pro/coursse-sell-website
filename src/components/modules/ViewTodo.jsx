import React from "react";
import { useSelector } from "react-redux";
import "./view.css";

const ViewTodo = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.todoUsers.users);

  const singleUser = allusers.filter((ele) => ele.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="btn btn-color-danger mt-3" onClick={() => setShowPopup(false)}>Close</button>
        <h2 className="fw-bold mt-3">{singleUser[0].name}</h2>
        <h3 className="fw-bold">{singleUser[0].email}</h3>
        <h4 className="fw-bold">{singleUser[0].age}</h4>
        <p className="fw-bold">{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default ViewTodo;
