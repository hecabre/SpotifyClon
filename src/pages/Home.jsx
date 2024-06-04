import Sidebar from "../components/Sidebar";
import ControlsBar from "../components/controls/ControlsBar";
import { useApi } from "../context/ApiContext";
import { useEffect, useState } from "react";

function Home() {
  const { getLeaderboardQuery, leaderboard, setLoading } = useApi();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getLeaderboardQuery(page);
        console.log(res);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);

  return (
    <div className="flex bg-gradient-to-br dark:bg-gradient-to-br from-purple-heart-300 to-purple-heart-500 from-bg-purple-heart-100 dark:from-purple-heart-500 dark:to-purple-heart-600  w-screen h-screen">
      <Sidebar />
      <ControlsBar />
    </div>
  );
}

export default Home;
