import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
    FaVideo, 
    FaUsers, 
    FaShieldAlt, 
    FaGoogle, 
    FaCode, 
    FaMobileAlt, 
    FaLock, 
    FaHeadphones 
} from "react-icons/fa";
import './Services.css'

const Services = () => {
    const { t } = useTranslation()
    const [activeIndex, setActiveIndex] = useState(0)
    const [windowWidth, setWindowWidth] = useState(1200)

    useEffect(() => {
        if (typeof window === "undefined") return;
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % 8);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + 8) % 8);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (document.activeElement && 
                (document.activeElement.tagName === 'INPUT' || 
                 document.activeElement.tagName === 'TEXTAREA' || 
                 document.activeElement.isContentEditable)) {
                return;
            }
            if (e.key === 'ArrowRight') {
                handlePrev();
            } else if (e.key === 'ArrowLeft') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const services = [
        {
            image: '/images/service-video-production.png',
            title: t('servicesPage.proReels.title'),
            description: t('servicesPage.proReels.desc'),
            color: '#FF6B35',
            gradient: 'linear-gradient(135deg, #FF6B35, #FF4500, #FF9F45)',
            icon: FaVideo,
            colorClass: 'from-orange-500 to-red-500'
        },
        {
            image: '/images/marketing-influencer.png',
            title: t('servicesPage.influencerMarketing.title'),
            description: t('servicesPage.influencerMarketing.desc'),
            color: '#6366f1',
            gradient: 'linear-gradient(135deg, #6366f1, #818cf8, #a78bfa)',
            icon: FaUsers,
            colorClass: 'from-indigo-500 to-purple-500'
        },
        {
            image: '/images/ip-copyright.png',
            title: t('servicesPage.copyrights.title'),
            description: t('servicesPage.copyrights.desc'),
            color: '#10b981',
            gradient: 'linear-gradient(135deg, #059669, #10b981, #34d399)',
            icon: FaShieldAlt,
            colorClass: 'from-emerald-500 to-teal-500'
        },
        {
            image: '/images/marketing-campaign.png',
            title: t('servicesPage.digitalMarketing.title'),
            description: t('servicesPage.digitalMarketing.desc'),
            color: '#f59e0b',
            gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24, #fcd34d)',
            icon: FaGoogle,
            colorClass: 'from-yellow-500 to-amber-500'
        },
        {
            image: '/images/programming-web.png',
            title: t('servicesPage.websiteDesign.title'),
            description: t('servicesPage.websiteDesign.desc'),
            color: '#0ea5e9',
            gradient: 'linear-gradient(135deg, #0284c7, #0ea5e9, #38bdf8)',
            icon: FaCode,
            colorClass: 'from-sky-500 to-blue-500'
        },
        {
            image: '/images/programming-mobile.png',
            title: t('servicesPage.appDevelopment.title'),
            description: t('servicesPage.appDevelopment.desc'),
            color: '#a855f7',
            gradient: 'linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)',
            icon: FaMobileAlt,
            colorClass: 'from-purple-500 to-pink-500'
        },
        {
            image: '/images/ip-identity.png',
            title: t('servicesPage.ipProtection.title'),
            description: t('servicesPage.ipProtection.desc'),
            color: '#ec4899',
            gradient: 'linear-gradient(135deg, #db2777, #ec4899, #f472b6)',
            icon: FaLock,
            colorClass: 'from-pink-500 to-rose-500'
        },
        {
            image: '/images/service-tech-support.png',
            title: t('servicesPage.techSupport.title'),
            description: t('servicesPage.techSupport.desc'),
            color: '#14b8a6',
            gradient: 'linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf)',
            icon: FaHeadphones,
            colorClass: 'from-teal-500 to-cyan-500'
        }
    ];

    const isMobile = windowWidth < 768;
    const baseOffset = isMobile ? 120 : 280;

    return (
        <section className="services" id="services">
            {/* Cyber Grid & Cosmic Space Background */}
            <div className="services__bg-elements">
                <div className="services__bg-circle services__bg-circle--1"></div>
                <div className="services__bg-circle services__bg-circle--2"></div>
            </div>

            <div className="services__container">
                {/* Section Header */}
                <h2 className="section-title services__title">
                    {t('servicesPage.sectionTitle')}
                </h2>

                {/* 3D Slider Carousel */}
                <div className="services__carousel-wrapper">
                    <motion.div 
                        className="services__carousel-track"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, info) => {
                            const swipeThreshold = 55;
                            if (info.offset.x < -swipeThreshold) {
                                handlePrev();
                            } else if (info.offset.x > swipeThreshold) {
                                handleNext();
                            }
                        }}
                    >
                        {services.map((service, index) => {
                            const offset = index - activeIndex;
                            const isActive = index === activeIndex;
                            
                            // Coverflow 3D Math (RTL Direction)
                            let scale = 0.82;
                            let rotateY = 0;
                            let zIndex = 1;
                            let opacity = 0.3;
                            let xOffset = 0;

                            if (isActive) {
                                scale = 1.02;
                                rotateY = 0;
                                zIndex = 10;
                                opacity = 1;
                                xOffset = 0;
                            } else if (offset === -1 || (activeIndex === 0 && index === services.length - 1)) {
                                // Previous card -> now on the RIGHT
                                scale = 0.8;
                                rotateY = isMobile ? -20 : -35;
                                zIndex = 5;
                                opacity = 0.45;
                                xOffset = baseOffset;
                            } else if (offset === 1 || (activeIndex === services.length - 1 && index === 0)) {
                                // Next card -> now on the LEFT
                                scale = 0.8;
                                rotateY = isMobile ? 20 : 35;
                                zIndex = 5;
                                opacity = 0.45;
                                xOffset = -baseOffset;
                            } else {
                                opacity = 0;
                                zIndex = 0;
                                xOffset = offset > 0 ? -baseOffset * 2.2 : baseOffset * 2.2;
                            }

                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={index}
                                    className={`services__card ${isActive ? 'services__card--active' : ''}`}
                                    style={{
                                        '--accent': service.color,
                                        zIndex: zIndex,
                                        pointerEvents: isActive ? 'auto' : 'none',
                                    }}
                                    animate={{
                                        x: xOffset,
                                        scale: scale,
                                        rotateY: rotateY,
                                        opacity: opacity,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 24,
                                        mass: 0.8
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className="services__card-inner">
                                        {/* Radial Ambient Glow */}
                                        <div
                                            className="services__card-glow"
                                            style={{
                                                background: `radial-gradient(circle at center, ${service.color}18, transparent 70%)`,
                                            }}
                                        />

                                        {/* Top Badge */}
                                        <div className="services__card-badge-wrap">
                                            <span 
                                                className="services__card-badge"
                                                style={{ background: service.color + '18', color: service.color }}
                                            >
                                                خدمة رقم 0{index + 1}
                                            </span>
                                        </div>

                                        {/* Icon Container */}
                                        <div className={`services__card-icon-wrap bg-gradient-to-br ${service.colorClass}`}>
                                            <Icon className="services__card-icon" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="services__card-title">{service.title}</h3>
                                        
                                        {/* Description */}
                                        <p className="services__card-desc">{service.description}</p>

                                        {/* Browser Mockup Window */}
                                        <div className="services__card-window">
                                            <div className="services__card-window-bar">
                                                <span className="services__card-dot services__card-dot--red"></span>
                                                <span className="services__card-dot services__card-dot--yellow"></span>
                                                <span className="services__card-dot services__card-dot--green"></span>
                                            </div>
                                            <div className="services__card-image-wrap">
                                                <img 
                                                    src={service.image} 
                                                    alt={service.title} 
                                                    className="services__card-image" 
                                                    loading="lazy"
                                                />
                                                <div className="services__card-accent-line" style={{ background: service.gradient }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Bottom Timeline Controls */}
                <div className="services__controls">
                    <button onClick={handlePrev} className="services__nav-btn" aria-label="Previous service">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="services__timeline">
                        <div className="services__timeline-track">
                            <motion.div 
                                className="services__timeline-fill"
                                animate={{ width: `${(activeIndex / 7) * 100}%` }}
                                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                            />
                        </div>
                        {services.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`services__timeline-node ${i === activeIndex ? 'services__timeline-node--active' : ''}`}
                                style={{ '--node-accent': item.color }}
                                title={item.title}
                            >
                                <span className="services__timeline-node-dot"></span>
                                <span className="services__timeline-tooltip">{item.title}</span>
                            </button>
                        ))}
                    </div>


                    <button onClick={handleNext} className="services__nav-btn" aria-label="Next service">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
