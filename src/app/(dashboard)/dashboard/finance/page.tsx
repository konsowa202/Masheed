"use client";

import styles from "./finance.module.css";

const ledgerItems = [
  { id: "TX-901", date: "2026-04-15", type: "إيراد", source: "عمارة الخزامى", category: "ريع", amount: "+ 45,000", status: "مكتمل" },
  { id: "TX-902", date: "2026-04-12", type: "مصرف", source: "جمعية الأيتام", category: "توزيع", amount: "- 30,000", status: "قيد المعالجة" },
  { id: "TX-903", date: "2026-04-10", type: "صيانة", source: "مزرعة النخيل", category: "مصاريف", amount: "- 12,500", status: "مكتمل" },
  { id: "TX-904", date: "2026-04-05", type: "استثمار", source: "محفظة الأسهم", category: "أصل", amount: "+ 150,000", status: "مكتمل" },
];

export default function FinancePage() {
  return (
    <div className="fade-in">
      <div className={styles.header}>
        <h1 className={styles.title}>المحاسبة الوقفية والمصارف</h1>
        <p className={styles.subtitle}>تتبع التدفقات المالية وفصل ريع الوقف عن أصله شرعياً.</p>
      </div>

      <div className={styles.summaryGrid}>
        <div className={`${styles.summaryCard} glass-card`}>
          <span className={styles.summaryLabel}>إجمالي أصل الوقف (Asl)</span>
          <span className={styles.summaryValue}>١٤٥,٠٠٠,٠٠٠ ر.س</span>
          <div className={styles.badgeLabel}>القيمة الدفترية</div>
        </div>
        <div className={`${styles.summaryCard} glass-card`}>
          <span className={styles.summaryLabel}>الريع المتاح للتوزيع (Ri'a)</span>
          <span className={styles.summaryValue}>٢,٤٥٠,٠٠٠ ر.س</span>
          <div className={`${styles.badgeLabel} ${styles.primaryBadge}`}>قابل للصرف</div>
        </div>
        <div className={`${styles.summaryCard} glass-card`}>
          <span className={styles.summaryLabel}>المصارف المعتمدة</span>
          <span className={styles.summaryValue}>١٢ مصرفاً</span>
          <div className={styles.badgeLabel}>حسب شروط الواقف</div>
        </div>
      </div>

      <div className={`${styles.ledgerContainer} glass-card`}>
        <div className={styles.ledgerHeader}>
          <h3>دفتر الأستاذ العام</h3>
          <div className={styles.ledgerActions}>
            <button className={styles.exportBtn}>تصدير PDF</button>
            <button className="btn-primary">إضافة حركة مالية</button>
          </div>
        </div>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>المعرف</th>
              <th>التاريخ</th>
              <th>النوع</th>
              <th>المصدر/الجهة</th>
              <th>التصنيف</th>
              <th>المبلغ</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {ledgerItems.map((item) => (
              <tr key={item.id}>
                <td><code className={styles.code}>{item.id}</code></td>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>{item.source}</td>
                <td><span className={styles.categoryBadge}>{item.category}</span></td>
                <td className={item.amount.startsWith('+') ? styles.positive : styles.negative}>
                  {item.amount}
                </td>
                <td>
                  <span className={`${styles.statusDot} ${item.status === 'مكتمل' ? styles.done : styles.pending}`}></span>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
