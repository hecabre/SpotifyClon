import axios from "./axios";

export const getLeaderboard = async (page, gender) => {
  const res = await axios.request({
    url: "chart/songs/",
    params: {
      time_period: "day",
      chart_genre: gender,
      per_page: "20",
      page: page,
    },
  });

  return res;
};
