import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useAnimations'
import './Programming.css'

const Programming = () => {
    const { t } = useTranslation()
    const [seoRef, seoVisible] = useScrollReveal({ threshold: 0.1 })

    return (
        <div className="creative-page prog-page">
            <div className="creative-header">
                <div className="header-content terminal-theme">
                    <h1 className="reveal-text type-effect">{t('programmingPage.title')}</h1>
                    <p className="fade-up-text code-comment">&gt; {t('programmingPage.subtitle')}</p>
                </div>
            </div>

            <div className="prog-container">
                <div className="tech-stack flex-wrap">
                    <span className="tech-item bounce-anim delay-1">React / Next.js</span>
                    <span className="tech-item bounce-anim delay-2">Node.js</span>
                    <span className="tech-item bounce-anim delay-3">React Native</span>
                    <span className="tech-item bounce-anim delay-4">.NET</span>
                    <span className="tech-item bounce-anim delay-5">SEO Mastery</span>
                    <span className="tech-item bounce-anim delay-6">UI / UX</span>
                </div>

                <div className="prog-cards">
                    <div className="prog-card glass-panel fade-in-left">
                        <div className="photo-placeholder code-window">
                            <div className="window-header">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="window-body">
                                <img src="/images/programming-web.png" alt={t('programmingPage.webTitle')} className="prog-img" />
                            </div>
                        </div>
                        <h2>{t('programmingPage.webTitle')}</h2>
                        <p>{t('programmingPage.webDesc')}</p>
                    </div>

                    <div className="prog-card glass-panel fade-in-right">
                        <div className="photo-placeholder mobile-frame">
                            <div className="notch"></div>
                            <div className="screen-content">
                                <img src="/images/programming-mobile.png" alt={t('programmingPage.appTitle')} className="prog-img" />
                            </div>
                        </div>
                        <h2>{t('programmingPage.appTitle')}</h2>
                        <p>{t('programmingPage.appDesc')}</p>
                    </div>
                </div>

                <div
                    className={`seo-banner reveal reveal--scale ${seoVisible ? 'reveal--visible' : ''}`}
                    ref={seoRef}
                >
                    <div className="seo-content">
                        <h2>{t('programmingPage.seoTitle')}</h2>
                        <p>{t('programmingPage.seoDesc')}</p>
                        <a href="https://wa.me/201555000436" className="creative-btn console-btn" target="_blank" rel="noopener noreferrer">console.log("{t('programmingPage.cta')}")</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programming
