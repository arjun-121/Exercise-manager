import EXERCISE from "../routes/ExerciseRoutes";
import { ShowSwalMsg } from "../components/swal";
import axios from "axios";

class Service {

  EXERCISES_GET = () => axios
    .get(EXERCISE.DATA.GET)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (!err?.response) {
        ShowSwalMsg("No server response");
      } 
    });
}

const instance = new Service();

export default instance;
