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
        <div className="grid overflow-hidden sm auto-cols-auto grid-rows gap-6 grid-flow-row">
          <CardProfile/>
          <CardLocation/>
          <CardBank/>
          <CardActivity/>
          <CardRelation/>
        </div>
      </div>
    </div>
  );
}

export default App;
