import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import './Services.css'

const Services = () => {
    const { t } = useTranslation()
    const containerRef = useRef(null)
    
    const { useStaggerReveal } = useGsapAnimations()

    // Initialize GSAP Staggered Reveal
    useStaggerReveal(containerRef, '.services__card')

    const services = [
        {
            image: '/images/service-video-production.png',
            title: t('servicesPage.proReels.title'),
            description: t('servicesPage.proReels.desc'),
            color: '#FF6B35',
            gradient: 'linear-gradient(135deg, #FF6B35, #FF4500, #FF9F45)'
        },
        {
            image: '/images/marketing-influencer.png',
            title: t('servicesPage.influencerMarketing.title'),
            description: t('servicesPage.influencerMarketing.desc'),
            color: '#6366f1',
            gradient: 'linear-gradient(135deg, #6366f1, #818cf8, #a78bfa)'
        },
        {
            image: '/images/ip-copyright.png',
            title: t('servicesPage.copyrights.title'),
            description: t('servicesPage.copyrights.desc'),
            color: '#10b981',
            gradient: 'linear-gradient(135deg, #059669, #10b981, #34d399)'
        },
        {
            image: '/images/marketing-campaign.png',
            title: t('servicesPage.digitalMarketing.title'),
            description: t('servicesPage.digitalMarketing.desc'),
            color: '#f59e0b',
            gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24, #fcd34d)'
        },
        {
            image: '/images/programming-web.png',
            title: t('servicesPage.websiteDesign.title'),
            description: t('servicesPage.websiteDesign.desc'),
            color: '#0ea5e9',
            gradient: 'linear-gradient(135deg, #0284c7, #0ea5e9, #38bdf8)'
        },
        {
            image: '/images/programming-mobile.png',
            title: t('servicesPage.appDevelopment.title'),
            description: t('servicesPage.appDevelopment.desc'),
            color: '#a855f7',
            gradient: 'linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)'
        },
        {
            image: '/images/ip-identity.png',
            title: t('servicesPage.ipProtection.title'),
            description: t('servicesPage.ipProtection.desc'),
            color: '#ec4899',
            gradient: 'linear-gradient(135deg, #db2777, #ec4899, #f472b6)'
        },
        {
            image: '/images/service-tech-support.png',
            title: t('servicesPage.techSupport.title'),
            description: t('servicesPage.techSupport.desc'),
            color: '#14b8a6',
            gradient: 'linear-gradient(135deg, #0d9488, #14b8a6, #2dd4bf)'
        }
    ]

    const handleMouseMove = (e, card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        card.style.setProperty('--rx', `${rotateX}deg`);
        card.style.setProperty('--ry', `${rotateY}deg`);
    };

    const handleMouseLeave = (card) => {
        card.style.setProperty('--rx', `0deg`);
        card.style.setProperty('--ry', `0deg`);
    };

    return (
        <section className="services" id="services" ref={containerRef}>
            <div className="services__bg-elements">
                <div className="services__bg-circle services__bg-circle--1"></div>
                <div className="services__bg-circle services__bg-circle--2"></div>
            </div>
            <div className="services__container">
                <h2 className="section-title services__title">
                    {t('servicesPage.sectionTitle')}
                </h2>
                <div className="services__grid">
                    {services.map((service, index) => (
                        <div
                            className="services__card tilt-card gradient-border"
                            key={index}
                            style={{ '--accent': service.color }}
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            <div className="services__card-spotlight"></div>
                            <div className="services__card-window">
                                <div className="services__card-window-header">
                                    <span className="services__dot services__dot--green"></span>
                                    <span className="services__dot services__dot--yellow"></span>
                                    <span className="services__dot services__dot--red"></span>
                                </div>
                                <div className="services__card-image-wrap">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="services__card-image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.description}</p>

                            <div className="services__card-accent" style={{ background: service.gradient }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
