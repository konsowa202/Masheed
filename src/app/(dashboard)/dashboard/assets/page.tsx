"use client";

import { useState } from "react";
import styles from "./assets.module.css";

const initialAssets = [
  { id: "A-001", name: "برج الخزامى", type: "تجاري", sukuk: "١٢٣٤٥٦٧٨٩", area: "٢٥٠٠ م٢", value: "٨٥,٠٠٠,٠٠٠", status: "مؤجر", usage: "مكاتب" },
  { id: "A-002", name: "مزرعة النخيل", type: "زراعي", sukuk: "٩٨٧٦٥٤٣٢١", area: "٥٠,٠٠٠ م٢", value: "١٢,٥٠٠,٠٠٠", status: "نشط", usage: "تمور" },
  { id: "A-003", name: "عمارة العليا", type: "سكني", sukuk: "٤٥٦١٢٣٧٨٩", area: "١٢٠٠ م٢", value: "٣٢,٠٠٠,٠٠٠", status: "صيانة", usage: "شقق" },
  { id: "A-004", name: "مستودعات السلي", type: "صناعي", sukuk: "٧٨٩٤٥٦١٢٣", area: "٤٠٠٠ م٢", value: "١٥,٠٠٠,٠٠٠", status: "شاغر", usage: "تخزين" },
];

export default function AssetsPage() {
  const [view, setView] = useState("list");
  const [showQR, setShowQR] = useState<string | null>(null);

  return (
    <div className="fade-in">
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <h1>سجل الأصول العقارية الوقفية</h1>
          <p>إدارة وتوثيق صكوك الأوقاف وتحليل أداء العقارات.</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.secBtn}>تصدير البيانات</button>
          <button className="btn-primary">إضافة أصل وقفي +</button>
        </div>
      </div>

      <div className={`${styles.filters} glass-card`}>
        <div className={styles.search}>
          <span>🔍</span>
          <input type="text" placeholder="بحث برقم الصك أو اسم العقار..." />
        </div>
        <div className={styles.viewToggle}>
          <button onClick={() => setView("list")} className={view === "list" ? styles.active : ""}>قائمة</button>
          <button onClick={() => setView("map")} className={view === "map" ? styles.active : ""}>خريطة GIS</button>
        </div>
      </div>

      {view === "list" ? (
        <div className={`${styles.ledgerContainer} glass-card`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>المعرف</th>
                <th>اسم العقار</th>
                <th>رقم الصك</th>
                <th>النوع / الاستخدام</th>
                <th>المساحة</th>
                <th>القيمة التاريخية</th>
                <th>الحالة</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {initialAssets.map((asset) => (
                <tr key={asset.id}>
                  <td><code className={styles.code}>{asset.id}</code></td>
                  <td>
                    <div className={styles.assetName}>
                      <strong>{asset.name}</strong>
                    </div>
                  </td>
                  <td>{asset.sukuk}</td>
                  <td>
                    <div className={styles.typeCol}>
                      <span className={styles.typeTag}>{asset.type}</span>
                      <span className={styles.usageTag}>{asset.usage}</span>
                    </div>
                  </td>
                  <td>{asset.area}</td>
                  <td className={styles.price}>{asset.value} ر.س</td>
                  <td>
                    <span className={`${styles.status} ${styles[asset.status]}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className={styles.tableActions}>
                    <button title="QR Code" onClick={() => setShowQR(asset.name)}>📱</button>
                    <button title="تعديل">✏️</button>
                    <button title="سجل الصيانة">🛠️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={`${styles.mapView} glass-card`}>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapOverlay}>
              <h3>تكامل نظم المعلومات الجغرافية (GIS)</h3>
              <p>يتم الآن عرض ٤ أصول وقفية على خريطة الرياض.</p>
              <div className={styles.pins}>
                <div className={styles.pin} style={{ top: '30%', left: '40%' }}>📍</div>
                <div className={styles.pin} style={{ top: '50%', left: '60%' }}>📍</div>
                <div className={styles.pin} style={{ top: '20%', left: '30%' }}>📍</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* QR Modal Mockup */}
      {showQR && (
        <div className={styles.modalBackdrop} onClick={() => setShowQR(null)}>
          <div className={`${styles.qrModal} glass-card`} onClick={e => e.stopPropagation()}>
            <h3>رمز تعريف الأصل (QR Code)</h3>
            <p>{showQR}</p>
            <div className={styles.qrVisual}>
              {/* Mock QR Code SVG */}
              <svg viewBox="0 0 100 100" width="150" height="150">
                <rect width="100" height="100" fill="#fff" />
                <path d="M10,10h30v30h-30z M60,10h30v30h-30z M10,60h30v30h-30z M45,45h10v10h-10z" fill="var(--color-primary)" />
                <rect x="15" y="15" width="20" height="20" fill="#fff" />
                <rect x="65" y="15" width="20" height="20" fill="#fff" />
                <rect x="15" y="65" width="20" height="20" fill="#fff" />
              </svg>
            </div>
            <button className="btn-primary" onClick={() => setShowQR(null)}>إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
}
