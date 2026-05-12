import { useTranslation } from 'react-i18next'
import './ContentProduction.css'

const ContentProduction = () => {
    const { t } = useTranslation()

    return (
        <div className="creative-page content-page">
            <div className="creative-header">
                <div className="header-content">
                    <h1 className="reveal-text gradient-gold">{t('contentProductionPage.title')}</h1>
                    <p className="fade-up-text text-light">{t('contentProductionPage.subtitle')}</p>
                </div>
            </div>

            <div className="content-stages">
                <div className="stage-card reveal-left">
                    <div className="stage-icon">
                        <img src="/images/script-writing.png" alt="" />
                    </div>
                    <div className="stage-info">
                        <h2>{t('contentProductionPage.ideasTitle')}</h2>
                        <p>{t('contentProductionPage.ideasDesc')}</p>
                    </div>
                </div>

                <div className="stage-card reveal-top">
                    <div className="stage-icon">
                        <img src="/images/production-studio.png" alt="" />
                    </div>
                    <div className="stage-info">
                        <h2>{t('contentProductionPage.productionTitle')}</h2>
                        <p>{t('contentProductionPage.productionDesc')}</p>
                    </div>
                </div>

                <div className="stage-card reveal-right">
                    <div className="stage-icon">
                        <img src="/images/creator-growth.png" alt="" />
                    </div>
                    <div className="stage-info">
                        <h2>{t('contentProductionPage.empowerTitle')}</h2>
                        <p>{t('contentProductionPage.empowerDesc')}</p>
                    </div>
                </div>
            </div>

            <div className="media-gallery">
                <h2 className="gallery-title fade-up-text">{t('contentProductionPage.galleryTitle')}</h2>
                <div className="gallery-grid">
                    {/* First Large Image - Occupies Top Left 2x2 */}
                    <div className="gallery-item clip-anim col-span-2 row-span-2">
                        <div className="photo-placeholder">
                            <img src="/images/content-brainstorm.png" alt={t('contentProductionPage.placeholders.brainstorm')} className="gallery-img" />
                        </div>
                    </div>

                    {/* Vertical Image - Occupies Right Side 1x3 */}
                    <div className="gallery-item clip-anim delay-1 row-span-3">
                        <div className="photo-placeholder vertical">
                            <img src="/images/content-creator.png" alt={t('contentProductionPage.placeholders.creator')} className="gallery-img" />
                        </div>
                    </div>

                    {/* Studio Image - Top Right 1x1 */}
                    <div className="gallery-item clip-anim delay-2">
                        <div className="photo-placeholder">
                            <img src="/images/content-studio.png" alt={t('contentProductionPage.placeholders.studio')} className="gallery-img" />
                        </div>
                    </div>

                    {/* Equipment Image - Middle Right 1x1 */}
                    <div className="gallery-item clip-anim delay-3">
                        <div className="photo-placeholder">
                            <img src="/images/content-equipment.png" alt={t('contentProductionPage.placeholders.equipment')} className="gallery-img" />
                        </div>
                    </div>

                    {/* Two small images horizontally under the first large image (Row 3, Col 1 & 2) */}
                    <div className="gallery-item clip-anim delay-4">
                        <div className="photo-placeholder">
                            <img src="/images/media-small-1.png" alt="" className="gallery-img" />
                        </div>
                    </div>
                    <div className="gallery-item clip-anim delay-5">
                        <div className="photo-placeholder">
                            <img src="/images/media-small-2.png" alt="" className="gallery-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="join-crew">
                <div className="join-bg pan-anim"></div>
                <div className="join-content">
                    <h2>{t('contentProductionPage.bottomTitle')}</h2>
                    <p>{t('contentProductionPage.bottomSubtitle')}</p>
                    <a href="https://wa.me/201555000436" className="creative-btn gold-btn" target="_blank" rel="noopener noreferrer">{t('contentProductionPage.bottomCta')}</a>
                </div>
            </div>
        </div>
    )
}

export default ContentProduction
