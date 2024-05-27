import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";
import {
  LucideBriefcase,
  LucideMapPin,
  LucideRuler,
  LucideUserRound,
} from "lucide-react";

function ProfilePage({ className }: ClassName) {
  return (
    <div className={cn("flex flex-col overflow-auto", className)}>
      <img
        className="h-82 object-cover"
        src="https://i1.sndcdn.com/artworks-LOxH48k89pWYyTVy-3PRS8w-t500x500.jpg"
      />
      <div className={"flex flex-col gap-3 p-6"}>
        <div className={"text-loose flex flex-row items-end gap-2"}>
          <p className={"text-3xl font-bold"}>Adi Suspicious</p>
          <p className={" text-xl"}>14</p>
        </div>
        <div className={"grid grid-cols-[auto,1fr] gap-1 text-victoria-800"}>
          <LucideUserRound className={"dynamic-icon"} />
          <div>He/Him</div>

          <LucideRuler className={"dynamic-icon"} />
          <div>7'6</div>

          <LucideBriefcase className={"dynamic-icon"} />
          <div>Child</div>

          <LucideMapPin className={"dynamic-icon"} />
          <div>20m away</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
