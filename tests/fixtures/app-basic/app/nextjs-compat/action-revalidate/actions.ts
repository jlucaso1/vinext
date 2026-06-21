"use server";

import { revalidatePath } from "next/cache";
import { incrementActionRevalidateLayoutVersion } from "./state";

export async function revalidateAction() {
  incrementActionRevalidateLayoutVersion();
  revalidatePath("/nextjs-compat/action-revalidate");
}
