import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import EXERCISE from "../routes/ExerciseRoutes";
import Navbar from "./navbar.component";



const EditExercise = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const id = location.state.id;

  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (id?.length > 0) {
      axios.get(`${EXERCISE.DATA.GET}/${id}`).then((res) => {
        // setPosts(res.data.slice(0, 10));
        setUser(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(res.data.date);
      });
    }
  }, [id]);

  const updateExerciseDetails = (event) => {
    const updatedDetails = {
      username: user,
      description: description,
      duration: duration,
      date: date,
    };
    axios.post(`${EXERCISE.DATA.UPDATE}/${id}`, updatedDetails).then(() => {
      navigate("/exercise");
    });
  };

  return (
    <>
    <Navbar/>
    <div>
      {/* <form> */}
      <div className="form-group">
        <label>Username: </label>
        <input
          required
          className="form-control"
          value={user}
          // defaultValue={user}
          onChange={(event) => setUser(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input
          type="text"
          required
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Duration (in minutes): </label>
        <input
          type="text"
          className="form-control"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Date: </label>
        <div>
          <input
            type="date"
            className=" form-control"
            // placeholder={new Date(date)}
            //value={date}
            value={date.slice(0, 10)}
            // defaultValue = {date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => updateExerciseDetails(e)}
          >
            Update
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
    </>
  );
};

export default EditExercise;
