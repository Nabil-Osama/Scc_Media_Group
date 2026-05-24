import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaStore, 
    FaBullhorn, 
    FaUserShield, 
    FaLaptopCode, 
    FaVideo 
} from "react-icons/fa";
import logoImg from "../assets/logo.jpeg";
import "./Preloader.css";

const PRELOAD_STEPS = [
    "جاري تهيئة النظام الرقمي...",
    "فحص بروتوكولات الحماية والملكية الفكرية...",
    "ربط خوادم البرمجة والتسويق...",
    "النظام جاهز تماماً للتشغيل"
];

const STEP_STYLES = [
    {
        gradient: "from-amber-400 via-orange-400 to-red-500",
        glow: "rgba(245, 158, 11, 0.55)",
    },
    {
        gradient: "from-violet-400 via-fuchsia-400 to-purple-500",
        glow: "rgba(139, 92, 246, 0.55)",
    },
    {
        gradient: "from-cyan-400 via-sky-400 to-blue-500",
        glow: "rgba(6, 182, 212, 0.55)",
    },
    {
        gradient: "from-[#4cbbd2] via-[#3ddcd9] via-[#9373ce] to-[#f59e0b]",
        glow: "rgba(76, 187, 210, 0.75)",
    },
];

const services = [
    {
        title: "بيع وشراء الصفحات",
        description: "نقدم أفضل العروض لبيع وشراء الصفحات بأي عدد من المتابعين بأسعار تنافسية وأمان تام",
        icon: FaStore,
        color: "from-amber-500 to-orange-600",
        glowColor: "rgba(245, 158, 11, 0.3)",
    },
    {
        title: "التسويق والإعلانات",
        description: "ماركتينج، بلوجرز، إعلانات ممولة، وإدارة خطط تسويقية كاملة بالتصوير وتوفير كل احتياجاتك",
        icon: FaBullhorn,
        color: "from-indigo-500 to-purple-500",
        glowColor: "rgba(99, 102, 241, 0.3)",
    },
    {
        title: "الملكية الفكرية والأمان",
        description: "تأمين الهوية، حماية الصوت والصورة، استعادة الحسابات، وتقارير شاملة عن جميع منصات التواصل",
        icon: FaUserShield,
        color: "from-pink-500 to-rose-500",
        glowColor: "rgba(236, 72, 153, 0.3)",
    },
    {
        title: "البرمجة والتطوير",
        description: "تصميم صفحات الويب والابلكيشن بطريقة محترفة ورقم 1 في محركات البحث وجوجل",
        icon: FaLaptopCode,
        color: "from-sky-500 to-blue-500",
        glowColor: "rgba(14, 165, 233, 0.3)",
    },
    {
        title: "صناعة المحتوى",
        description: "تصوير سينمائي وإنتاج متكامل، مع تبني وتوفير الإمكانيات لصناع المحتوى الناشئين من الألف للياء",
        icon: FaVideo,
        color: "from-emerald-500 to-teal-500",
        glowColor: "rgba(16, 185, 129, 0.3)",
    }
];

