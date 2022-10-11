import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import EXERCISE from "../routes/ExerciseRoutes";
import { ShowSwalMsg } from "./swal.js";
import Service from '../services/Service';
import Navbar from "./navbar.component";

const ExercisesList = () => {
  let history = useNavigate();
  const [exercise, setExercise] = useState("");

  useEffect(() => {
    // if (!exercise?.length > 0) {
    // axios
    //   .get(EXERCISE.DATA.GET)
    //   .then((res) => {
    //     // setPosts(res.data.slice(0, 10));
    //     setExercise(res.data);
    //     // console.log(res.data);
    //   })
    //   .catch(() => {
    //     ShowSwalMsg("error", "Something went wrong");
    //   });

    Service.EXERCISES_GET().then((res) => {
      setExercise(res.data);
    })

    // }
  }, []);

  const editExercise = (id) => {
    // history({
    //   pathname: "/edit",
    //   state: {
    //     id,
    //   },
    // });

    history("/edit", { state: { id } });
  };

  const deleteExercise = (id) => {
    axios.post(`${EXERCISE.DATA.DELETE}/${id}`).then(() => {
      axios.get(EXERCISE.DATA.GET).then((res) => {
        setExercise(res.data);
      });
    });
  };

  return (
    <>
    <Navbar/>
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercise?.length > 0 &&
            exercise?.map((data, index) => (
              <tr key={index}>
                <td>{data.username}</td>
                <td>{data.description}</td>
                <td>{data.duration}</td>
                <td>{data.date.slice(0,10)}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => editExercise(data._id)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteExercise(data._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ExercisesList;
