import { ClassValue } from "clsx";
import { ReactNode } from "react";

interface ClassName {
  className?: ClassValue | ClassValue[];
}

interface Children {
  children?: ReactNode;
}

interface Overridable extends Children, ClassName {}

export type { ClassName, Children, Overridable };
