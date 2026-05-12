import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import logoImg from '../assets/logo.jpeg'
import './Footer.css'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="footer" id="contact">
            <div className="footer__wave">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,40 C360,120 720,0 1080,80 C1260,110 1440,60 1440,60 L1440,0 L0,0 Z" fill="var(--deep-blue-darker)"></path>
                </svg>
            </div>

            <div className="footer__container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src={logoImg} alt="SCC Media Group" className="footer__logo-img" />
                        </div>
                        <p className="footer__brand-desc">
                            {t('footer.brandDesc')}
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="footer__social" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" className="footer__social" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" className="footer__social" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="#" className="footer__social" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" className="footer__social" aria-label="TikTok"><FaTiktok /></a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footer__section">
                        <h3 className="footer__section-title">{t('footer.contact.title')}</h3>
                        <ul className="footer__contact-list">
                            <li className="footer__contact-item">
                                <FaEnvelope className="footer__contact-icon" />
                                <a href="mailto:info@sccmediagroup.com">info@sccmediagroup.com</a>
                            </li>
                            <li className="footer__contact-item">
                                <FaPhone className="footer__contact-icon" />
                                <a href="tel:+201555000436" dir="ltr">01555000436</a>
                            </li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div className="footer__section">
                        <h3 className="footer__section-title">{t('footer.address.title')}</h3>
                        <div className="footer__address">
                            <FaMapMarkerAlt className="footer__contact-icon" />
                            <p>طنطا — مصر</p>
                        </div>
                    </div>

                </div>

                <div className="footer__bottom">
                    <p>
                        {t('footer.copyrightText')}
                    </p>
                    <p className="footer__copyright">{t('footer.copyrightYears')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
