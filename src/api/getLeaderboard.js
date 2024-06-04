import axios from "./axios";

export const getLeaderboard = async (page) => {
  const res = await axios.get(
    `leaderboard/?period=day&per_page=10&page=${page}`
  );
  return res;
};
