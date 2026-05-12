import { useTranslation } from 'react-i18next'
import './IntellectualProperty.css'

const IntellectualProperty = () => {
    const { t } = useTranslation()

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
                <div className="ip-feature slide-up-anim">
                    <div className="feature-icon hologram-placeholder">
                        <img src="/images/ip-identity.png" alt={t('intellectualPropertyPage.identityTitle')} className="ip-img" />
                    </div>
                    <div className="feature-text">
                        <h3>{t('intellectualPropertyPage.identityTitle')}</h3>
                        <p>{t('intellectualPropertyPage.identityDesc')}</p>
                    </div>
                </div>

                <div className="ip-feature reverse slide-up-anim delay-05">
                    <div className="feature-icon hologram-placeholder">
                        <img src="/images/ip-copyright.png" alt={t('intellectualPropertyPage.copyrightTitle')} className="ip-img" />
                    </div>
                    <div className="feature-text">
                        <h3>{t('intellectualPropertyPage.copyrightTitle')}</h3>
                        <p>{t('intellectualPropertyPage.copyrightDesc')}</p>
                    </div>
                </div>

                <div className="ip-feature slide-up-anim delay-1">
                    <div className="feature-icon hologram-placeholder">
                        <img src="/images/ip-recovery.png" alt={t('intellectualPropertyPage.recoveryTitle')} className="ip-img" />
                    </div>
                    <div className="feature-text">
                        <h3>{t('intellectualPropertyPage.recoveryTitle')}</h3>
                        <p>{t('intellectualPropertyPage.recoveryDesc')}</p>
                    </div>
                </div>

                <div className="ip-feature reverse slide-up-anim delay-15">
                    <div className="feature-icon hologram-placeholder">
                        <img src="/images/ip-reports.png" alt={t('intellectualPropertyPage.reportsTitle')} className="ip-img" />
                    </div>
                    <div className="feature-text">
                        <h3>{t('intellectualPropertyPage.reportsTitle')}</h3>
                        <p>{t('intellectualPropertyPage.reportsDesc')}</p>
                    </div>
                </div>
            </div>

            <div className="ip-shield-banner">
                <div className="shield-icon pulse">🛡️</div>
                <h2>{t('intellectualPropertyPage.bottomTitle')}</h2>
                <a href="https://wa.me/201555000436" className="creative-btn" target="_blank" rel="noopener noreferrer">{t('intellectualPropertyPage.bottomCta')}</a>
            </div>
        </div>
    )
}

export default IntellectualProperty
