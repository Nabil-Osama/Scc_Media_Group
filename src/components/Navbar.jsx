import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import logoImg from '../assets/logo.jpeg'
import './Navbar.css'

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const logoRef = useRef(null)
    
    const { useMagneticButton } = useGsapAnimations()
    useMagneticButton(logoRef)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: t('home') },
        { path: '/page-trade', label: t('pageTrade') },
        { path: '/marketing', label: t('marketing') },
        { path: '/intellectual-property', label: t('intellectualProperty') },
        { path: '/programming', label: t('programming') },
        { path: '/content-production', label: t('contentProduction') },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <Link to="/" className="navbar__logo" ref={logoRef}>
                    <img src={logoImg} alt="SCC Media Group Logo" className="navbar__logo-img" />
                </Link>

                <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className="navbar__toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
