import { createClient } from "@/lib/supabase/server";
import { ProfileWithResume, Resume } from "@/types/profile";

export const getProfileWithResume = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("profiles")
    .select("* , resume:resumes(*)")
    .eq("id", user!.id)
    .maybeSingle<ProfileWithResume>()
    .throwOnError();

  return data;
};

export const updateResume = async (resume: Partial<Resume>) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  await supabase
    .from("resumes")
    .update(resume)
    .eq("user_id", user!.id)
    .select()
    .throwOnError();
};
