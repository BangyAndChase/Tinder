import NavBar from "./components/NavBar";
import ProfilePage from "@/pages/ProfilePage";

function App() {
  return (
    <div className={"flex h-screen flex-col bg-victoria-950 font-inter"}>
      <ProfilePage className={"grow text-victoria-400"} />
      <NavBar />
    </div>
  );
}

export default App;
