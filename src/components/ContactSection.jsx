import { useRef } from 'react'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import './ContactSection.css'

const WHATSAPP_NUMBER = '201555000436'
const EMAIL = 'info@sccmediagroup.com'

const ContactSection = () => {
    const { t } = useTranslation()
    const containerRef = useRef(null)
    const cardRef = useRef(null)
    const ctaRef = useRef(null)
    const { useStaggerReveal, useMagneticButton } = useGsapAnimations()

    // Initialize Animations
    useStaggerReveal(containerRef, '.contact-section__item')
    useMagneticButton(ctaRef)

    return (
        <section className="contact-section" id="contact" ref={containerRef}>
            <div className="contact-section__header">
                <h2 className="contact-section__title">{t('contactSection.title')}</h2>
            </div>

            <div className="contact-section__card" ref={cardRef}>
                {/* Manager */}
                <div className="contact-section__item">
                    <div className="contact-section__info">
                        <span className="contact-section__label">{t('contactSection.managerLabel')}</span>
                        <span className="contact-section__value">{t('contactSection.managerName')}</span>
                    </div>
                    <div className="contact-section__manager-icon pulse-glow">M</div>
                </div>

                {/* WhatsApp */}
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="contact-section__item contact-section__item--link">
                    <div className="contact-section__info">
                        <span className="contact-section__label">{t('contactSection.whatsappLabel')}</span>
                        <span className="contact-section__value" dir="ltr">01555000436</span>
                    </div>
                    <div className="contact-section__icon-wrap">
                        <FaWhatsapp />
                    </div>
                </a>

                {/* Email */}
                <a href={`mailto:${EMAIL}`} className="contact-section__item contact-section__item--link">
                    <div className="contact-section__info">
                        <span className="contact-section__label">{t('contactSection.emailLabel')}</span>
                        <span className="contact-section__value">info@sccmediagroup.com</span>
                    </div>
                    <div className="contact-section__icon-wrap">
                        <FaEnvelope />
                    </div>
                </a>

                {/* Location */}
                <a href="https://maps.google.com/?q=طنطا+مصر" target="_blank" rel="noopener noreferrer" className="contact-section__item contact-section__item--link">
                    <div className="contact-section__info">
                        <span className="contact-section__label">{t('contactSection.locationLabel')}</span>
                        <span className="contact-section__value">{t('contactSection.locationValue')}</span>
                    </div>
                    <div className="contact-section__icon-wrap">
                        <FaMapMarkerAlt />
                    </div>
                </a>

                {/* CTA Button */}
                <div className="contact-section__cta-wrap">
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        className="contact-section__cta ripple-effect"
                        target="_blank"
                        rel="noopener noreferrer"
                        ref={ctaRef}
                    >
                        <FaWhatsapp />
                        {t('contactSection.ctaButton')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