export default function Preloader({ onComplete }) {
    const [showServices, setShowServices] = useState(false);
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        // Show services after a brief initial delay
        const servicesTimer = setTimeout(() => setShowServices(true), 200);
        return () => clearTimeout(servicesTimer);
    }, []);

    useEffect(() => {
        if (!showServices) return;

        const interval = setInterval(() => {
            setActiveServiceIndex((prev) => {
                if (prev < services.length - 1) {
                    const next = prev + 1;
                    
                    // Perfectly sync loading text steps with services index progress
                    if (next === 2) setCurrentStep(1); // فحص الحماية...
                    if (next === 3) setCurrentStep(2); // ربط خوادم البرمجة...
                    if (next === 4) setCurrentStep(3); // النظام جاهز...

                    return next;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        onComplete();
                    }, 400); // Give the user time to appreciate the "SYSTEM READY" state
                    return prev;
                }
            });
        }, 600); // Fluid 600ms timing (totals 3 seconds loading duration)

        return () => clearInterval(interval);
    }, [showServices, onComplete]);

    return (
        <div 
            className="preloader-overlay"
            style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
        >
            {/* LEFT GATE PANEL */}
            <motion.div
                className="preloader-gate preloader-gate--left"
                initial={{ rotateY: 0, x: 0, opacity: 1 }}
                exit={{
                    rotateY: -95,
                    x: "-30%",
                    opacity: 0,
                    transition: { duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.1 },
                }}
            />

            {/* RIGHT GATE PANEL */}
            <motion.div
                className="preloader-gate preloader-gate--right"
                initial={{ rotateY: 0, x: 0, opacity: 1 }}
                exit={{
                    rotateY: 95,
                    x: "30%",
                    opacity: 0,
                    transition: { duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.1 },
                }}
            />

            {/* GLOWING SPLIT LOGO AT THE BOTTOM CENTER (Splits in half in sync with the gates) */}
            <motion.div 
                className="preloader-logo-container"
                exit={{
                    opacity: 0,
                    transition: { duration: 1.0 }
                }}
            >
                <div className="preloader-logo-wrapper">
                    {/* Logo split effect container */}
                    <div className="preloader-logo-core-glow" />
                    <div className="preloader-logo-ring" />
                    <div className="preloader-logo-halves">
                        <motion.div 
                            className="preloader-logo-half preloader-logo-half--left"
                            exit={{
                                x: "-160px",
                                rotate: -15,
                                opacity: 0,
                                transition: { duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.1 }
                            }}
                        >
                            <img src={logoImg} alt="SCC" />
                        </motion.div>
                        <motion.div 
                            className="preloader-logo-half preloader-logo-half--right"
                            exit={{
                                x: "160px",
                                rotate: 15,
                                opacity: 0,
                                transition: { duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.1 }
                            }}
                        >
                            <img src={logoImg} alt="SCC" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* CENTRAL TECH INTERFACE CONTENT */}
            <motion.div
                className="preloader-content"
                initial={{ opacity: 1, scale: 1 }}
                exit={{
                    opacity: 0,
                    scale: 0.85,
                    filter: "blur(12px)",
                    transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1] },
                }}
            >
                {/* Background ambient glow */}
                <div className="preloader-ambient-glow" />

                {/* Cyber grid background */}
                <div className="preloader-cyber-grid" />

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="preloader-badge-container"
                >
                    <span className="preloader-badge">
                        <span className="preloader-badge-dot" />
                        الخدمات الرقمية المتكاملة
                    </span>
                </motion.div>

                {/* Services Single Card Vertical Slider */}
                <div className="preloader-slider-container">
                    <AnimatePresence mode="wait">
                        {showServices && (
                            <motion.div
                                key={activeServiceIndex}
                                initial={{ y: 40, opacity: 0, scale: 0.93 }}
                                animate={{ 
                                    y: 0, 
                                    opacity: 1, 
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 140,
                                        damping: 17,
                                        mass: 0.6,
                                    }
                                }}
                                exit={{ 
                                    y: -40, 
                                    opacity: 0, 
                                    scale: 0.93,
                                    transition: {
                                        duration: 0.22,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="preloader-card"
                            >
                                {/* Radial Glow effect inside card */}
                                <div
                                    className="preloader-card-glow"
                                    style={{
                                        background: `radial-gradient(circle at center, ${services[activeServiceIndex].glowColor}, transparent 75%)`,
                                    }}
                                />

                                {/* Icon container with gradient */}
                                <div className={`preloader-card-icon-wrap bg-gradient-to-br ${services[activeServiceIndex].color}`}>
                                    {(() => {
                                        const Icon = services[activeServiceIndex].icon;
                                        return <Icon className="preloader-card-icon" />;
                                    })()}
                                </div>

                                {/* Title */}
                                <h3 className="preloader-card-title">
                                    {services[activeServiceIndex].title}
                                </h3>

                                {/* Description */}
                                <p className="preloader-card-desc">
                                    {services[activeServiceIndex].description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* System Loading Text + Progress Bar */}
                <div className="preloader-progress-container">
                    <div className="preloader-progress-text-wrap">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ 
                                    y: 0, 
                                    opacity: 1,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                exit={{ 
                                    y: -15, 
                                    opacity: 0,
                                    transition: { duration: 0.2, ease: "easeIn" }
                                }}
                                className={`preloader-step-text bg-gradient-to-r ${STEP_STYLES[currentStep].gradient}`}
                                style={{
                                    filter: `drop-shadow(0 0 16px ${STEP_STYLES[currentStep].glow})`,
                                }}
                            >
                                {PRELOAD_STEPS[currentStep]}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Progress track */}
                    <div className="preloader-progress-track">
                        <motion.div
                            className={`preloader-progress-bar bg-gradient-to-r ${STEP_STYLES[currentStep].gradient}`}
                            style={{
                                boxShadow: `0 0 16px ${STEP_STYLES[currentStep].glow}`,
                            }}
                            animate={{
                                width: `${((activeServiceIndex + 1) / services.length) * 100}%`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 18,
                            }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
