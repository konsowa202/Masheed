"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const menuItems = [
  {
    id: "dashboard",
    label: "نظرة عامة",
    labelEn: "Overview",
    path: "/dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    id: "assets",
    label: "سجل الأصول",
    labelEn: "Assets Log",
    path: "/dashboard/assets",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },

  {
    id: "finance",
    label: "المالية والمصارف",
    labelEn: "Finance",
    path: "/dashboard/finance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
  {
    id: "audit",
    label: "الرقابة والامتثال",
    labelEn: "Compliance",
    path: "/dashboard/compliance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    id: "beneficiary",
    label: "المستفيدون والتوكينيزيشن",
    labelEn: "Beneficiaries",
    path: "/dashboard/beneficiary",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    id: "ocr",
    label: "الأرشفة الذكية",
    labelEn: "OCR Scanning",
    path: "/dashboard/ocr",
    badge: "جديد",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
];

export default function Sidebar({ userWaqfs = [] }: { userWaqfs?: any[] }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const waqfList = userWaqfs.length > 0 ? userWaqfs : [{ id: 'none', name: 'لا يوجد أوقاف' }];
  const [currentWaqf, setCurrentWaqf] = useState(waqfList[0]?.id);
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      {/* Header */}
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M16 2L30 10V22L16 30L2 22V10L16 2Z" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
            <path d="M16 6L26 12V20L16 26L6 20V12L16 6Z" fill="white" fillOpacity="0.1"/>
            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontFamily="Cairo, sans-serif" fontWeight="700">م</text>
          </svg>
        </div>
        {!isCollapsed && (
          <div className={styles.logoText}>
            <span className={styles.logoPrimary}>مَشيد</span>
            <span className={styles.logoSecondary}>نظام إدارة الأوقاف</span>
          </div>
        )}
      </div>

      {/* Waqf Switcher */}
      {!isCollapsed && (
        <div className={styles.waqfSwitcher}>
          <div className={styles.waqfIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <select
            className={styles.waqfSelect}
            value={currentWaqf}
            onChange={(e) => setCurrentWaqf(e.target.value)}
          >
            {waqfList.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
          </select>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" style={{ flexShrink: 0, opacity: 0.5 }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      )}

      {/* Search */}
      <div className={styles.searchBox}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className={styles.searchIcon} width="15" height="15">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        {!isCollapsed && (
          <input
            type="text"
            placeholder="Cmd+K لبحث سريع..."
            className={styles.searchInput}
          />
        )}
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navGroup}>
          {!isCollapsed && <span className={styles.navGroupLabel}>الرئيسية</span>}
          {menuItems.slice(0, 1).map(item => (
            <NavItem key={item.id} item={item} isCollapsed={isCollapsed} isActive={pathname === item.path} />
          ))}
        </div>
        <div className={styles.navGroup}>
          {!isCollapsed && <span className={styles.navGroupLabel}>الوحدات</span>}
          {menuItems.slice(1).map(item => (
            <NavItem key={item.id} item={item} isCollapsed={isCollapsed} isActive={pathname === item.path} />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className={styles.sidebarFooter}>
        {!isCollapsed && (
          <div className={styles.notifRow}>
            <div className={styles.notifDot}></div>
            <span>٣ طلبات معلقة</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="14" height="14">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
          </div>
        )}
        <button
          className={styles.toggleBtn}
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "توسيع" : "طي"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            width="16" height="16"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 300ms' }}>
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      </div>
    </aside>
  );
}

function NavItem({
  item,
  isCollapsed,
  isActive,
}: {
  item: typeof menuItems[0];
  isCollapsed: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      href={item.path}
      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
      title={isCollapsed ? item.label : undefined}
    >
      <span className={styles.navIcon}>{item.icon}</span>
      {!isCollapsed && (
        <div className={styles.navLabels}>
          <span className={styles.navLabelAr}>{item.label}</span>
          <span className={styles.navLabelEn}>{item.labelEn}</span>
        </div>
      )}
      {!isCollapsed && item.badge && (
        <span className={styles.badge}>{item.badge}</span>
      )}
    </Link>
  );
}
