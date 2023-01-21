import { getMoviewUrl } from "./../constant/url.constant";
import axios from "axios";

export const getMOviesListService = async () => {
  return axios.get(getMoviewUrl);
};
