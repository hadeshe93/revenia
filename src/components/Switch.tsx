import { ReactNode } from "react";

export interface Condition {
  when: boolean;
  children: ReactNode;
}

export interface SwitchProps {
  conditions: Condition[];
  default?: ReactNode;
}

export default function Switch({ conditions, default: defaultNode }: SwitchProps) {
  const condition = conditions.find((condition) => condition.when);
  if (condition) {
    return condition.children;
  }
  return defaultNode;
}
