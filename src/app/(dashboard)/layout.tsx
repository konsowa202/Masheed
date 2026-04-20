import Sidebar from "@/components/dashboard/Sidebar";
import styles from "./layout.module.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <header className={styles.topNav}>
          <div className={styles.breadcrumb}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>لوحة التحكم</span>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>نظرة عامة</span>
          </div>
          <div className={styles.topActions}>
            <button className={styles.notifBtn} title="الإشعارات">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
              <span className={styles.notifBadge}>٣</span>
            </button>
            <div className={styles.avatar}>
              <div className={styles.avatarInner}>فـ</div>
              <div className={styles.avatarInfo}>
                <span className={styles.avatarName}>فيصل المطيري</span>
                <span className={styles.avatarRole}>ناظر الوقف</span>
              </div>
            </div>
          </div>
        </header>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
