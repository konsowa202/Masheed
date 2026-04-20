"use client";

import styles from "./Features.module.css";

const features = [
  {
    title: "رقمنة الأصول",
    eng: "Asset Digitalization",
    description: "توثيق شامل للصكوك، حدود الأراضي، والقيمة التاريخية. توليد QR code لكل أصل.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="9" y1="7" x2="15" y2="7"/>
        <line x1="9" y1="11" x2="15" y2="11"/>
        <line x1="9" y1="15" x2="12" y2="15"/>
      </svg>
    ),
    color: "#8561AD",
  },
  {
    title: "الشفافية المالية",
    eng: "Financial Transparency",
    description: "فصل 'الأصل' عن 'الريع' وأتمتة تقارير 'المصارف' بدقة شرعية ومحاسبية.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    color: "#10B981",
  },
  {
    title: "الامتثال النظامي",
    eng: "Legal Compliance",
    description: "تكامل مع الهيئة العامة للأوقاف، وزارة العدل، وZATCA Phase 2 الإلكترونية.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    title: "إدارة المستفيدين",
    eng: "Beneficiary Management",
    description: "قاعدة بيانات متكاملة للمستفيدين وأتمتة عمليات الصرف والدعم الخيري.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: "#F59E0B",
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            المميزات الأساسية
          </div>
          <h2 className={styles.title}>حلول رقمية متكاملة لقطاع الأوقاف</h2>
          <p className={styles.subtitle}>
            نقدم لك الأدوات اللازمة لإدارة أصولك الوقفية بكفاءة عالية وشفافية مطلقة.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={styles.iconWrap}
                style={{
                  background: feature.color + "18",
                  color: feature.color,
                }}
              >
                {feature.icon}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <span className={styles.cardEng}>{feature.eng}</span>
                <p className={styles.description}>{feature.description}</p>
              </div>
              <div
                className={styles.accentBar}
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
