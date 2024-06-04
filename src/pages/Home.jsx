import Loader from "../components/ui/Loader";
import Sidebar from "../components/ui/Sidebar";
import ControlsBar from "../components/controls/ControlsBar";
import { useApi } from "../context/ApiContext";
import { useEffect, useState } from "react";
import GenderInput from "../components/ui/GenderInput";
import SearchInput from "../components/ui/SearchInput";

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
      <div className="col-span-1 hidden lg:block ">
        <Sidebar />
      </div>
      <section className="lg:col-span-3 col-span-4 lg:px-0 px-10 flex flex-col pt-5 justify-between">
        <div className="flex justify-around flex-wrap gap-3 md:gap-0 lg:gap-0 md:justify-between lg:justify-between  items-center ">
          <SearchInput />
          <GenderInput />
        </div>
        {leaderboard.data ? <h1>Hay datos</h1> : <Loader />}
      </section>
      <ControlsBar />
    </div>
  );
}

export default Home;
