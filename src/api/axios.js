import axios from "axios";

const instance = axios.create({
  baseURL: "https://genius-song-lyrics1.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_HOST,
  },
});

export default instance;
