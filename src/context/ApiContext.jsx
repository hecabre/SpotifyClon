import { useContext, createContext, useState } from "react";
import { getLeaderboard } from "../api/getLeaderboard";

export const ApiContext = createContext();

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) throw new Error("Use api must be used within context");
  return context;
};

export const ApiProvider = ({ children }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gender, setGender] = useState("all");

  const getLeaderboardQuery = async (pageId, gender) => {
    const res = await getLeaderboard(pageId, gender);
    setLeaderboard(res);
  };

  return (
    <ApiContext.Provider
      value={{
        leaderboard,
        getLeaderboardQuery,
        loading,
        setLoading,
        setGender,
        gender
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
