import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import { FaFacebook, FaYoutube, FaTiktok, FaGoogle, FaSnapchatGhost, FaLinkedin, FaGlobeAmericas } from 'react-icons/fa'
import { SiMeta } from 'react-icons/si'
import './Partners.css'

const Partners = () => {
    const { t } = useTranslation()
    const containerRef = useRef(null)
    
    const { useStaggerReveal } = useGsapAnimations()
    useStaggerReveal(containerRef, '.partners__item')

    const partners = [
        { name: 'Meta Business Partner', Icon: FaFacebook, color: '#1877F2' },
        { name: 'YouTube Advertising', Icon: FaYoutube, color: '#FF0000' },
        { name: 'TikTok Marketing', Icon: FaTiktok, color: '#ffffff' },
        { name: 'Google Partner', Icon: FaGoogle, color: '#4285F4' },
        { name: 'GoDaddy Pro', Icon: FaGlobeAmericas, color: '#1BDBDB' },
        { name: 'Snapchat Marketing', Icon: FaSnapchatGhost, color: '#FFFC00' },
        { name: 'LinkedIn Marketing', Icon: FaLinkedin, color: '#0A66C2' },
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
                        {[...partners, ...partners].map((partner, index) => (
                            <div className="partners__item" key={index}>
                                <div
                                    className="partners__icon"
                                    style={{ borderColor: partner.color + '55', boxShadow: `0 0 20px ${partner.color}20` }}
                                >
                                    <partner.Icon style={{ color: partner.color }} className="partners__icon-svg" />
                                </div>
                                <span className="partners__name">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
