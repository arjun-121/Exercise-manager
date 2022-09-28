import EXERCISE from "../routes/ExerciseRoutes";
import { ShowSwalMsg } from "../components/swal";
import axios from "axios";

class Service {

  EXERCISES_GET = () => axios
    .get(EXERCISE.DATA.GET)
    .then((res) => {
      return res;
    })
    .catch(() => {
      ShowSwalMsg("error", "Something went wrong");
    });
}

const instance = new Service();

export default instance;
