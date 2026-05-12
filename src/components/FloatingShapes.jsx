import { useRef } from 'react'
import { useGsapAnimations } from '../hooks/useGsapAnimations'
import './FloatingShapes.css'

const FloatingShapes = () => {
    const containerRef = useRef(null)
    const { useParallax } = useGsapAnimations()
    
    useParallax(containerRef, 0.2)

    return (
        <div className="floating-shapes" aria-hidden="true" ref={containerRef}>
            <div className="floating-shapes__circle floating-shapes__circle--1"></div>
            <div className="floating-shapes__circle floating-shapes__circle--2"></div>
            <div className="floating-shapes__circle floating-shapes__circle--3"></div>
            <div className="floating-shapes__triangle floating-shapes__triangle--1"></div>
            <div className="floating-shapes__triangle floating-shapes__triangle--2"></div>
            <div className="floating-shapes__triangle floating-shapes__triangle--3"></div>
            <div className="floating-shapes__dot floating-shapes__dot--1"></div>
            <div className="floating-shapes__dot floating-shapes__dot--2"></div>
            <div className="floating-shapes__dot floating-shapes__dot--3"></div>
            <div className="floating-shapes__dot floating-shapes__dot--4"></div>
            <div className="floating-shapes__square floating-shapes__square--1"></div>
            <div className="floating-shapes__square floating-shapes__square--2"></div>
        </div>
    )
}

export default FloatingShapes
