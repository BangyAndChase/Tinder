import { cn } from "@/lib/utils";
import { ClassName, Overridable } from "@/types/overridable";
import {
  LucideBriefcase,
  LucideCamera,
  LucideCircleUserRound,
  LucideMapPin,
  LucidePencil,
  LucideRuler,
  LucideSettings,
  LucideShield,
  LucideUserRound,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shade/avatar";
import { ClassValue } from "clsx";

function ProfileButton({
  buttonClassName,
  className,
  children,
  label,
}: {
  label: string;
  buttonClassName?: ClassValue | ClassValue[];
} & Overridable) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 text-accent-foreground",
        className,
      )}
    >
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-full bg-accent",
          buttonClassName,
        )}
      >
        {children}
      </div>
      <div>{label}</div>
    </div>
  );
}

function ProfilePage({ className }: ClassName) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center gap-4 overflow-hidden bg-secondary p-12",
        className,
      )}
    >
      <div
        className={
          "absolute z-0 h-[65em] w-[125vw] -translate-y-1/2 transform rounded-full bg-white"
        }
      >
        d
      </div>

      <LucideCircleUserRound className={""} size={50} />

      <div className={"relative size-36"}>
        <Avatar className={"size-full shadow-xl "}>
          <AvatarImage src={"https://i.imgflip.com/5ajbfn.png?a476808"} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div
          className={
            "shadow-strong absolute right-0 top-0 flex size-8 -translate-x-1 translate-y-1 items-center justify-center rounded-full bg-white text-zinc-500"
          }
        >
          <LucidePencil className={"dynamic-icon p-[0.5px]"} />
        </div>
      </div>

      <div className={"z-10 flex flex-col gap-3 p-6"}>
        <div className={"text-loose flex flex-col items-center gap-1"}>
          <p className={"text-3xl font-bold"}>Erlich, 26</p>
          <p className={"text-sm font-bold"}>Anime girl house</p>
        </div>
        {/* <div className={"grid grid-cols-[auto,1fr] gap-1"}>
          <LucideUserRound className={"dynamic-icon"} />
          <div>He/Him</div>

          <LucideRuler className={"dynamic-icon"} />
          <div>7'6</div>

          <LucideBriefcase className={"dynamic-icon"} />
          <div>Child</div>

          <LucideMapPin className={"dynamic-icon"} />
          <div>20m away</div>
        </div> */}
      </div>

      <div className="z-10 flex h-24 w-full flex-row  justify-around text-xs text-secondary-foreground/75">
        <ProfileButton label="Settings">
          <LucideSettings size={28} />
        </ProfileButton>
        <ProfileButton
          label="Add Media"
          className="basis-2/4 self-end"
          buttonClassName="bg-primary/75 text-primary-foreground"
        >
          <LucideCamera size={28} />
        </ProfileButton>
        <ProfileButton label="Safety">
          <LucideShield size={28} strokeWidth={2} />
        </ProfileButton>
      </div>
    </div>
  );
}

export default ProfilePage;
