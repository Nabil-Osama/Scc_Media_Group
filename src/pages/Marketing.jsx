import { useTranslation } from 'react-i18next'
import './Marketing.css'

const Marketing = () => {
    const { t } = useTranslation();

    return (
        <div className="creative-page marketing-page">
            <div className="creative-header">
                <div className="header-content">
                    <h1 className="reveal-text">{t('marketingPage.title')}</h1>
                    <p className="fade-up-text">{t('marketingPage.subtitle')}</p>
                </div>
            </div>
            
            <div className="marketing-showcase">
                <div className="showcase-card float-anim delay-1">
                    <div className="img-box">
                        <img src="/images/marketing-ads.png" alt={t('marketingPage.adsTitle')} className="showcase-img" />
                    </div>
                    <div className="card-info">
                        <h2>{t('marketingPage.adsTitle')}</h2>
                        <p>{t('marketingPage.adsDesc')}</p>
                    </div>
                </div>

                <div className="showcase-card float-anim delay-2">
                    <div className="img-box">
                        <img src="/images/marketing-campaign.png" alt={t('marketingPage.campaignTitle')} className="showcase-img" />
                    </div>
                    <div className="card-info">
                        <h2>{t('marketingPage.campaignTitle')}</h2>
                        <p>{t('marketingPage.campaignDesc')}</p>
                    </div>
                </div>

                <div className="showcase-card float-anim delay-3">
                    <div className="img-box">
                        <img src="/images/marketing-influencer.png" alt={t('marketingPage.influencerTitle')} className="showcase-img" />
                    </div>
                    <div className="card-info">
                        <h2>{t('marketingPage.influencerTitle')}</h2>
                        <p>{t('marketingPage.influencerDesc')}</p>
                    </div>
                </div>

                <div className="showcase-card float-anim delay-4">
                    <div className="img-box">
                        <img src="/images/marketing-photo.png" alt={t('marketingPage.photoTitle')} className="showcase-img" />
                    </div>
                    <div className="card-info">
                        <h2>{t('marketingPage.photoTitle')}</h2>
                        <p>{t('marketingPage.photoDesc')}</p>
                    </div>
                </div>
            </div>

            <div className="marketing-bottom-cta">
                <div className="cta-overlay pulse-bg"></div>
                <h2>{t('marketingPage.bottomTitle')}</h2>
                <a href="https://wa.me/201555000436" className="creative-btn" target="_blank" rel="noopener noreferrer">{t('marketingPage.bottomCta')}</a>
            </div>
        </div>
    )
}

export default Marketing
