import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingShapes from './components/FloatingShapes'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PageTrade from './pages/PageTrade'
import Marketing from './pages/Marketing'
import IntellectualProperty from './pages/IntellectualProperty'
import Programming from './pages/Programming'
import ContentProduction from './pages/ContentProduction'
import './App.css'

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const dir = i18n.dir();
        document.documentElement.dir = dir;
        document.documentElement.lang = i18n.language;
    }, [i18n, i18n.language]);

    return (
        <Router>
            <ScrollToTop />
            <div className="app">
                <FloatingShapes />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/page-trade" element={<PageTrade />} />
                        <Route path="/marketing" element={<Marketing />} />
                        <Route path="/intellectual-property" element={<IntellectualProperty />} />
                        <Route path="/programming" element={<Programming />} />
                        <Route path="/content-production" element={<ContentProduction />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
