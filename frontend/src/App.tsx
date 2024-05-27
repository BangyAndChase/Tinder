import NavBar from "./components/NavBar";
import ProfilePage from "@/pages/ProfilePage";

function App() {
  return (
    <div className={"flex h-screen flex-col bg-background font-inter"}>
      <ProfilePage className={"grow text-primary"} />
      <NavBar />
    </div>
  );
}

export default App;
