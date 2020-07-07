import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "d3ea63b0c0cfa921994d262cbee778da";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "Imperial",
      APPID: API_KEY,
    },
  });

  return data;
};
