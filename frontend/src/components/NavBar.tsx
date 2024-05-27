import { cn } from "@/lib/utils";
import { pages } from "@/types/enums";
import { ClassName } from "@/types/overridable";
import {
  LucideHeartPulse,
  LucideMessageSquare,
  LucideUser2,
} from "lucide-react";
import { usePageContext } from "./contextProviders/page/PageContextProvider";

function NavBar({ className }: ClassName) {
  const { currPage, setCurrPage } = usePageContext();

  return (
    <div
      className={cn(
        "flex h-auto flex-row items-center justify-between border-t border-victoria-900 px-4 py-3 text-victoria-200",
        className,
      )}
    >
      <button onClick={() => setCurrPage(pages.messages)}>
        <LucideMessageSquare className={""} size={35} />
      </button>

      <button onClick={() => setCurrPage(pages.explore)}>
        <LucideHeartPulse size={50} />
      </button>

      <button onClick={() => setCurrPage(pages.profile)}>
        <LucideUser2 size={35} />
      </button>
    </div>
  );
}

export default NavBar;
