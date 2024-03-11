import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";
import { Calendar, FileText } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex">
      <nav className="w-80 border-r h-screen max-h-screen sticky top-0 flex flex-col gap-2 p-2">
        <div className="flex flex-col">
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "justify-start gap-2"
            )}
            href="/calendar"
          >
            <Calendar size={16} />
            <span>Calendar</span>
          </Link>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "justify-start gap-2"
            )}
            href="/resume"
          >
            <FileText size={16} />
            <span>Resume</span>
          </Link>
        </div>
      </nav>
      <div className="grow p-4 md:p-10">{children}</div>
    </div>
  );
}
