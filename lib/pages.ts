import { USER_STAGES } from "@/lib/constants";
import type { UserStage } from "@/types";

export function isUserStage(value: string): value is UserStage {
  return USER_STAGES.includes(value as UserStage);
}
