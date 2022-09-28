import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <br />
        <div className="container">
          <Routes>
            <Route path="/exercise" default element={<ExercisesList />} />
            <Route path="/register"  element={<Register />} />
            {/* <Route path="/login" element={<Login />} /> */}

            <Route path="/edit" element={<EditExercise />} />

            <Route path="/create" element={<CreateExercise />} />

            <Route path="/user" element={<CreateUser />} />
            <Route path="*" element={<ExercisesList />} />
          </Routes> 
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
