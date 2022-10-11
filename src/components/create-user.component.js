import React, { useState } from "react";
import USER from "../routes/UserRoutes";

import axios from "axios";
import Navbar from "./navbar.component";
import { toast } from "react-toastify";

const defaulUser = {
  username: "",
};

const CreateUser = () => {
  const [user, setUser] = useState(defaulUser);

  const onValueChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const throwError = (message) => {
    if (
      message === "Error in posting data Request failed with status code 400"
    ) {
      return window.alert("User already exists");
    }
    return;
  };
  const postUserData = async () => {
    try {
      await axios.post(`${USER.DATA.POST}`, user).then(() => {
        toast.success("User added successfully!");
      });
    } catch (err) {
      toast.error("User already exists!");
      console.log("Error in posting data", err.message);
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    postUserData();

    setUser(defaulUser);
    document.getElementById("user-form").reset();
  };

  // const loadModal = () => {
  //   return <Modal />;
  // };

  return (
    <>
   <Navbar/>
    <div style={{ width: "36rem" }}>
      <h3>Create New User</h3>
      <form id="user-form">
        <div className="form-group">
          <label>Username </label>
          <input
            type="text"
            name="username"
            required
            className="form-control"
            autoComplete="off"
            onChange={(e) => onValueChange(e)}
          />
        </div>
        <div className="form-group">
          <button
            onClick={(e) => addUser(e)}
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Create User
          </button>
        </div>
      </form>
      {/* <button
        value="Open Modal"
        className="btn btn-primary"
        type="submit"
        onClick={() => {
          ;
        }}
      >
        
      </button> */}
    </div>
    </>
  );
};

export default CreateUser;
