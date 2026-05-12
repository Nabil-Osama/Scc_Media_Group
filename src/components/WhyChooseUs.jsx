import { FaRegLightbulb, FaChartLine, FaSearchPlus } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    const { t } = useTranslation()
    const containerRef = useRef(null)
    
    const { useStaggerReveal } = useGsapAnimations()

    // Initialize GSAP Staggered Reveal
    useStaggerReveal(containerRef, '.why-choose-us__card')

    const features = [
        {
            icon: <FaRegLightbulb />,
            title: t('whyChooseUs.features.f1.title'),
            description: t('whyChooseUs.features.f1.desc'),
            color: '#1372b8',
            num: '01'
        },
        {
            icon: <FaSearchPlus />,
            title: t('whyChooseUs.features.f2.title'),
            description: t('whyChooseUs.features.f2.desc'),
            color: '#4da6e8',
            num: '02'
        },
        {
            icon: <FaChartLine />,
            title: t('whyChooseUs.features.f3.title'),
            description: t('whyChooseUs.features.f3.desc'),
            color: '#004d80',
            num: '03'
        }
    ]

    const [mouse, setMouse] = useState({ x: 50, y: 50 })

    useEffect(() => {
        const section = containerRef.current
        if (!section) return
        const handleMove = (e) => {
            const rect = section.getBoundingClientRect()
            setMouse({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100
            })
        }
        section.addEventListener('mousemove', handleMove)
        return () => section.removeEventListener('mousemove', handleMove)
    }, [])

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
        <section
            className="why-choose-us"
            ref={containerRef}
            style={{ '--mx': `${mouse.x}%`, '--my': `${mouse.y}%` }}
        >
            <div className="why-choose-us__bg">
                <div className="why-choose-us__bg-gradient"></div>
                <div className="why-choose-us__bg-grid"></div>
                <div className="why-choose-us__bg-orb why-choose-us__bg-orb--1 morph-blob"></div>
                <div className="why-choose-us__bg-orb why-choose-us__bg-orb--2 morph-blob"></div>
                <div className="why-choose-us__bg-orb why-choose-us__bg-orb--3"></div>
            </div>

            <div className="why-choose-us__container">
                <div className="why-choose-us__header">
                    <span className="why-choose-us__badge pulse-glow">{t('whyChooseUs.badge')}</span>
                    <h2 className="why-choose-us__title neon-text">
                        <span>{t('whyChooseUs.title')}</span>
                    </h2>
                    <p className="why-choose-us__subtitle">
                        {t('whyChooseUs.subtitle')}
                    </p>
                </div>

                <div className="why-choose-us__grid">
                    {features.map((feature, index) => (
                        <div
                            className="why-choose-us__card"
                            key={index}
                            style={{ '--accent': feature.color }}
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            <div className="why-choose-us__card-blobs">
                                <div className="why-choose-us__card-blob blob-1"></div>
                                <div className="why-choose-us__card-blob blob-2"></div>
                            </div>
                            <div className="why-choose-us__card-spotlight"></div>
                            <div className="why-choose-us__card-shine"></div>
                            <span className="why-choose-us__card-num">{feature.num}</span>
                            <div className="why-choose-us__card-icon-wrap">
                                <div className="why-choose-us__card-icon-ring"></div>
                                <div className="why-choose-us__card-icon">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="why-choose-us__card-title">{feature.title}</h3>
                            <p className="why-choose-us__card-desc">{feature.description}</p>
                            <div className="why-choose-us__card-border"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
