import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import moImg from '../assets/mo.jpeg'
import osamaImg from '../assets/osama.jpeg'
import faresImg from '../assets/fares.jpeg'
import abdelrahmanImg from '../assets/abdelrahman.jpeg'
import gammalImg from '../assets/gammal.jpg'
import './Partners.css'

const Partners = () => {
    const { t } = useTranslation()
    const containerRef = useRef(null)
    
    const { useStaggerReveal } = useGsapAnimations()
    useStaggerReveal(containerRef, '.partners__item')

    const stars = [
        { name: 'مو سيلفا', image: moImg, objectPosition: 'center 0%' },
        { name: 'أسامة الحداد', image: osamaImg },
        { name: 'فارس الطماوي', image: faresImg },
        { name: 'عبد الرحمن أيمن', image: abdelrahmanImg },
        { name: 'محمود الجمال', image: gammalImg }
    ]

    return (
        <section className="partners" ref={containerRef}>
            <div className="partners__container">
                <div className="partners__header">
                    <div className="partners__divider"></div>
                    <h2 className="partners__title neon-text">{t('partnersPage.title')}</h2>
                    <div className="partners__divider"></div>
                </div>
                <div className="partners__track">
                    <div className="partners__scroll">
                        {[...stars, ...stars, ...stars].map((star, index) => (
                            <div className="partners__item" key={index}>
                                <div className="partners__icon">
                                    {star.image ? (
                                        <img 
                                            src={star.image} 
                                            alt={star.name} 
                                            className="partners__star-img" 
                                            style={star.objectPosition ? { objectPosition: star.objectPosition } : {}}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="partners__placeholder-img">🎭</div>
                                    )}
                                </div>
                                <span className="partners__name">{star.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
