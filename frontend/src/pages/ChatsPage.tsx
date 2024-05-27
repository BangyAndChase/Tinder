import { cn } from "@/lib/utils";
import { ClassName } from "@/types/overridable";

function ChatsPage({ className }: ClassName) {
  return <div data-rehype-pretty-code-fragment className={cn("", className)}></div>;
}

export default ChatsPage;
