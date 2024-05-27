import { pages } from "@/types/enums";
import { createContext, useContext, useState } from "react";

export type PageContextType = {
  currPage: pages;
  setCurrPage: (newPage: pages) => void;
};

const PageContext = createContext<PageContextType>({
  currPage: pages.explore,
  setCurrPage: () => {},
});

const PageContextProvider = (prop: {
  value?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  const [currPage, setCurrPage] = useState<pages>(pages.explore);

  return (
    <PageContext.Provider
      value={{
        setCurrPage,
        currPage,
      }}
    >
      {prop.children}
    </PageContext.Provider>
  );
};

const usePageContext = () => {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error("lotanGay");
  }

  return context;
};

export { PageContextProvider, usePageContext };
