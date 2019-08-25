// The project makes use of TheMealDB's API.
// I use the test API key "1", because this project is for educational use only.

import axios from "axios";
import { BASEURL } from './urlConstants';

export const MealAPI = axios.create({
  baseURL: BASEURL,
  responseType: "json"
});
