"use server";

import { updateResume } from "@/api/profile";

export async function saveSkills(skills: string[], config: any) {
  await updateResume({
    config: {
      ...config,
      skills,
    },
  });
}
