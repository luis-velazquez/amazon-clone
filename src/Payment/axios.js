//very popular fetching library
import axios from "axios";

const instance = axios.create({
  //The API (cloud function) URL
  baseURL: "https://us-central1-challenge-fc327.cloudfunctions.net/api",
  //   "http://127.0.0.1:5001/challenge-fc327/us-central1/apij"
});

export default instance;

