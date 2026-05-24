import { useTranslation } from 'react-i18next'
import { FaShieldAlt, FaUserShield, FaLock, FaChartLine, FaCheckCircle } from 'react-icons/fa'
import './IntellectualProperty.css'

const IntellectualProperty = () => {
    const { t } = useTranslation()

    const securityProtocols = [
        {
            icon: FaUserShield,
            title: t('intellectualPropertyPage.identityTitle'),
            desc: t('intellectualPropertyPage.identityDesc'),
            image: "/images/ip-identity.png",
            protocol: "PROTOCOL 01 // IDENTITY SHIELD",
            color: "#1a73e8",
            points: [
                "تأمين البصمة الرقمية والهوية الثنائية (2FA)",
                "حماية الحسابات من الانتحال والتوثيق الرسمي",
                "المتابعة المستمرة للثغرات الأمنية للحسابات"
            ]
        },
        {
            icon: FaShieldAlt,
            title: t('intellectualPropertyPage.copyrightTitle'),
            desc: t('intellectualPropertyPage.copyrightDesc'),
            image: "/images/ip-copyright.png",
            protocol: "PROTOCOL 02 // RIGHTS DEFENSE",
            color: "#10b981",
            points: [
                "حماية حقوق الفيديوهات والصور والمقاطع الصوتية",
                "نظام فحص تلقائي للانتهاكات عبر مختلف المنصات",
                "توثيق الملكية الفكرية وحذف النسخ المسروقة فوراً"
            ]
        },
        {
            icon: FaLock,
            title: t('intellectualPropertyPage.recoveryTitle'),
            desc: t('intellectualPropertyPage.recoveryDesc'),
            image: "/images/ip-recovery.png",
            protocol: "PROTOCOL 03 // ASSET RECOVERY",
            color: "#ec4899",
            points: [
                "استعادة الحسابات المغلقة، المعطلة والمسروقة بسرعة",
                "فحص وإزالة البرمجيات الخبيثة وتأمين نقاط الدخول",
                "تأمين الحساب المسترد بأحدث بروتوكولات الحماية"
            ]
        },
        {
            icon: FaChartLine,
            title: t('intellectualPropertyPage.reportsTitle'),
            desc: t('intellectualPropertyPage.reportsDesc'),
            image: "/images/ip-reports.png",
            protocol: "PROTOCOL 04 // SECURITY AUDIT",
            color: "#f59e0b",
            points: [
                "تقارير دورية تحليلية شاملة عن حالة الأصول الرقمية",
                "مراقبة أمنية مستمرة لحالة الهوية الرقمية للعلامة",
                "تحليل التفاعل وإحصائيات الحماية ونقاط الضعف"
            ]
        }
    ];

    return (
        <div className="creative-page ip-page">
            <div className="creative-header">
                <div className="header-content">
                    <h1 className="reveal-text glitch-effect" data-text={t('intellectualPropertyPage.title')}>
                        {t('intellectualPropertyPage.title')}
                    </h1>
                    <p className="fade-up-text">{t('intellectualPropertyPage.subtitle')}</p>
                </div>
            </div>

            <div className="ip-content">
                {securityProtocols.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const IconComponent = item.icon;
                    return (
                        <div 
                            key={index}
                            className={`ip-card ${isEven ? '' : 'ip-card--reverse'}`}
                            style={{ '--card-accent': item.color }}
                        >
                            {/* Visual Side: Hologram Projection Container */}
                            <div className="ip-card__visual">
                                <div className="hologram-container">
                                    {/* Tech Rings rotating around image */}
                                    <div className="hologram-ring hologram-ring--outer"></div>
                                    <div className="hologram-ring hologram-ring--inner"></div>
                                    <div className="hologram-scan-line"></div>
                                    
                                    {/* The Holographic Image */}
                                    <div className="hologram-frame">
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            className="hologram-image" 
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="hologram-base-glow"></div>
                                </div>
                            </div>

                            {/* Content Side: Text & Protocol Info */}
                            <div className="ip-card__details">
                                <div className="protocol-indicator">
                                    {item.protocol}
                                </div>
                                <div className="details-header">
                                    <div className="details-icon-wrap">
                                        <IconComponent className="details-icon" />
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                                <p className="details-desc">{item.desc}</p>
                                
                                <ul className="details-points">
                                    {item.points.map((pt, i) => (
                                        <li key={i} className="details-point">
                                            <FaCheckCircle className="point-icon" />
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="ip-shield-banner">
                <div className="shield-banner-glow"></div>
                <div className="shield-icon-container">
                    <FaShieldAlt className="shield-icon-svg" />
                </div>
                <h2>{t('intellectualPropertyPage.bottomTitle')}</h2>
                <p className="shield-banner-desc">
                    لا تنتظر حتى تتعرض حساباتك أو هويتك الرقمية للخطر. تواصل مع خبراء الأمن السيبراني لدينا الآن لحماية وتأمين أصولك فوراً.
                </p>
                <a 
                    href="https://wa.me/201555000436" 
                    className="creative-btn magnetic-btn-glow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {t('intellectualPropertyPage.bottomCta')}
                </a>
            </div>
        </div>
    )
}

export default IntellectualProperty
