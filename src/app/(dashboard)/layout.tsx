import Sidebar from "@/components/dashboard/Sidebar";
import TopNav from "@/components/dashboard/TopNav";
import { createClient } from "@/lib/supabase/server";
import styles from "./layout.module.css";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch user profile to get full_name and waqf_id
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, waqf_id")
    .eq("id", user.id)
    .single();

  // Fetch waqfs user has access to
  const { data: waqfs } = await supabase
    .from("waqfs")
    .select("id, name");

  return (
    <div className={styles.layout}>
      <Sidebar userWaqfs={waqfs || []} />
      <div className={styles.main}>
        <TopNav userProfile={profile} />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}

