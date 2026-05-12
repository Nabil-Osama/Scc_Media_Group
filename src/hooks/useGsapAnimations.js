import { useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {


    // Entrance animation for Hero sections
    const useHeroAnimation = (containerRef, textRef, visualRef) => {
        useLayoutEffect(() => {
            if (!containerRef.current) return;
            
            const ctx = gsap.context(() => {
                const tl = gsap.timeline();
                
                tl.fromTo(textRef.current, 
                    { opacity: 0, x: -50 }, 
                    { opacity: 1, x: 0, duration: 1, ease: 'power4.out' }
                )
                .fromTo(visualRef.current, 
                    { opacity: 0, scale: 0.8 }, 
                    { opacity: 1, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.5)' },
                    '-=0.5'
                );
            }, containerRef);
            
            return () => ctx.revert();
        }, [containerRef, textRef, visualRef]);
    };

    // Staggered reveal for grid items
    const useStaggerReveal = (containerRef, itemSelector) => {
        useLayoutEffect(() => {
            if (!containerRef.current) return;

            const ctx = gsap.context(() => {
                gsap.fromTo(itemSelector, 
                    { opacity: 0, y: 30 }, 
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 0.8, 
                        stagger: 0.1, 
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            }, containerRef);
            
            return () => ctx.revert();
        }, [containerRef, itemSelector]);
    };

    // Parallax effect for floating elements
    const useParallax = (targetRef, speed = 0.5) => {
        useLayoutEffect(() => {
            if (!targetRef.current) return;

            gsap.to(targetRef.current, {
                y: (i, el) => -ScrollTrigger.maxScroll(window) * speed,
                ease: "none",
                scrollTrigger: {
                    trigger: targetRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, [targetRef, speed]);
    };

    // Magnetic effect for buttons
    const useMagneticButton = (buttonRef) => {
        useEffect(() => {
            const button = buttonRef.current;
            if (!button) return;

            const moveButton = (e) => {
                const { clientX, clientY } = e;
                const { left, top, width, height } = button.getBoundingClientRect();
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);

                gsap.to(button, {
                    x: x * 0.4,
                    y: y * 0.4,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            };

            const resetButton = () => {
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: 'elastic.out(1, 0.3)'
                });
            };

            button.addEventListener('mousemove', moveButton);
            button.addEventListener('mouseleave', resetButton);

            return () => {
                button.removeEventListener('mousemove', moveButton);
                button.removeEventListener('mouseleave', resetButton);
            };
        }, [buttonRef]);
    };

    return { useHeroAnimation, useStaggerReveal, useMagneticButton, useParallax };
};
