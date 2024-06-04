import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import ControlsBar from "../components/controls/ControlsBar";
import { useApi } from "../context/ApiContext";
import { useEffect, useState } from "react";
import GenderInput from "../ui/GenderInput";
import SearchInput from "../ui/SearchInput";

function Home() {
  const { getLeaderboardQuery, leaderboard, setLoading, setGender, gender } =
    useApi();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getLeaderboardQuery(page);
        console.log(leaderboard);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    //fetchData();
  }, [page]);

  return (
    <div className="grid grid-cols-4 bg-gradient-to-br dark:bg-gradient-to-br from-purple-heart-300 to-purple-heart-500 from-bg-purple-heart-100 dark:from-purple-heart-500 dark:to-purple-heart-600  w-screen h-screen">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <section className="col-span-3 flex flex-col pt-5">
        <GenderInput />
        <SearchInput />

        {leaderboard.data ? <h1>Hay datos</h1> : <Loader />}
      </section>
      <ControlsBar />
    </div>
  );
}

export default Home;
