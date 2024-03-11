import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default function Login() {
  return (
    <form
      action={async (formData: FormData) => {
        "use server";

        const supabase = createClient();
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        });

        if (!error) {
          redirect("/");
        }
      }}
    >
      <div>
        <input type="email" name="email" />
      </div>
      <div>
        <input type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
