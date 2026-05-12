import { useRef } from 'react'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import './Hero.css'

const Hero = () => {
    const { t } = useTranslation()
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const visualRef = useRef(null)
    const primaryBtnRef = useRef(null)
    const secondaryBtnRef = useRef(null)
    
    const { useHeroAnimation, useMagneticButton } = useGsapAnimations()

    // Initialize animations
    useHeroAnimation(containerRef, textRef, visualRef)
    useMagneticButton(primaryBtnRef)
    useMagneticButton(secondaryBtnRef)

    return (
        <section className="hero" ref={containerRef}>
            <div className="hero__bg-shapes">
                <div className="hero__circle hero__circle--1"></div>
                <div className="hero__circle hero__circle--2"></div>
                <div className="hero__circle hero__circle--3"></div>
                <div className="hero__triangle hero__triangle--1"></div>
                <div className="hero__triangle hero__triangle--2"></div>
                <div className="hero__dots hero__dots--1"></div>
                <div className="hero__dots hero__dots--2"></div>
            </div>

            <div className="hero__container">
                <div className="hero__content" ref={textRef}>
                    <div className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        {t('hero.badge')}
                    </div>
                    <h1 className="hero__title">
                        <span className="hero__title-main">
                            {t('hero.title_part1')} 
                            <span className="hero__title-highlight"> {t('hero.title_highlight')}</span>
                        </span>
                        <span className="hero__title-sub">{t('hero.title_part2')}</span>
                    </h1>
                    <p className="hero__description">
                        {t('hero.description')}
                    </p>
                    <div className="hero__cta">
                        <button className="hero__btn hero__btn--primary" ref={primaryBtnRef}>
                            <span>{t('hero.primary_cta')}</span>
                            <span className="hero__btn-icon">→</span>
                        </button>
                        <button className="hero__btn hero__btn--secondary" ref={secondaryBtnRef}>
                            <FaWhatsapp />
                            <span>{t('hero.secondary_cta')}</span>
                        </button>
                    </div>

                </div>

                <div className="hero__visual" ref={visualRef}>
                    <div className="hero__visual-wrapper">
                        <div className="hero__visual-glow morph-blob"></div>
                        <div className="hero__image-container">
                            <img 
                                src="/images/brand-visual.png" 
                                alt="SCC Media Group Brand Visual" 
                                className="hero__brand-image"
                            />
                            <div className="hero__image-overlay"></div>
                            
                            <div className="hero__floating-elements">
                                <div className="hero__float-badge float-badge-1 float-animation">
                                    <span>💰</span>
                                    <p>{t('pageTrade')}</p>
                                </div>
                                <div className="hero__float-badge float-badge-2 float-animation--slow">
                                    <span>📈</span>
                                    <p>{t('marketing')}</p>
                                </div>
                                <div className="hero__float-badge float-badge-3 float-animation">
                                    <span>🛡️</span>
                                    <p>{t('intellectualProperty')}</p>
                                </div>
                                <div className="hero__float-badge float-badge-4 float-animation--slow">
                                    <span>💻</span>
                                    <p>{t('programming')}</p>
                                </div>
                                <div className="hero__float-badge float-badge-5 float-animation">
                                    <span>🎬</span>
                                    <p>{t('contentProduction')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
