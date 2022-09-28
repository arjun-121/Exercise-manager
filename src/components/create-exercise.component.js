import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EXERCISE from "../routes/ExerciseRoutes";
import USER from "../routes/UserRoutes";
// import { ShowSwalMsg } from "./swal.js";

const defaultExercise = {
  username: "",
  description: "",
  duration: 0,
  date: new Date(),
  users: [],
};

const CreateExercise = () => {
  const [exercise, setExercise] = useState(defaultExercise);
  const [date, setDate] = useState("");
  const [user, setUser] = useState("");

  // const [input, setInput] = useState("");
  // const [searchedUser, setSearchedUser] = useState("");
  const [users, setUsers] = useState("");

  //   const onChangeUserName = (event) => {};
  const navigate = useNavigate();

  const onValueChange = (event) => {
    setExercise({
      ...exercise,
      [event.target.name]: event.target.value,

      // username: event.target.value,
      // description: event.target.value,
      // duration: event.target.value,
      // date: event.target.DatePicker().value,
    });
  };

  const postExerciseLog = async () => {
    try {
      await axios.post(`${EXERCISE.DATA.POST}`, exercise);
    } catch (error) {
      console.log("Error in posting exercise log " + error);
    }
  };

  useEffect(() => {
    if(!user?.length > 0){
      axios
      .get(USER.DATA.GET, {
        headers: {
          username: user,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
  }, [user]);

  // const validation = (e) => {
  //   if (!e.username) {
  //     ShowSwalMsg("error", "Enter a valid username");
  //     return false;
  //   }
  //   if (!e.description) {
  //     ShowSwalMsg("error", "Enter a valid description");
  //     return false;
  //   }
  //   if (!e.duration) {
  //     ShowSwalMsg("error", "Please enter the exercise duration in minutes");
  //     return false;
  //   }
  //   if (!e.date) {
  //     ShowSwalMsg("error", "Enter the date of exercise");
  //   }
  // };
  const addExerciseLog = (e) => {
    e.preventDefault();
    postExerciseLog();

    navigate("/exercise");

    // if (validation(exercise)) {
    //   console.log(exercise);
    //   postExerciseLog();
    //   navigate("/exercise");
    // }
  };
  return (
    <div
      style={{
        width: "40%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <h3>Create New Exercise Log</h3>
      <form>
        <div className="form-group">
          <label>Username: </label>
          {/* <input
            onChange={(e) => onValueChange(e)}
            name="username"
            required
            className="form-control"
          /> */}
          {/* <select
            onChange={(e) => onValueChange(e)}
            name="username"
            required
            className="form-control"
          >
            {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select> */}
          {/* <input
            type="text"
            list="user"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          {console.log("searched user", searchedUser)}
          <datalist id="cars">
            {searchedUser?.length > 0 &&
              searchedUser.map((user) => {
                <option value={user}>{user}</option>;
              })}
          </datalist> */}
          <input
            type="text"
            name="username"
            className="form-control"
            list="users"
            required
            autoComplete="off"
            onInput={(e) => {
              setUser(e.target.value);
            }}
            onChange={(e) => onValueChange(e)}
          />
          {console.log()}
          <datalist id="users">
            {users?.length > 0 &&
              users.map((user, index) => {
                return <option key={index} value={user.username} />;

                // console.log("Inside map", user.username);
              })}
          </datalist>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            onChange={(e) => onValueChange(e)}
            name="description"
            autoComplete="off"
            type="text"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            onChange={(e) => onValueChange(e)}
            name="duration"
            type="number"
            autoComplete="off"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            {/* <input
              name="date"
              id="datepicker"
              className="form-control"
              onChange={(e) =>
                onValueChange(getElementById(datepicker).datepicker())
              }
            /> */}
            <DatePicker
              name="date"
              id="datepicker"
              className="form-control"
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
        </div>

        <div className="form-group">
          <button
            onClick={(e) => addExerciseLog(e)}
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Add Exercise Log
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
