import { useEffect } from "react";
import { pageByEnum } from "./Constants";
import NavBar from "./components/NavBar";
import { usePageContext } from "./components/contextProviders/page/PageContextProvider";

function App() {
  const { currPage } = usePageContext();

  useEffect(() => console.log(currPage), [currPage]);

  return (
    <div className={"flex h-screen flex-col bg-victoria-950 font-inter"}>
      {pageByEnum[currPage]()}
      <NavBar />
    </div>
  );
}

export default App;
