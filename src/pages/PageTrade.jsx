import { useTranslation } from 'react-i18next'
import './PageTrade.css'

const PageTrade = () => {
    const { t } = useTranslation();

    return (
        <div className="creative-page page-trade">
            <div className="creative-header">
                <div className="header-content">
                    <h1 className="reveal-text">{t('pageTradePage.title')}</h1>
                    <p className="fade-up-text">{t('pageTradePage.subtitle')}</p>
                </div>
            </div>
            
            <div className="creative-grid">
                <div className="grid-item slide-in-left">
                    <div className="photo-placeholder">
                        <img src="/images/trade-million.png" alt={t('pageTradePage.millionTitle')} className="trade-img" />
                    </div>
                    <div className="item-details">
                        <h3>{t('pageTradePage.millionTitle')}</h3>
                        <p>{t('pageTradePage.millionDesc')}</p>
                    </div>
                </div>

                <div className="grid-item slide-in-bottom delay-1">
                    <div className="photo-placeholder">
                        <img src="/images/trade-protection.png" alt={t('pageTradePage.protectionTitle')} className="trade-img" />
                    </div>
                    <div className="item-details">
                        <h3>{t('pageTradePage.protectionTitle')}</h3>
                        <p>{t('pageTradePage.protectionDesc')}</p>
                    </div>
                </div>

                <div className="grid-item slide-in-right delay-2">
                    <div className="photo-placeholder">
                        <img src="/images/trade-support.png" alt={t('pageTradePage.supportTitle')} className="trade-img" />
                    </div>
                    <div className="item-details">
                        <h3>{t('pageTradePage.supportTitle')}</h3>
                        <p>{t('pageTradePage.supportDesc')}</p>
                    </div>
                </div>
            </div>
            
            <div className="creative-banner scale-up">
                <h2>{t('pageTradePage.bottomTitle')}</h2>
                <a href="https://wa.me/201555000436" className="creative-btn" target="_blank" rel="noopener noreferrer">{t('pageTradePage.bottomCta')}</a>
            </div>
        </div>
    )
}

export default PageTrade
