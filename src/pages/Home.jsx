import Loader from "../components/ui/Loader";
import Sidebar from "../components/ui/Sidebar";
import ControlsBar from "../components/controls/ControlsBar";
import { useApi } from "../context/ApiContext";
import { useEffect, useState } from "react";
import GenderInput from "../components/ui/GenderInput";
import SearchInput from "../components/ui/SearchInput";
import SongCard from "../components/cards/SongCard";

function Home() {
  const { getLeaderboardQuery, leaderboard, setLoading, setGender, gender } =
    useApi();
  const [page, setPage, loading] = useState(1);

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
    fetchData();
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-4 bg-gradient-to-br dark:bg-gradient-to-br from-purple-heart-300 to-purple-heart-500 from-bg-purple-heart-100 dark:from-purple-heart-500 dark:to-purple-heart-600  w-screen min-h-screen">
        <div className="col-span-1 hidden lg:block ">
          <Sidebar />
        </div>
        <section className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex justify-around flex-wrap items-center py-5">
              <SearchInput />
              <GenderInput />
            </div>
            <section className="flex-1 py-10">
              <div className="flex items-center flex-wrap justify-start gap-5 px-0">
                {leaderboard ? (
                  leaderboard?.data.chart_items.map((e) => (
                    <SongCard song={e} key={e.id} />
                  ))
                ) : (
                  <h2>xd</h2>
                )}
              </div>
            </section>
          </div>
        </section>
      </div>
      <ControlsBar />
    </>
  );
}

export default Home;
