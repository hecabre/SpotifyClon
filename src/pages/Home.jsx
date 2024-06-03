import Sidebar from "../components/Sidebar";
import ControlsBar from "../components/controls/ControlsBar";

function Home() {
  return (
    <div className="flex bg-gradient-to-br dark:bg-gradient-to-br from-purple-heart-300 to-purple-heart-500 from-bg-purple-heart-100 dark:from-purple-heart-500 dark:to-purple-heart-600  w-screen h-screen">
      <Sidebar />
      <ControlsBar />
    </div>
  );
}

export default Home;
