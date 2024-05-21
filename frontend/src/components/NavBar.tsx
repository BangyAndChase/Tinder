import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import {
  LucideActivity,
  LucideAirVent,
  LucideCircleUserRound,
  LucideHeartPulse,
  LucideMessageCircle,
  LucideMessageSquare,
  LucideUser2,
} from "lucide-react";

function NavBar({ className }: ClassName) {
  return (
    <div
      className={cn(
        "flex h-auto flex-row items-center justify-between border-t border-victoria-900 px-4 py-3 text-victoria-200",
        className,
      )}
    >
      <LucideMessageSquare className={""} size={35} />
      <LucideActivity size={35} />

      <LucideHeartPulse size={50} />
      <LucideAirVent size={35} />

      <LucideUser2 size={35} />
    </div>
  );
}

export default NavBar;
