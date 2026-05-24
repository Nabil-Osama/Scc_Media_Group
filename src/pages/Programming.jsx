import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useAnimations'
import { 
    FaReact, 
    FaDatabase, 
    FaCloud, 
    FaLaptopCode, 
    FaLock, 
    FaGlobe, 
    FaServer,
    FaInfoCircle
} from 'react-icons/fa'
import './Programming.css'

const Programming = () => {
    const { t } = useTranslation()
    const [activeTechCategory, setActiveTechCategory] = useState('frontend')
    const [seoRef, seoVisible] = useScrollReveal({ threshold: 0.1 })
    const [pillarsRef, pillarsVisible] = useScrollReveal({ threshold: 0.1 })
    const [showcaseRef, showcaseVisible] = useScrollReveal({ threshold: 0.1 })

    const techCategories = [
        {
            id: 'frontend',
            title: 'واجهات الويب (Frontend)',
            icon: FaReact,
            color: '#61dafb',
            items: [
                { name: 'Next.js / React', highlight: 'بناء واجهات عصرية تفاعلية وسريعة الاستجابة' },
                { name: 'TypeScript', highlight: 'تنظيم برمجي متقدم لضمان استقرار وتماسك الأنظمة' },
                { name: 'Framer Motion', highlight: 'حركات انتقالية وتفاعلية فائقة النعومة تجذب المستخدم' },
                { name: 'Tailwind CSS', highlight: 'تصميم متناسق تماماً ومناسب لجميع الهواتف والشاشات' }
            ]
        },
        {
            id: 'backend',
            title: 'السيرفرات والـ APIs (Backend)',
            icon: FaServer,
            color: '#339933',
            items: [
                { name: 'Node.js / Express', highlight: 'سيرفرات فائقة السرعة لمعالجة البيانات والطلبات الفورية' },
                { name: 'C# .NET Core', highlight: 'أنظمة خلفية قوية ومعتمدة للشركات والمواقع الكبرى' },
                { name: 'REST & GraphQL APIs', highlight: 'ربط برمجي مرن ومنظم لتسهيل تبادل البيانات' },
                { name: 'WebSockets', highlight: 'تقنيات التحديث الفوري والدردشة والاتصال المباشر' }
            ]
        },
        {
            id: 'database',
            title: 'البيانات والتخزين (Data & Cache)',
            icon: FaDatabase,
            color: '#f18c16',
            items: [
                { name: 'PostgreSQL', highlight: 'قواعد بيانات متكاملة وآمنة لحفظ وتنظيم معلوماتك' },
                { name: 'Redis Cache', highlight: 'ذاكرة تخزين مؤقتة لتسريع تحميل الصفحات لسرعة البرق' },
                { name: 'MongoDB', highlight: 'تخزين مرن وسريع للمحتويات والملفات المتنوعة' },
                { name: 'النسخ الاحتياطي التلقائي', highlight: 'تأمين كامل ضد فقدان البيانات مع استرجاع فوري' }
            ]
        },
        {
            id: 'cloud',
            title: 'السحابة والنشر (Cloud & Mobile)',
            icon: FaCloud,
            color: '#1a73e8',
            items: [
                { name: 'Docker Containers', highlight: 'تشغيل آمن للموقع في بيئة معزولة ومستقرة' },
                { name: 'React Native', highlight: 'برمجة تطبيقات ذكية تعمل على Android و iOS بكفاءة' },
                { name: 'AWS Cloud Services', highlight: 'استضافة سحابية عالمية تضمن عمل موقعك دون توقف' },
                { name: 'Netlify & Deployment', highlight: 'نشر وتحديث فوري للموقع على خوادم سحابية موزعة' }
            ]
        }
    ]

    return (
        <div className="creative-page prog-page">
            {/* Header section with matrix digital overlay */}
            <div className="creative-header">
                <div className="header-grid-overlay"></div>
                <div className="header-content terminal-theme">
                    <div className="server-status-wrap">
                        <span className="server-dot"></span>
                        <span className="server-info">STATUS // SECURE & ONLINE | SPEED: OPTIMAL</span>
                    </div>
                    <h1 className="reveal-text glitch-effect" data-text={t('programmingPage.title')}>
                        {t('programmingPage.title')}
                    </h1>
                    <p className="fade-up-text code-comment">&gt; {t('programmingPage.subtitle')}</p>
                </div>
            </div>

            <div className="prog-container">
                {/* 1. PREMIUM PROJECTS SHOWCASE */}
                <div 
                    className={`prog-cards-showcase reveal ${showcaseVisible ? 'reveal--visible' : ''}`}
                    ref={showcaseRef}
                >
                    {/* Web Showcase Card */}
                    <div className="prog-showcase-card glass-panel fade-in-left">
                        <div className="prog-showcase-visual web-browser-window">
                            <div className="window-header">
                                <span className="dot dot--red"></span>
                                <span className="dot dot--yellow"></span>
                                <span className="dot dot--green"></span>
                                <div className="browser-address-bar">https://sccmediagroup.com/services</div>
                            </div>
                            <div className="window-body">
                                <img src="/images/programming-web.png" alt={t('programmingPage.webTitle')} className="prog-showcase-img" loading="lazy" />
                            </div>
                        </div>
                        <div className="prog-showcase-details">
                            <h2>{t('programmingPage.webTitle')}</h2>
                            <p>{t('programmingPage.webDesc')}</p>
                            <div className="prog-showcase-badges">
                                <span>سرعة استجابة فائقة</span>
                                <span>متوافق مع محركات البحث SEO</span>
                                <span>تصاميم عصرية</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Showcase Card */}
                    <div className="prog-showcase-card glass-panel fade-in-right">
                        <div className="prog-showcase-visual mobile-phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                <img src="/images/programming-mobile.png" alt={t('programmingPage.appTitle')} className="prog-showcase-img" loading="lazy" />
                            </div>
                            <div className="phone-home-indicator"></div>
                        </div>
                        <div className="prog-showcase-details">
                            <h2>{t('programmingPage.appTitle')}</h2>
                            <p>{t('programmingPage.appDesc')}</p>
                            <div className="prog-showcase-badges">
                                <span>تطبيقات أندرويد وآيفون</span>
                                <span>أداء مستقر وسلس</span>
                                <span>واجهات تفاعلية جذابة</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. CORE ARCHITECTURAL PILLARS */}
                <div 
                    className={`pillars-section reveal ${pillarsVisible ? 'reveal--visible' : ''}`}
                    ref={pillarsRef}
                >
                    <div className="section-title-wrap">
                        <h2>معاييرنا في التطوير والبرمجة</h2>
                        <p>نحرص على تطبيق أعلى معايير الجودة والأداء لضمان عمل موقعك أو تطبيقك بأقصى كفاءة وثبات.</p>
                    </div>

                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <div className="pillar-glow"></div>
                            <div className="pillar-icon-wrap">
                                <FaLaptopCode className="pillar-icon" />
                            </div>
                            <h3>سرعة تصفح فائقة</h3>
                            <p>نصمم الأكواد البرمجية لتكون خفيفة وسريعة التحميل لضمان تجربة مستخدم مثالية ومنع مغادرة الزوار لموقعك.</p>
                            <ul className="pillar-specs">
                                <li>تحميل فوري للصفحات</li>
                                <li>أنيميشن سلس ومريح</li>
                                <li>أكواد نظيفة ومنظمة</li>
                            </ul>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-glow"></div>
                            <div className="pillar-icon-wrap">
                                <FaLock className="pillar-icon" />
                            </div>
                            <h3>حماية وأمان متكامل</h3>
                            <p>نطبق أفضل بروتوكولات الحماية والتشفير لتأمين بيانات موقعك وحماية حسابات عملائك ضد أي ثغرات.</p>
                            <ul className="pillar-specs">
                                <li>تأمين كامل لقواعد البيانات</li>
                                <li>تشفير مسارات الاتصال</li>
                                <li>التوافق مع بروتوكولات الأمان العالمية</li>
                            </ul>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-glow"></div>
                            <div className="pillar-icon-wrap">
                                <FaGlobe className="pillar-icon" />
                            </div>
                            <h3>صداقة كاملة للـ SEO</h3>
                            <p>{t('programmingPage.seoDesc')}</p>
                            <ul className="pillar-specs">
                                <li>أرشفة فورية وجاهزية تامة</li>
                                <li>بناء الكود بما يتوافق مع جوجل</li>
                                <li>تحسين سرعة الظهور بالنتائج الأولى</li>
                            </ul>
                        </div>

                        <div className="pillar-card">
                            <div className="pillar-glow"></div>
                            <div className="pillar-icon-wrap">
                                <FaServer className="pillar-icon" />
                            </div>
                            <h3>ثبات واستضافة مستقرة</h3>
                            <p>نعتمد على سيرفرات سحابية ذكية تضمن عمل موقعك على مدار الساعة بنسبة 100% دون أي توقف.</p>
                            <ul className="pillar-specs">
                                <li>سيرفرات سحابية قوية</li>
                                <li>تكرار سحابي ضد الأعطال</li>
                                <li>قدرة كاملة على تحمل الزيارات الكبيرة</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. INTERACTIVE TECH ARSENAL */}
                <div className="tech-arsenal-section">
                    <div className="section-title-wrap">
                        <h2>التقنيات العالمية التي نعتمد عليها</h2>
                        <p>نستخدم أحدث التقنيات البرمجية لبناء منتجات رقمية سريعة، مستقرة، وقابلة للتطور المستقبلي.</p>
                    </div>

                    <div className="tech-arsenal-layout">
                        {/* Selector Sidebar */}
                        <div className="tech-selector">
                            {techCategories.map((category) => {
                                const CatIcon = category.icon
                                return (
                                    <button 
                                        key={category.id}
                                        className={`selector-btn ${activeTechCategory === category.id ? 'active' : ''}`}
                                        onClick={() => setActiveTechCategory(category.id)}
                                        style={{ '--cat-color': category.color }}
                                    >
                                        <CatIcon className="selector-btn-icon" />
                                        <span>{category.title}</span>
                                    </button>
                                )
                            })}
                        </div>

                        {/* Tech Cards List */}
                        <div className="tech-details-grid">
                            {techCategories
                                .find(cat => cat.id === activeTechCategory)
                                .items.map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className="tech-detail-card"
                                        style={{ '--cat-color': techCategories.find(cat => cat.id === activeTechCategory).color }}
                                    >
                                        <div className="tech-detail-header">
                                            <h4>{item.name}</h4>
                                        </div>
                                        <p className="tech-detail-desc">
                                            <FaInfoCircle className="info-icon" />
                                            <span>{item.highlight}</span>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* 4. PERFORMANCE RUNNER AND SEO BANNER */}
                <div 
                    className={`seo-banner reveal reveal--scale ${seoVisible ? 'reveal--visible' : ''}`}
                    ref={seoRef}
                >
                    <div className="seo-banner-grid-overlay"></div>
                    <div className="seo-content-split">
                        {/* Text and trigger */}
                        <div className="seo-text-area">
                            <h2>سرعة وأداء موثق بالنتائج</h2>
                            <p>أكوادنا البرمجية نظيفة ومهيأة لتسجل أعلى درجات الأداء في فحوصات محركات البحث والسرعة العالمية.</p>
                            
                            {/* Lighthouse visual metrics */}
                            <div className="lighthouse-scores">
                                <div className="lh-circle">
                                    <div className="lh-ring lh-ring--green">100</div>
                                    <span>الأداء</span>
                                </div>
                                <div className="lh-circle">
                                    <div className="lh-ring lh-ring--green">100</div>
                                    <span>السرعة</span>
                                </div>
                                <div className="lh-circle">
                                    <div className="lh-ring lh-ring--green">100</div>
                                    <span>الأمان</span>
                                </div>
                            </div>

                            <a href="https://wa.me/201555000436" className="console-btn" target="_blank" rel="noopener noreferrer">
                                <FaLaptopCode className="console-icon" />
                                <span>{t('programmingPage.cta')}</span>
                            </a>
                        </div>

                        {/* Benchmark dashboard instead of terminal */}
                        <div className="seo-stats-area">
                            <div className="stats-header">
                                <span className="stats-title">تقرير جودة وسرعة الموقع (Web Vitals)</span>
                            </div>
                            <div className="stats-body">
                                <div className="stat-row">
                                    <div className="stat-label">سرعة فتح الموقع (Site Speed)</div>
                                    <div className="stat-value">فوري ⚡</div>
                                    <div className="stat-bar"><div className="stat-fill" style={{ width: '100%' }}></div></div>
                                </div>
                                <div className="stat-row">
                                    <div className="stat-label">التوافق مع الجوالات (Mobile Ready)</div>
                                    <div className="stat-value">مثالي 📱</div>
                                    <div className="stat-bar"><div className="stat-fill" style={{ width: '100%' }}></div></div>
                                </div>
                                <div className="stat-row">
                                    <div className="stat-label">درجة الأمان والحماية (Security Score)</div>
                                    <div className="stat-value">مشفر وآمن 🔒</div>
                                    <div className="stat-bar"><div className="stat-fill" style={{ width: '100%' }}></div></div>
                                </div>
                                <div className="stat-row">
                                    <div className="stat-label">جاهزية الأرشفة والبحث (SEO Score)</div>
                                    <div className="stat-value">ممتاز 🚀</div>
                                    <div className="stat-bar"><div className="stat-fill" style={{ width: '100%' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programming
