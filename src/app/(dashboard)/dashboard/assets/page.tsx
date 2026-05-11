import styles from "./assets.module.css";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import ExportButton from "@/components/dashboard/ExportButton";

export default async function AssetsPage() {
  const supabase = await createClient();
  const { data: assets } = await supabase.from("assets").select("*").order("created_at", { ascending: false });

  const formatCategory = (category: string) => {
    switch (category) {
      case "real_estate": return "عقاري";
      case "agricultural": return "زراعي";
      case "investment": return "مالي / أسهم";
      case "cash": return "نقد";
      default: return category;
    }
  };

  return (
    <div className="fade-in">
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <h1>سجل الأصول الوقفية</h1>
          <p>إدارة وتوثيق صكوك الأوقاف العقارية، المحافظ المالية، والأصول النقدية.</p>
        </div>
        <div className={styles.actions}>
          <ExportButton data={assets || []} filename="سجل_الأصول" className={styles.secBtn} />
          <Link href="/dashboard/assets/add" className="btn-primary" style={{ textDecoration: 'none' }}>إضافة أصل وقفي +</Link>
        </div>
      </div>

      <div className={`${styles.filters} glass-card`}>
        <div className={styles.search}>
          <span>🔍</span>
          <input type="text" placeholder="بحث برقم الصك أو اسم الأصل..." />
        </div>
        <div className={styles.viewToggle}>
          <button className={styles.active}>قائمة</button>
          <button>خريطة GIS</button>
        </div>
      </div>

      <div className={`${styles.ledgerContainer} glass-card`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>المعرف</th>
              <th>اسم الأصل / العقار</th>
              <th>التصنيف</th>
              <th>الموقع / الحساب</th>
              <th>القيمة (التقييم)</th>
              <th>الحالة</th>
              <th>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {assets && assets.length > 0 ? assets.map((asset) => (
              <tr key={asset.id}>
                <td><code className={styles.code}>{asset.id.split("-")[0]}...</code></td>
                <td>
                  <div className={styles.assetName}>
                    <strong>{asset.name}</strong>
                  </div>
                </td>
                <td>
                  <div className={styles.typeCol}>
                    <span className={styles.typeTag}>{formatCategory(asset.category)}</span>
                  </div>
                </td>
                <td>{asset.location || "غير متوفر"}</td>
                <td className={styles.price}>{Number(asset.valuation).toLocaleString()} ر.س</td>
                <td>
                  <span className={`${styles.status} ${styles[asset.status] || ''}`}>
                    {asset.status === "active" ? "نشط" : asset.status}
                  </span>
                </td>
                <td className={styles.tableActions}>
                  <button title="QR Code">📱</button>
                  <button title="تعديل">✏️</button>
                  <button title="سجل الصيانة">🛠️</button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  لا توجد أصول مضافة بعد. يمكنك إضافة أصل نقدي أو عقاري أو محفظة أسهم لتفعيل الـ ERP.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
