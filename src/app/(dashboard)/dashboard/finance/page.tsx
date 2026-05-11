import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import ExportButton from "@/components/dashboard/ExportButton";
import styles from "../assets/assets.module.css"; 

export default async function FinancePage() {
  const supabase = await createClient();
  const { data: transactions } = await supabase
    .from("transactions")
    .select("*, assets(name)")
    .order("created_at", { ascending: false });

  const formatType = (type: string) => {
    switch (type) {
      case "income": return "إيراد (Ri'a)";
      case "expense": return "مصروف (صيانة/إدارة)";
      case "distribution": return "توزيع (للمستفيدين)";
      default: return type;
    }
  };

  return (
    <div className="fade-in">
      <div className={styles.header}>
        <div className={styles.titleInfo}>
          <h1>المالية والمصارف (دفتر الأستاذ)</h1>
          <p>إدارة وتوثيق الإيرادات والمصروفات والتوزيعات النقدية للأوقاف.</p>
        </div>
        <div className={styles.actions}>
          <ExportButton data={transactions || []} filename="سجل_المالية" className={styles.secBtn} />
          <Link href="/dashboard/finance/add" className="btn-primary" style={{ textDecoration: 'none' }}>تسجيل معاملة +</Link>
        </div>
      </div>

      <div className={`${styles.ledgerContainer} glass-card`} style={{ marginTop: '2rem' }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>رقم المعاملة</th>
              <th>النوع</th>
              <th>المبلغ (ر.س)</th>
              <th>الأصل المرتبط</th>
              <th>الوصف</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {transactions && transactions.length > 0 ? transactions.map((t) => (
              <tr key={t.id}>
                <td><code className={styles.code}>{t.id.split("-")[0]}</code></td>
                <td>
                  <span className={`${styles.status} ${t.type === 'income' ? styles.active : t.type === 'expense' ? styles.suspended : ''}`}>
                    {formatType(t.type)}
                  </span>
                </td>
                <td style={{ color: t.type === 'income' ? '#10B981' : '#EF4444', fontWeight: 'bold' }}>
                  {t.type === 'income' ? '+' : '-'}{Number(t.amount).toLocaleString()}
                </td>
                <td>{(t.assets as any)?.name || "—"}</td>
                <td>{t.description || "—"}</td>
                <td>{new Date(t.transaction_date).toLocaleDateString("ar-SA")}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  لا توجد معاملات مالية بعد. قم بتسجيل الإيرادات أو المصروفات أولاً.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
