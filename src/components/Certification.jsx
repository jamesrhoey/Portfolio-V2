import React, { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaLaptop,
  FaTools,
  FaMobileAlt,
  FaQrcode,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaCogs,
  FaWifi,
  FaServer,
  FaUserCog,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa"

// Do not change these imports (user has these files)
import hardwareBadge from "../assets/image.png"
import cyberBadge from "../assets/I2CS__1_.png"
import iotBadge from "../assets/Intro2IoT.png"
import networkBadge from "../assets/image1.png"
import securityBadge from "../assets/image2.png"

export default function CertificationsSection() {
  const [activeQR, setActiveQR] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const carouselRef = useRef(null)

  const certifications = useMemo(
    () => [
      {
        id: 1,
        title: "Computer Hardware Basics",
        issuer: "Cisco Networking Academy",
        date: "November 17, 2024",
        description:
          "Fundamentals knowledge of computers and mobile devices, including installation, repair, and basic troubleshooting.",
        verification:
          "https://www.credly.com/badges/90182219-0cc0-4f43-b7c8-b588efdaa767",
        badgeImage: hardwareBadge,
        skills: [
          { name: "Device Maintenance", icon: <FaTools size={12} /> },
          { name: "Laptops", icon: <FaLaptop size={12} /> },
          { name: "Mobile Devices", icon: <FaMobileAlt size={12} /> },
        ],
      },
      {
        id: 2,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "July 02, 2024",
        description:
          "Introductory knowledge of cybersecurity including global implications of cyber threats and defense strategies.",
        verification:
          "https://www.credly.com/badges/f8f308bf-2975-46d9-8b09-1f16f6f32e07",
        badgeImage: cyberBadge,
        skills: [
          { name: "Cyber Best Practices", icon: <FaShieldAlt size={12} /> },
          { name: "Network Security", icon: <FaLock size={12} /> },
        ],
      },
      {
        id: 3,
        title: "Introduction to Internet of Things",
        issuer: "Cisco Networking Academy",
        date: "November 18, 2024",
        description:
          "Knowledge of IoT and how it enables Digital Transformation along with emerging technologies.",
        verification:
          "https://www.credly.com/badges/a8639121-f291-463a-8f72-ade8cfaa7e4e",
        badgeImage: iotBadge,
        skills: [
          { name: "Digital Transformation", icon: <FaCogs size={12} /> },
          { name: "Internet of Things", icon: <FaWifi size={12} /> },
        ],
      },
      {
        id: 4,
        title: "Network Addressing and Basic Troubleshooting",
        issuer: "Cisco Networking Academy",
        date: "November 21, 2024",
        description:
          "Knowledge of network layers, IPv6 addressing functions, and troubleshooting skills with Cisco Packet Tracer.",
        verification:
          "https://www.credly.com/badges/6f7306b1-c51c-47d0-aae0-3c9ceed3b0e7",
        badgeImage: networkBadge,
        skills: [
          { name: "Cisco Routers", icon: <FaNetworkWired size={12} /> },
          { name: "IPv6 Addressing", icon: <FaServer size={12} /> },
          { name: "Network Troubleshooting", icon: <FaTools size={12} /> },
        ],
      },
      {
        id: 5,
        title: "Network Support and Security",
        issuer: "Cisco Networking Academy",
        date: "November 19, 2024",
        description:
          "Knowledge to support endpoints, networks, and users including diagnostics and documentation.",
        verification:
          "https://www.credly.com/badges/14801ccb-4fde-4e94-b9cf-e8f9e2a23f06",
        badgeImage: securityBadge,
        skills: [
          { name: "Help Desk", icon: <FaUserCog size={12} /> },
          { name: "Endpoint Devices", icon: <FaLaptop size={12} /> },
          { name: "Documentation", icon: <FaTools size={12} /> },
        ],
      },
    ],
    []
  )

  const toggleQR = (id) => setActiveQR((prev) => (prev === id ? null : id))

  const scrollByAmount = (amount) => {
    const el = carouselRef.current
    if (!el) return
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  const scrollLeft = () => {
    const el = carouselRef.current
    const amount = el ? Math.max(320, Math.min(560, Math.floor(el.clientWidth * 0.8))) : 360
    scrollByAmount(-amount)
  }

  const scrollRight = () => {
    const el = carouselRef.current
    const amount = el ? Math.max(320, Math.min(560, Math.floor(el.clientWidth * 0.8))) : 360
    scrollByAmount(amount)
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      const pct = max > 0 ? el.scrollLeft / max : 0
      setScrollProgress(pct)
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        scrollLeft()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        scrollRight()
      } else if (e.key === "Escape") {
        setActiveQR(null)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const listVariants = {
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
  }

  const MAX_SKILLS = 3

  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-gradient-to-b from-[#0a1120] to-[var(--color-dark)]"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-3">
            <FaCheckCircle className="text-emerald-400" aria-hidden />
            {"Verified Credentials"}
            <span className="mx-1 opacity-50">•</span>
            {certifications.length} badges
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-emerald-300 via-emerald-400 to-purple-300 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            My verified professional credentials
          </p>
        </motion.div>

        <div className="relative">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-[#0a1120] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-[var(--color-dark)] to-transparent" />

          {/* Controls */}
          <div className="hidden md:flex items-center justify-between absolute -top-14 right-0 gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-2 border border-white/10"
            >
              <FaChevronLeft className="text-white" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={scrollRight}
              aria-label="Scroll right"
              className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-2 border border-white/10"
            >
              <FaChevronRight className="text-white" />
            </motion.button>
          </div>

          {/* Carousel */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 py-2 px-1 md:px-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {certifications.map((cert) => {
              const visibleSkills = cert.skills.slice(0, MAX_SKILLS)
              const extraSkills = cert.skills.length - visibleSkills.length

              return (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative flex-shrink-0 w-80 md:w-[22rem] rounded-2xl p-[1px]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {/* Animated gradient ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    aria-hidden
                    animate={{
                      background: [
                        "radial-gradient(120px 80px at 10% 10%, rgba(16,185,129,0.35), transparent 60%)",
                        "radial-gradient(120px 80px at 90% 30%, rgba(168,85,247,0.35), transparent 60%)",
                        "radial-gradient(120px 80px at 40% 90%, rgba(16,185,129,0.35), transparent 60%)",
                      ],
                    }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                  />
                  {/* Card body */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_10px_30px_rgba(0,0,0,0.3)]
                               h-[18rem] md:h-[19.5rem] flex flex-col"
                  >
                    {/* Accent highlight line */}
                    <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <img
                        src={cert.badgeImage || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-16 h-16 object-contain rounded border border-white/10 bg-white/5"
                      />
                      <div className="flex-grow min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3
                              className="font-bold leading-snug text-white"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                              title={cert.title}
                            >
                              {cert.title}
                            </h3>
                            <p className="text-sm text-white/70 truncate" title={cert.issuer}>
                              {cert.issuer}
                            </p>
                          </div>
                          <span className="text-[10px] inline-flex items-center gap-1 bg-emerald-400/10 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/20 whitespace-nowrap">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300" />
                            </span>
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-3">
                      <p
                        className="text-sm text-white/80"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                        title={cert.description}
                      >
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {visibleSkills.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ y: -2 }}
                            className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center gap-1 text-white/90 max-w-[9rem] overflow-hidden text-ellipsis whitespace-nowrap"
                            title={typeof skill === "string" ? skill : skill.name}
                          >
                            {skill.icon}
                            {skill.name}
                          </motion.span>
                        ))}
                        {extraSkills > 0 && (
                          <span className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10 text-white/70 whitespace-nowrap">
                            +{extraSkills} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer pinned to bottom */}
                    <div className="mt-auto pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-white/60">{cert.date}</span>
                      <div className="flex items-center gap-3">
                        <motion.a
                          href={cert.verification}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs flex items-center gap-1 hover:text-[var(--color-primary)]"
                          whileHover={{ scale: 1.05 }}
                        >
                          <FaExternalLinkAlt size={12} /> View
                        </motion.a>

                        <div className="relative">
                          <motion.button
                            onClick={() => toggleQR(cert.id)}
                            className="text-xs flex items-center gap-1 hover:text-[var(--color-primary)]"
                            whileHover={{ scale: 1.05 }}
                            aria-expanded={activeQR === cert.id}
                            aria-controls={`qr-${cert.id}`}
                          >
                            <FaQrcode size={12} /> Verify
                          </motion.button>

                          <AnimatePresence>
                            {activeQR === cert.id && (
                              <motion.div
                                id={`qr-${cert.id}`}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                className="absolute bottom-full right-0 mb-2 p-3 bg-white rounded-xl shadow-xl z-10 w-[160px]"
                              >
                                <img
                                  src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                                    cert.verification
                                  )}`}
                                  alt="QR Code"
                                  className="w-full h-auto rounded"
                                />
                                <p className="text-xs text-black mt-2 text-center">Scan to verify</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Hover glow */}
                  <AnimatePresence>
                    {hoveredCard === cert.id && (
                      <motion.div
                        aria-hidden
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.12 }}
                        exit={{ opacity: 0 }}
                        className="pointer-events-none absolute -inset-3 rounded-3xl bg-emerald-400 blur-2xl"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Desktop nav buttons (sticky middle) */}
          <button
            onClick={scrollLeft}
            aria-label="Previous"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-purple-400"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {certifications.map((_, i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full bg-white/30"
                onClick={() => {
                  if (!carouselRef.current) return
                  const targetLeft = i * 320
                  carouselRef.current.scrollTo({ left: targetLeft, behavior: "smooth" })
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
