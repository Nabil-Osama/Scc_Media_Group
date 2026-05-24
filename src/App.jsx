import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import './App.css'

// Lazy loaded pages for code splitting and performance optimization
const Home = lazy(() => import('./pages/Home'))
const PageTrade = lazy(() => import('./pages/PageTrade'))
const Marketing = lazy(() => import('./pages/Marketing'))
const IntellectualProperty = lazy(() => import('./pages/IntellectualProperty'))
const Programming = lazy(() => import('./pages/Programming'))
const ContentProduction = lazy(() => import('./pages/ContentProduction'))

function App() {
    const { i18n } = useTranslation();
    const [loading, setLoading] = useState(() => {
        // Only run preloader once per browser session
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem('scc_preloader_seen') !== 'true';
        }
        return true;
    });

    useEffect(() => {
        const dir = i18n.dir();
        document.documentElement.dir = dir;
        document.documentElement.lang = i18n.language;
    }, [i18n, i18n.language]);

    useEffect(() => {
        if (loading) {
            document.body.classList.add('loading-lock');
        } else {
            document.body.classList.remove('loading-lock');
        }
        return () => document.body.classList.remove('loading-lock');
    }, [loading]);

    return (
        <Router>
            <ScrollToTop />
            <AnimatePresence mode="wait">
                {loading && (
                    <Preloader onComplete={() => {
                        if (typeof window !== 'undefined') {
                            sessionStorage.setItem('scc_preloader_seen', 'true');
                        }
                        setLoading(false);
                    }} />
                )}
            </AnimatePresence>
            <div className="app">
                <FloatingShapes />
                <Navbar />
                <main>
                    <Suspense fallback={<div className="route-loader" />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/page-trade" element={<PageTrade />} />
                            <Route path="/marketing" element={<Marketing />} />
                            <Route path="/intellectual-property" element={<IntellectualProperty />} />
                            <Route path="/programming" element={<Programming />} />
                            <Route path="/content-production" element={<ContentProduction />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
