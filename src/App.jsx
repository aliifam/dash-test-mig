import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CardProfile from "./components/CardProfile";
import CardActivity from "./components/CardActivity";
import CardBank from "./components/CardBank";
import CardLocation from "./components/CardLocation";
import CardRelation from "./components/CardRelation";


function App() {
  return (
    <div>
      <Sidebar />
      <div className="bg-green-100 py-4 px-6 relative ml-16 min-h-screen">
        <Navbar />
        <div className="grid overflow-hidden sm auto-cols-auto grid-rows-2 gap-6 grid-flow-row">
          <CardProfile/>
          <div className="box col-start-3 col-span-4">2</div>
          <div className="box col-start-3 col-end-5">3</div>
          <div className="box row-start-2 row-end-4 col-start-5 col-end-7">4</div>
          <div className="box col-start-3 col-end-5">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
