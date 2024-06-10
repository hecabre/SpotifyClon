import Loader from "../components/ui/Loader";
import { Sidebar } from "../components/ui/Sidebar";
import ControlsBar from "../components/controls/ControlsBar";
import { useApi } from "../context/ApiContext";
import { useEffect, useState } from "react";
import GenderInput from "../components/ui/GenderInput";
import SearchInput from "../components/ui/SearchInput";
import SongCard from "../components/cards/SongCard";
import { FaPlus } from "react-icons/fa";
import { BsDash } from "react-icons/bs";
import MobileSidebar from "../components/ui/MobileSidebar";

function Home() {
  const {
    getLeaderboardQuery,
    leaderboard,
    setLoading,
    setGender,
    gender,
    loading,
  } = useApi();
  const [page, setPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getLeaderboardQuery(page, gender);
        console.log(leaderboard);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, gender]);

  return (
    <div className="flex flex-col w-screen overflow-hidden bg-gradient-to-br dark:bg-gradient-to-br from-purple-heart-300 to-purple-heart-500 from-bg-purple-heart-100 dark:from-purple-heart-500 dark:to-purple-heart-600 min-h-screen">
      <div className="flex flex-grow ">
        <div className="sm:block md:block lg:hidden md:w-32">
          <MobileSidebar />
        </div>
        <div className="hidden lg:block lg:w-64">
          <Sidebar />
        </div>
        <section className="flex-grow px-10 pt-5 w-1/3">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center justify-center lg:justify-between mb-5 gap-3 md:gap-3 lg:gap-0">
              <SearchInput />
              <div className="flex items-center justify-ccenter gap-2">
                {page > 1 && (
                  <BsDash
                    onClick={() => setPage(page - 1)}
                    className="w-6 h-6 cursor-pointer dark:text-white text-purple-heart-800/80"
                  />
                )}
                <p className=" text-lg dark:text-white text-purple-heart-800/80 font-bold">
                  {page}
                </p>
                <FaPlus
                  onClick={() => setPage(page + 1)}
                  className=" w-3 h-3 dark:text-white cursor-pointer text-purple-heart-800/80"
                />
              </div>
              <GenderInput />
            </div>
            <div className="flex justify-center items-center min-w-full flex-wrap gap-5 pb-10">
              {leaderboard.length !== 0 && !loading ? (
                leaderboard?.data.chart_items.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </section>
      </div>
      <div className="w-full">
        <ControlsBar />
      </div>
    </div>
  );
}

export default Home;
