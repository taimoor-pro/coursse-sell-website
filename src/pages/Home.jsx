import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTodo } from "../components/modules/CreateTodo";
import Read from "../components/modules/Read";

export const Home = () => {
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.addRegisterUser);
  const loginData = useSelector((state) => state.addLoginUser);

  const [loggedUser] = registrationData.filter((regUser) =>
    loginData.some(
      (logUser) =>
        logUser.email === regUser.email && logUser.password === regUser.password
    )
  );
  if (loggedUser.roles === "Admin") {
    const updatedUserData = {
      id: userId, // Replace 'userId' with the ID of the user you want to update
      // Include other fields you want to update
    };
    dispatch(updateUser(updatedUserData));
  } else {
    // Handle the case when the user is not an admin
    console.log("You don't have permission to perform this action.");
    // You can show an error message or take other actions as needed.
  }

  return (
    <div>
      <div>
        {/* {loggedUser && (
        <Navbar role={loggedUser.roles} username={loggedUser.userName} />
      )} */}

        {loggedUser.roles === "Admin" ? (
          <CreateTodo />
        ) : loggedUser.roles === "Editor" ? (
          <Read deleteDisable="disabled" />
        ) : (
          <Read disabled="disabled" />
        )}
      </div>
      <div>{/* TodoList */}</div>
    </div>
  );
};
