import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import { pages } from "./types/enums";

export const pageByEnum = {
  [pages.explore]: () => {
    return <ProfilePage className={"grow text-victoria-400"} />;
  },
  [pages.messages]: () => {
    return <ChatsPage />;
  },
  [pages.profile]: () => {
    return <ProfilePage />;
  },
};
