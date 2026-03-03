"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import Typography from "@/components/Typography"
import ProblemSolutionBlock from "@/components/sections/ProblemSolutionBlock"

import { caseStudies } from "@/data/caseStudies"
import { panels } from "@/data/panels"
import { partners, partnerRows } from "@/data/partners"
import { hero, featureRows, experiences } from "@/config/section-layouts"

/* ================= SECTION DIVIDERS ================= */

function SectionDivider() {
  return (
    <div className="w-full py-20 bg-background-900">
      <div className="max-w-300 mx-auto px-10">
        <div className="h-px bg-white/5" />
      </div>
    </div>
  )
}

function SectionDividerWithCurve() {
  return (
    <div className="relative py-8 md:py-29 z-10">
      <div className="max-w-300 mx-auto px-10">
        <div className="h-px bg-white/5" />
      </div>
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none opacity-60"
        width="1180"
        height="320"
        viewBox="0 0 1400 220"
        fill="none"
      >
        <path
          d="M0 180 C 350 20, 1050 20, 1400 180"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

/* ================= SCROLL REVEAL ================= */

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView] as const
}

function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  style: sx,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : `translateY(${y}px)`,
      transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...sx,
    }}>
      {children}
    </div>
  )
}

/* ================= DESKTOP DETECTION (animation only) ================= */

function useIsDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)")
    const handler = () => setDesktop(mql.matches)
    handler()
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])
  return desktop
}

/* ================= HOME ================= */

export default function Home() {

  return (
    <main className="text-white">

      {/* ================= HERO ================= */}
      <section className={`relative ${hero.section} text-white`}>

        {/* Background video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-[1.05] brightness-100 contrast-90"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* TOP FADE */}
        <div
          className={`absolute top-0 left-0 right-0 ${hero.fadeTop} pointer-events-none`}
          style={{
            background: `linear-gradient(to bottom,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.80) 15%,
              rgba(0,0,0,0.70) 30%,
              rgba(0,0,0,0.60) 45%,
              rgba(0,0,0,0.50) 60%,
              rgba(0,0,0,0.40) 72%,
              rgba(0,0,0,0.30) 82%,
              transparent 100%
            )`
          }}
        />

        {/* BOTTOM FADE */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[38vh] pointer-events-none"
          style={{
            background: `linear-gradient(to top,
              rgba(0,0,0,0.9) 0%,
              rgba(0,0,0,0.6) 35%,
              rgba(0,0,0,0.25) 65%,
              transparent 100%
            )`
          }}
        />

        {/* Bottom melt into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent 0%, var(--color-background-900) 100%)" }}
        />

        {/* ================= NAVIGATION — MOBILE ================= */}
        <div className={`${hero.nav.mobile} md:hidden`}>
          <div className="flex items-center justify-between">
            <Image
              src="/atrium-logo.svg"
              alt="Atrium"
              width={80}
              height={20}
              className="h-5 w-auto"
            />
            <div className="flex items-center gap-3">
              <div className="relative inline-block group">
                <div
                  className="absolute inset-0 translate-x-0.75 translate-y-0.75 rounded-lg"
                  style={{ background: "#059669" }}
                />
                <button
                  className="relative px-4 py-2 text-[14px] font-medium rounded-lg text-black transition-all duration-150 group-hover:translate-x-px group-hover:translate-y-px"
                  style={{ background: "#BFF3DA", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
                >
                  Work with us
                </button>
              </div>
              <button className="flex flex-col gap-1 p-1" aria-label="Open menu">
                <span className="w-6 h-0.5 bg-white block" />
                <span className="w-6 h-0.5 bg-white block" />
                <span className="w-6 h-0.5 bg-white block" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION — DESKTOP ================= */}
        <div className={`hidden md:block ${hero.nav.desktop}`}>
          <div className="w-full h-12 px-4 md:px-6 flex items-center justify-between rounded-xl bg-black/70 backdrop-blur-sm border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">

            <div className="flex items-center">
              <Image
                src="/atrium-logo.svg"
                alt="Atrium"
                width={80}
                height={20}
                className="h-[20px] w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-6 md:gap-8 text-[15px] text-white/70">
              <span className="hidden md:inline hover:text-white transition cursor-pointer">
                About us
              </span>

              <div className="relative inline-block group">
                <div
                  className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl"
                  style={{ background: "#059669" }}
                />
                <div
                  className="relative px-5 py-2 rounded-xl text-[15px] font-medium text-black transition-all duration-150 group-hover:translate-x-px group-hover:translate-y-px"
                  style={{ background: "#BFF3DA", boxShadow: "0 6px 14px rgba(0,0,0,0.25)" }}
                >
                  Work with us
                  <div className="absolute inset-0 rounded-xl border border-white/40 opacity-30 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= HERO CONTENT — MOBILE ================= */}
        <div className={`relative z-10 flex flex-col justify-start ${hero.content.mobile} md:hidden`}>
          <h1 className={hero.heading.mobile}>
            BUILDING EXPERTISE
            <br />
            THROUGH{" "}
            <span className="text-primary-600">EDUCATION</span>
          </h1>
          <div className={hero.subtext.mobile}>
            <p className="text-[20px] font-medium text-white leading-snug">
              Turns practitioners Into Experts
            </p>
            <p className="text-[17px] text-white/75 leading-relaxed max-w-90">
              An education studio building programs that turn practitioners into experts.
              We drive adoption, retention, and scale for our partners.
            </p>
          </div>
        </div>

        {/* ================= HERO CONTENT — DESKTOP ================= */}
        <div className={`hidden md:block relative z-10 ${hero.content.desktop}`}>

          <h1 className={hero.heading.desktop}>
            BUILDING EXPERTISE
            <br />
            THROUGH{" "}
            <span style={{ color: "var(--color-primary-600)" }}>EDUCATION</span>
          </h1>

          <div className={hero.subtext.desktop}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 text-left">
              <p className="text-[17px] md:text-[20px] text-white/85 leading-snug font-medium">
                Turns practitioners
                <br />
                Into Experts
              </p>
              <p className="text-[15px] md:text-[17px] text-white/75 leading-relaxed">
                An education studio building programs that turn practitioners into experts.
                We drive adoption, retention, and scale for our partners.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= FEATURE ROWS ================= */}
      <Section className={featureRows.section}>
        <Container>

          <Reveal>
          <h3 className={featureRows.heading}>
            <span className="text-white">We Solve Business Problems</span>
            <br className="md:hidden" />
            <span className="hidden md:inline">{" "}</span>
            <span style={{ color: "var(--color-primary-600)" }}>Through Education</span>
          </h3>
          </Reveal>

          <div className={featureRows.list}>

            <Reveal>
            <ProblemSolutionBlock
              image="/Product_Activation.jpg"
              bullet={'You\'ve built something powerful, but users don\'t reach the "aha" moment fast enough to stick.'}
              title="Product Activation"
              description="Create structured education pipelines that guide users from onboarding to mastery—driving real adoption, retention, and measurable growth."
              floatingCard={{
                image: "/Product_Activation.jpg",
                text: "Software company with a complex product that needs customer education driving actual usage",
                anchor: "top-left",
              }}
            />
            </Reveal>

            <SectionDivider />

            <Reveal>
            <ProblemSolutionBlock
              reverse
              image="/Developer_Adoption.jpg"
              bullet="Developers are interested, but learning curves and unclear entry points stop real building from happening."
              title="Developer Adoption"
              description="Design educational journeys that reduce friction, accelerate onboarding, and transform curiosity into active builders and ecosystem growth."
              floatingCard={{
                image: "/Developer_Adoption.jpg",
                text: "Protocol launching a major feature and seeking rapid adoption.",
                anchor: "bottom-right",
              }}
            />
            </Reveal>

            <SectionDivider />

            <Reveal>
            <ProblemSolutionBlock
              image="/Go-To-Market.jpg"
              bullet="You're launching something valuable, but education isn't converting attention into sustained growth."
              title="Go-To-Market"
              description="Use education as a growth engine—aligning launch strategy, adoption, and long-term market expansion."
              floatingCard={{
                image: "/Go-To-Market.jpg",
                text: "Education business looking to scale products or hand them off entirely",
                anchor: "center-right",
              }}
            />
            </Reveal>

            <SectionDivider />

            <Reveal>
            <ProblemSolutionBlock
              reverse
              image="/Talent_Network.jpg"
              bullet="You need founders, operators, or builders—but there's no scalable way to find, train, and surface the right ones."
              title="Talent Network"
              description="Build structured ecosystems that connect learning pathways with real-world opportunity and long-term practitioner growth."
              floatingCard={{
                image: "/Talent_Network.jpg",
                text: "VC firm looking to build an accelerator to support portfolio companies",
                anchor: "lower-right",
              }}
            />
            </Reveal>

            <SectionDividerWithCurve />

          </div>
        </Container>
      </Section>


      {/* ================= EXPERIENCES ORNAMENTAL ================= */}
      <section className={experiences.section}>

        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background-900 to-transparent pointer-events-none" />

        <div
          className={`absolute bottom-0 left-0 right-0 ${experiences.fadeBot} pointer-events-none z-10`}
          style={{
            background: `linear-gradient(
              to top,
              var(--color-background-900) 0%,
              rgba(13,13,12,0.95) 8%,
              rgba(13,13,12,0.85) 16%,
              rgba(13,13,12,0.65) 24%,
              rgba(13,13,12,0.40) 32%,
              transparent 100%
            )`
          }}
        />

        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <Image
            src="/experiences-ornament.png"
            alt=""
            width={1100}
            height={600}
            quality={90}
            className={experiences.bgImage}
          />
        </div>

        <div className="relative z-10 max-w-390 mx-auto px-8 md:px-10 text-center">

          <Reveal>
          <div className={`${experiences.chips} mb-8 md:mb-12`}>
            {/* Mobile: row 1 solo / Desktop: flows inline with the rest */}
            <div className="basis-full md:basis-auto flex justify-center">
              <span className={experiences.chip}>Bootcamps</span>
            </div>
            {["Workshops", "Courses", "Accelerators"].map((item) => (
              <span key={item} className={experiences.chip}>
                {item}
              </span>
            ))}
          </div>
          </Reveal>

          <Reveal delay={100}>
          <h3 className={experiences.heading}>
            Experiences we build
            <br />
            with you
          </h3>
          </Reveal>

          <Reveal delay={180}>
          <div className={experiences.chips}>
            {["Subscriptions", "Communities", "Fellowships"].map((item) => (
              <span key={item} className={experiences.chip}>
                {item}
              </span>
            ))}
          </div>
          </Reveal>

        </div>
      </section>


      {/* ================= STACKED CASE STUDIES ================= */}

      {(() => {

        const total = caseStudies.length
        const offset = 78
        const totalOffset = offset * (total - 1)

        const isDesktop = useIsDesktop()
        const [activeIndex, setActiveIndex] = useState(0)
        const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

        const goTo = (index: number) => {
          setActiveIndex(index)
          if (!isDesktop) return
          if (intervalRef.current) clearInterval(intervalRef.current)
          intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % total)
          }, 10000)
        }

        useEffect(() => {
          if (!isDesktop) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            return
          }
          intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % total)
          }, 10000)
          return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
          }
        }, [isDesktop])

        return (
          <section className="relative pt-20 md:pt-40 pb-20 md:pb-10 bg-background-900 overflow-hidden">
            <div className="max-w-300 mx-auto px-5 md:px-10">

              <Reveal>
              <div className="text-center mb-16 max-w-190 mx-auto">
                <h5 className="text-[20px] font-medium leading-normal text-white/90">
                  Category defining programs,
                  <br />
                  built to world-class standards
                </h5>
              </div>
              </Reveal>

              {/* ================= MOBILE: Full-bleed peek carousel ================= */}
              {/* -mx-4 undoes outer px-4 → carousel reaches screen edges.           */}
              {/* No overflow-hidden here — the parent <section> already has it.      */}
              <div className="md:hidden -mx-5">

                {/* Track: paddingLeft creates left breathing space from screen edge */}
                <div
                  className="flex transition-transform duration-600"
                  style={{
                    paddingLeft: "1.25rem",
                    transform: `translateX(calc(-${activeIndex} * (82vw + 1rem)))`,
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {caseStudies.map((item) => (
                    /* R2: flex flex-col so card fills track's cross-axis height */
                    <div
                      key={item.id}
                      className="shrink-0 mr-4 flex flex-col"
                      style={{ width: "82vw" }}
                    >
                      {/* R1: outer p-3 creates spacing between border frame and image */}
                      {/* R2: flex flex-col flex-1 so card stretches to match tallest sibling */}
                      <div className="p-3 rounded-2xl bg-surface-900 border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.55)] flex flex-col flex-1">

                        {/* IMAGE — own border-radius, inset from the card frame */}
                        <div className="relative h-64 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="82vw"
                            quality={90}
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* CONTENT — flex-1 fills remaining card height for equal sizing */}
                        <div className="px-3 pt-4 pb-3 flex flex-col gap-4 flex-1">
                          <div className="text-[15px] text-white/35 tracking-[0.35em] uppercase">
                            {item.label}
                          </div>
                          <h4 className="text-[20px] font-semibold text-white leading-[1.25]">
                            {item.title}
                          </h4>
                          <p className="text-[17px] text-white/60 leading-[1.6]">
                            {item.desc}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

                {/* INDICATORS — px-5 re-centers them within the full-width container */}
                <div className="flex justify-center gap-2 mt-8 px-5">
                  {caseStudies.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-0.5 transition-all duration-400 ${
                        i === activeIndex ? "w-10 bg-white" : "w-4 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

              </div>

              {/* DESKTOP: Animated carousel */}
              <div className="hidden md:block">

                <Reveal delay={80} y={20}>
                <div className="relative" style={{ height: "460px" }}>
                  {caseStudies.map((item, i) => {
                    const order = (i - activeIndex + total) % total
                    const indexFromFront = total - 1 - order
                    const isFront = indexFromFront === 0
                    return (
                      <div
                        key={item.id}
                        onClick={() => goTo(i)}
                        className="absolute top-0 right-0 rounded-3xl overflow-hidden grid grid-cols-12 cursor-pointer bg-surface-900 border border-white/5"
                        style={{
                          width: `calc(100% - ${totalOffset}px)`,
                          height: "100%",
                          transform: `translateX(-${indexFromFront * offset}px)`,
                          zIndex: 10 + order,
                          boxShadow: isFront
                            ? "0 24px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.3)"
                            : "0 4px 16px rgba(0,0,0,0.12)",
                          transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease",
                          willChange: "transform",
                        }}
                      >
                        {/* LEFT COPY */}
                        <div className="col-span-6 px-14 py-9 flex flex-col justify-between bg-surface-900">
                          <div className="text-[15px] text-white/30 tracking-[0.25em] uppercase">{item.label}</div>
                          <div>
                            <div className="text-[20px] font-semibold mb-4 text-white leading-snug">{item.title}</div>
                            <div className="text-[15px] text-white/60 leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                        {/* RIGHT IMAGE */}
                        <div className="col-span-6 relative">
                          <Image src={item.image} alt="" fill sizes="(max-width: 1536px) 40vw, 600px" quality={90} className="object-cover" />
                          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-surface-900/80" />
                        </div>
                      </div>
                    )
                  })}
                </div>
                </Reveal>

                {/* LINE NAVIGATION */}
                <div className="flex justify-center items-center gap-3 mt-8">
                  {caseStudies.map((_, i) => {
                    const isActive = i === activeIndex
                    return (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        style={{
                          position: "relative",
                          height: "2px",
                          width: isActive ? "72px" : "28px",
                          background: "rgba(255,255,255,0.15)",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                          overflow: "hidden",
                          transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)",
                        }}
                      >
                        {isActive && (
                          <div
                            key={activeIndex}
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "rgba(255,255,255,0.85)",
                              transformOrigin: "left center",
                              animation: "indicator-progress 10s linear forwards",
                            }}
                          />
                        )}
                      </button>
                    )
                  })}
                </div>

              </div>{/* /desktop */}

            </div>
          </section>
        )
      })()}


      {/* ================= PROGRAM TRANSFORMATION — MOBILE ================= */}
      <section className="md:hidden relative pt-24 pb-20 bg-background-900">
        <div className="px-5">

          <div className="relative min-h-[780px] pb-24 rounded-b-[28px] overflow-hidden">

            <Image
              src="/program_transformation.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={90}
              className="object-cover"
            />

            {/* Cinematic overlay — dark top, visible middle, fades out */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(
                  to bottom,
                  var(--color-background-900) 0%,
                  rgba(13,13,12,0.80) 30%,
                  rgba(0,0,0,0.40) 60%,
                  transparent 100%
                )`
              }}
            />

            {/* TEXT BLOCK — eyebrow + accent centered */}
            <div className="relative z-10 pt-24 text-center max-w-[340px] mx-auto px-5">

              <Reveal>
              <div className="text-[14px] text-white/60 mb-3">Programs That Deliver</div>
              </Reveal>

              <Reveal delay={80}>
              <div className="text-[18px] font-medium text-primary-600">
                Life Changing Transformations
              </div>
              </Reveal>

            </div>

            {/* TEXT BLOCK — headline left-aligned */}
            <div className="relative z-10 mt-10 max-w-[330px] mx-auto text-left px-5">

              <Reveal delay={160}>
              <h2 className="text-[24px] leading-[1.5] font-normal text-white/85">
                <span className="font-medium text-white">We don't just optimize for outcomes.</span>
                <br />
                <span className="text-white/60">
                  We design programs that change how people see themselves
                  and what they believe they can do next.
                </span>
              </h2>
              </Reveal>

            </div>

            {/* TESTIMONIAL MARQUEE */}
            <div className="absolute bottom-10 left-0 right-0 z-10 overflow-hidden">
              <div className="flex gap-6 px-5 animate-marquee" style={{ animationDuration: "50s" }}>
                {[
                  { text: "Before the program, I always felt like I was catching up. Halfway through, that feeling disappeared.", name: "Jessica Blund", role: "Program participant" },
                  { text: "I learned how to make decisions with confidence and trust my own judgment.", name: "Steward Angle", role: "Early-career operator" },
                  { text: "The shift wasn't just tactical. It was identity-level.", name: "Mason Lee", role: "Founder" },
                  { text: "Before the program, I always felt like I was catching up. Halfway through, that feeling disappeared.", name: "Jessica Blund", role: "Program participant" },
                  { text: "I learned how to make decisions with confidence and trust my own judgment.", name: "Steward Angle", role: "Early-career operator" },
                  { text: "The shift wasn't just tactical. It was identity-level.", name: "Mason Lee", role: "Founder" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="min-w-70 max-w-70 min-h-45 p-6 rounded-3xl bg-surface-900/75 border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.35)] shrink-0 flex flex-col justify-between"
                  >
                    <div className="text-[15px] text-white/80 leading-[1.65] mb-6">{item.text}</div>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-white/20 shrink-0" />
                      <div>
                        <div className="text-[15px] font-semibold text-primary-600">{item.name}</div>
                        <div className="text-[13px] text-white/50">{item.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROGRAM TRANSFORMATION — DESKTOP ================= */}
      <section className="hidden md:block relative pt-10 md:pt-16 pb-16 md:pb-32 bg-background-900">
        <div className="max-w-300 mx-auto px-5 md:px-10">

          <div className="relative min-h-150 md:min-h-250 overflow-hidden rounded-b-3xl">

            <Image
              src="/program_transformation.jpg"
              alt=""
              fill
              sizes="100vw"
              quality={90}
              className="object-cover"
            />

            <div
              className="absolute top-0 left-0 right-0 h-[520px] pointer-events-none"
              style={{
                background: `linear-gradient(
                  to bottom,
                  var(--color-background-900) 0%,
                  var(--color-background-900) 18%,
                  rgba(13,13,12,0.96) 32%,
                  rgba(13,13,12,0.85) 45%,
                  rgba(13,13,12,0.70) 60%,
                  rgba(13,13,12,0.50) 75%,
                  rgba(13,13,12,0.25) 88%,
                  transparent 100%
                )`
              }}
            />

            <div className="relative z-10 pt-14 md:pt-28 text-center max-w-225 mx-auto px-5 md:px-0">

              <Reveal>
              <div className="text-[15px] text-white/60 mb-3">Programs That Deliver</div>
              </Reveal>

              <Reveal delay={80}>
              <div className="text-[20px] font-medium mb-12" style={{ color: "var(--color-primary-600)" }}>
                Life Changing Transformations
              </div>
              </Reveal>

              <Reveal delay={160}>
              <h2 className="text-[26px] md:text-[40px] font-reguler leading-[1.4] text-white/90">
                We don't just optimize for outcomes.
                <br />
                <span className="text-white/65 font-reguler">
                  We design programs that change how people see themselves
                  and what they believe they can do next.
                </span>
              </h2>
              </Reveal>
            </div>

            {/* TESTIMONIAL MARQUEE */}
            <div className="absolute bottom-36 left-0 right-0 z-10 overflow-hidden">
              <div className="flex gap-8 px-12 animate-marquee">
                {[
                  { text: "Before the program, I always felt like I was catching up. Halfway through, that feeling disappeared.", name: "Jessica Blund", role: "Program participant" },
                  { text: "I learned how to make decisions with confidence and trust my own judgment.", name: "Steward Angle", role: "Early-career operator" },
                  { text: "The shift wasn't just tactical. It was identity-level.", name: "Mason Lee", role: "Founder" },
                ].concat([
                  { text: "Before the program, I always felt like I was catching up. Halfway through, that feeling disappeared.", name: "Jessica Blund", role: "Program participant" },
                  { text: "I learned how to make decisions with confidence and trust my own judgment.", name: "Steward Angle", role: "Early-career operator" },
                  { text: "The shift wasn't just tactical. It was identity-level.", name: "Mason Lee", role: "Founder" },
                ]).map((item, index) => (
                  <div
                    key={index}
                    className="min-w-70 md:min-w-95 max-w-70 md:max-w-95 p-6 md:p-8 rounded-3xl bg-surface-900/80 border border-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  >
                    <div className="text-[15px] text-white/80 leading-relaxed mb-6">{item.text}</div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20" />
                      <div>
                        <div className="text-[15px] font-semibold" style={{ color: "var(--color-primary-600)" }}>{item.name}</div>
                        <div className="text-[15px] text-white/50">{item.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FULL STACK / MODULAR ================= */}
      <Section className="bg-background-900 overflow-hidden">
        <div className="max-w-300 mx-auto px-5 md:px-10">

          <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-10 md:mb-16 items-start">
            <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.4] text-white/90">
              Full-stack or Modular.
              <br />
              <span style={{ color: "var(--color-primary-600)" }}>Built Around You.</span>
            </h2>
            </Reveal>

            <Reveal delay={100}>
            <div className="text-[17px] text-white/60 leading-relaxed max-w-110">
              We can own strategy & execution end-to-end OR partner
              with your team on where guidance is most needed.
            </div>
            </Reveal>
          </div>

          {(() => {

            const total = panels.length
            const offset = 60
            const totalOffset = offset * (total - 1)

            const isDesktop = useIsDesktop()
            const [activeIndex, setActiveIndex] = useState(0)
            const fsIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

            const goTo = (index: number) => {
              setActiveIndex(index)
              if (!isDesktop) return
              if (fsIntervalRef.current) clearInterval(fsIntervalRef.current)
              fsIntervalRef.current = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % total)
              }, 10000)
            }

            useEffect(() => {
              if (!isDesktop) {
                if (fsIntervalRef.current) clearInterval(fsIntervalRef.current)
                return
              }
              fsIntervalRef.current = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % total)
              }, 10000)
              return () => {
                if (fsIntervalRef.current) clearInterval(fsIntervalRef.current)
              }
            }, [isDesktop])

            return (
              <>
                {/* MOBILE: Peek Carousel */}
<div className="md:hidden relative mt-6">

  <div
    className="flex transition-transform duration-600"
    style={{
      transform: `translateX(-${activeIndex * 90}%)`,
      transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
    }}
  >
    {panels.map((panel) => (
      <div
        key={panel.id}
        className="min-w-[90%] mr-5"
      >
        {/* OUTER FRAME */}
        <div className="rounded-[20px] bg-surface-900 border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.4)] p-[4px] h-[520px] flex flex-col">

          {/* INNER CARD */}
          <div className="rounded-[8px] bg-surface-900 overflow-hidden flex flex-col h-full">

            {/* IMAGE */}
            <div className="relative h-[240px] mt-5 mx-5 rounded-[8px] overflow-hidden">
              <Image
                src={panel.image}
                alt=""
                fill
                sizes="90vw"
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 text-[24px] font-semibold text-white/85">
                {panel.number}
              </div>
            </div>
            
            {/* TOP SMALL DESCRIPTION */}
            <div className="px-6 pt-6 text-[15px] text-white/60 leading-relaxed">
              {panel.eyebrow}
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-white/10 mx-6 mt-6" />

            {/* CONTENT */}
            <div className="px-6 pt-6 flex flex-col flex-1">

              <div className="flex items-center gap-3 mb-5">
                <div className="text-primary-600">
                  {panel.icon}
                </div>
                <div className="text-[20px] font-semibold text-primary-600">
                  {panel.title}
                </div>
              </div>

              <div className="text-[17px] leading-[1.6] text-white/75">
                {panel.desc}
              </div>

              {/* BOTTOM BREATHING SPACE */}
              <div className="mt-auto pb-4" />

            </div>

          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Indicators */}
  <div className="flex justify-center gap-2 mt-6">
    {panels.map((_, i) => (
      <button
        key={i}
        onClick={() => goTo(i)}
        className={`h-0.5 transition-all duration-300 ${
          i === activeIndex
            ? "w-8 bg-white"
            : "w-4 bg-white/30"
        }`}
      />
    ))}
  </div>

</div>

                {/* DESKTOP: Animated carousel */}
                <div className="hidden md:block">

                  <Reveal delay={80} y={20}>
                  <div className="relative overflow-hidden" style={{ height: "520px" }}>
                    {panels.map((panel, i) => {
                      const order = (i - activeIndex + total) % total
                      const indexFromFront = total - 1 - order
                      const isFront = indexFromFront === 0
                      return (
                        <div
                          key={panel.id}
                          onClick={() => goTo(i)}
                          className="absolute top-0 right-0 h-full cursor-pointer"
                          style={{
                            width: `calc(100% - ${totalOffset}px)`,
                            transform: `translateX(-${indexFromFront * offset}px)`,
                            zIndex: 20 + order,
                            transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
                            willChange: "transform",
                          }}
                        >
                          <div
                            className="w-full h-full rounded-[30px] bg-surface-900 border border-white/6"
                            style={{
                              padding: "12px",
                              boxShadow: isFront ? "0 18px 50px rgba(0,0,0,0.40)" : "0 6px 20px rgba(0,0,0,0.22)",
                              transition: "box-shadow 0.5s ease",
                            }}
                          >
                            <div className="w-full h-full rounded-[22px] overflow-hidden grid grid-cols-12 bg-surface-900">

                              {/* IMAGE */}
                              <div className="col-span-7 relative">
                                <Image src={panel.image} alt="" fill sizes="(max-width: 1536px) 48vw, 700px" quality={90} className="object-cover" />
                                <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
                                <div className="absolute top-6 left-6 text-[24px] font-semibold text-white/85">{panel.number}</div>
                              </div>

                              {/* CONTENT */}
                              <div className="col-span-5 px-14 flex flex-col bg-surface-900">
                                <div
                                  className="flex flex-col justify-between h-full py-10"
                                  style={{
                                    opacity: isFront ? 1 : 0,
                                    transition: isFront
                                      ? "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.2s"
                                      : "opacity 0.12s ease",
                                    pointerEvents: isFront ? "auto" : "none",
                                  }}
                                >
                                  <div>
                                    <div className="text-[15px] text-white/60 leading-relaxed">{panel.eyebrow}</div>
                                    <div className="h-px bg-white/10 mt-8 -mx-14" />
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-4 mb-6">
                                      <div className="text-primary-600">{panel.icon}</div>
                                      <div className="text-[24px] font-semibold" style={{ color: "var(--color-primary-600)" }}>{panel.title}</div>
                                    </div>
                                    <div className="text-[17px] text-white/70 leading-relaxed">{panel.desc}</div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  </Reveal>

                  {/* LINE NAVIGATION */}
                  <div className="flex justify-center items-center gap-3 mt-8">
                    {panels.map((_, i) => {
                      const isActive = i === activeIndex
                      return (
                        <button
                          key={i}
                          onClick={() => goTo(i)}
                          aria-label={`Go to panel ${i + 1}`}
                          style={{
                            position: "relative",
                            height: "2px",
                            width: isActive ? "72px" : "28px",
                            background: "rgba(255,255,255,0.15)",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            overflow: "hidden",
                            transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)",
                          }}
                        >
                          {isActive && (
                            <div
                              key={activeIndex}
                              style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(255,255,255,0.85)",
                                transformOrigin: "left center",
                                animation: "indicator-progress 10s linear forwards",
                              }}
                            />
                          )}
                        </button>
                      )
                    })}
                  </div>

                </div>{/* /desktop */}
              </>
            )

          })()}

        </div>
      </Section>
      <SectionDivider />


      {/* ================= PARTNER IMPACT ================= */}
      {(() => {
        const [hovered, setHovered] = useState<number | null>(null)
        const [tapped, setTapped] = useState<number | null>(null)

        function getState(i: number): "expanded" | "shrunk" | "normal" {
          if (hovered === null) return "normal"
          if (i === hovered) return "expanded"
          const sameRow = Math.floor(i / 2) === Math.floor(hovered / 2)
          return sameRow ? "shrunk" : "normal"
        }

        function getGridCols(row: readonly [number, number]): string {
          const [a, b] = row
          if (hovered === a) return "1.65fr 0.55fr"
          if (hovered === b) return "0.55fr 1.65fr"
          return "1fr 1fr"
        }

        return (
          <section className="relative py-16 bg-background-900">
            <div className="max-w-300 mx-auto px-5 md:px-10">

              <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <h3 className="text-[24px] md:text-[32px] font-semibold leading-[1.1] text-white/90">
                  <span style={{ color: "var(--color-primary-600)" }}>What We've Built</span>{" "}
                  with Our Partners
                </h3>
              </div>
              </Reveal>

              {/* MOBILE: Expandable impact cards — same visual structure as desktop */}
              <div className="md:hidden flex flex-col gap-4">
                {partners.map((card, i) => {
                  const isExpanded = tapped === i
                  const isDimmed = tapped !== null && !isExpanded
                  return (
                    <div
                      key={i}
                      onClick={() => setTapped(tapped === i ? null : i)}
                      className="relative rounded-3xl overflow-hidden cursor-pointer bg-surface-900 border border-white/6"
                      style={{
                        height: isExpanded ? "640px" : "340px",
                        opacity: isDimmed ? 0.55 : 1,
                        transition: "height 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.45s cubic-bezier(0.16,1,0.3,1)",
                        boxShadow: "0 18px 50px rgba(0,0,0,0.40)",
                      }}
                    >
                      {/* IMAGE */}
                      <Image src={card.img} alt="" fill sizes="100vw" quality={90} className="object-cover brightness-[0.45]" />
                      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent" />

                      {/* ── TOP AREA — no overflow-hidden so expanded content isn't clipped ── */}
                      <div className="absolute top-0 left-0 right-0 z-10">

                        {/* COLLAPSED: Col1 only */}
                        <div
                          className="absolute top-0 left-0 right-0 px-6 pt-6"
                          style={{
                            opacity: isExpanded ? 0 : 1,
                            pointerEvents: isExpanded ? "none" : "auto",
                            transition: isExpanded
                              ? "opacity 0.12s ease"
                              : "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s",
                          }}
                        >
                          <div className="text-[40px] font-semibold text-white leading-none mb-2">{card.number}</div>
                          <div className="text-[15px] font-light text-white/60 leading-snug">{card.descLeft}</div>
                        </div>

                        {/* EXPANDED: Row 1 (Col1 + Col3) + Row 2 (Col2) */}
                        <div
                          className="absolute top-0 left-0 right-0 px-6 pt-6"
                          style={{
                            opacity: isExpanded ? 1 : 0,
                            pointerEvents: isExpanded ? "auto" : "none",
                            transition: isExpanded
                              ? "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s"
                              : "opacity 0.12s ease",
                          }}
                        >
                          {/* 2-col grid: Row1 = Col1+Col3, Row2 = Col2 left-only */}
                          <div className="grid grid-cols-2 gap-x-7 gap-y-5">
                            <div>
                              <div className="text-[32px] font-semibold text-white leading-none mb-2">{card.number}</div>
                              <div className="text-[15px] font-light text-white/60 leading-snug">{card.descLeft}</div>
                            </div>
                            <div>
                              <div className="text-[32px] font-semibold text-white leading-none mb-2">{card.col3Metric}</div>
                              <div className="text-[15px] font-light text-white/60 leading-snug">{card.col3Label}</div>
                            </div>
                            <div>
                              <div className="text-[17px] font-semibold text-white leading-snug mb-1">
                                Builders<br />shipping<br />production
                              </div>
                              <div className="text-[15px] font-light text-white/60 leading-snug">{card.descRight}</div>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* ── BOTTOM SECTION ── */}
                      <div className="absolute bottom-0 left-0 right-0 h-[48%] bg-linear-to-b from-transparent via-background-900/85 to-background-900 backdrop-blur-sm">
                        <div className="relative h-full">

                          {/* COLLAPSED layout */}
                          <div
                            className="absolute inset-0 px-6 pt-5 pb-6 flex flex-col justify-start"
                            style={{
                              opacity: isExpanded ? 0 : 1,
                              pointerEvents: isExpanded ? "none" : "auto",
                              transition: isExpanded ? "opacity 0.12s ease" : "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s",
                            }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <Image src={card.logo} alt="" width={32} height={32} className="h-8 w-auto object-contain opacity-90" />
                                <div className="text-white text-[17px] font-medium">{card.title}</div>
                              </div>
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                className="w-4 h-4 text-white/60 shrink-0"
                                style={{
                                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                  transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                                }}
                              >
                                <path d="M2 5L8 11L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="text-[15px] text-white/65 font-light leading-relaxed">{card.bottom}</div>
                          </div>

                          {/* EXPANDED layout */}
                          <div
                            className="absolute inset-0 px-6 pt-5 pb-6 flex flex-col justify-start"
                            style={{
                              opacity: isExpanded ? 1 : 0,
                              pointerEvents: isExpanded ? "auto" : "none",
                              transition: isExpanded ? "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s" : "opacity 0.12s ease",
                            }}
                          >
                            <div className="text-[17px] font-medium text-white leading-snug mb-2">{card.headline}</div>
                            <div className="text-[15px] text-white/60 font-normal leading-relaxed mb-6">
                              {card.expandedDesc}
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={card.logo} alt="" width={32} height={32} className="h-8 w-auto object-contain opacity-90" />
                              <span className="text-white text-[17px] font-semibold">{card.title}</span>
                            </div>
                            <a
                              href="#"
                              className="group flex items-center gap-1 text-[15px] font-semibold"
                              style={{ color: "var(--color-primary-600)" }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="underline decoration-transparent group-hover:decoration-current transition-[text-decoration-color] duration-200">
                                Learn more
                              </span>
                              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.75" style={{ opacity: 0.9 }}>
                                →
                              </span>
                            </a>
                          </div>

                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>

              {/* DESKTOP: Grid-animated hover-expand rows */}
              <div className="hidden md:flex flex-col gap-8">
                {partnerRows.map((row, rowIdx) => (
                  <Reveal key={rowIdx} delay={rowIdx * 100}>
                  <div
                    style={{
                      display: "grid",
                      gap: "32px",
                      gridTemplateColumns: getGridCols(row),
                      transition: "grid-template-columns 0.6s cubic-bezier(0.16,1,0.3,1)",
                      alignItems: "stretch",
                    }}
                  >
                    {row.map((i) => {
                      const card = partners[i]
                      const state = getState(i)
                      const isExpanded = state === "expanded"
                      const isShrunk = state === "shrunk"

                      return (
                        <div
                          key={i}
                          onMouseEnter={() => setHovered(i)}
                          onMouseLeave={() => setHovered(null)}
                          className="relative rounded-3xl overflow-hidden cursor-pointer"
                          style={{
                            height: "360px",
                            opacity: hovered !== null && !isExpanded ? 0.55 : 1,
                            transition: "opacity 0.45s cubic-bezier(0.16,1,0.3,1)",
                          }}
                        >
                          <Image src={card.img} alt="" fill sizes="(max-width: 1536px) 50vw, 720px" quality={90} className="object-cover brightness-[0.45]" />
                          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent" />

                          {/* TOP AREA */}
                          <div className="absolute top-0 left-0 right-0 px-10 pt-8 h-33.75 z-10 flex gap-9 overflow-hidden">

                            {/* COL 1 — always visible */}
                            <div className="flex-1 flex flex-col justify-between" style={{ minWidth: 0 }}>
                              <div className="flex items-center h-[70px]">
                                <div className="text-[32px] font-semibold text-white">{card.number}</div>
                              </div>
                              <div className="h-[36px] text-[15px] font-light text-white/60 leading-snug">{card.descLeft}</div>
                            </div>

                            {/* COL 2 — collapses when shrunk */}
                            <div
                              className="flex flex-col justify-between"
                              style={{
                                flex: isShrunk ? 0 : 1,
                                opacity: isShrunk ? 0 : 1,
                                overflow: "hidden",
                                minWidth: 0,
                                transition: isShrunk
                                  ? "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.12s ease"
                                  : "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s",
                              }}
                            >
                              <div className="flex items-center h-[70px]">
                                <div className="text-[15px] font-semibold text-white" style={{ whiteSpace: "nowrap" }}>
                                  Builders<br />shipping<br />production
                                </div>
                              </div>
                              <div className="h-[36px] text-[15px] font-light text-white/60 leading-snug" style={{ whiteSpace: "nowrap" }}>
                                {card.descRight}
                              </div>
                            </div>

                            {/* COL 3 — expands in */}
                            <div
                              className="flex flex-col justify-between"
                              style={{
                                flex: isExpanded ? 1 : 0,
                                opacity: isExpanded ? 1 : 0,
                                overflow: "hidden",
                                minWidth: 0,
                                transition: isExpanded
                                  ? "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s"
                                  : "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.12s ease",
                              }}
                            >
                              <div className="flex items-center h-[70px]">
                                <div className="text-[32px] font-semibold text-white" style={{ whiteSpace: "nowrap" }}>
                                  {card.col3Metric}
                                </div>
                              </div>
                              <div className="h-[36px] text-[15px] font-light text-white/60 leading-snug" style={{ whiteSpace: "nowrap" }}>
                                {card.col3Label}
                              </div>
                            </div>

                          </div>

                          {/* BOTTOM */}
                          <div className="absolute bottom-0 left-0 right-0 h-[38%] bg-linear-to-b from-transparent via-background-900/85 to-background-900 backdrop-blur-sm">
                            <div className="relative h-full">

                              {/* DEFAULT layout */}
                              <div
                                className="absolute inset-0 px-10 pt-5 pb-7 flex flex-col justify-start"
                                style={{
                                  opacity: isExpanded ? 0 : 1,
                                  pointerEvents: isExpanded ? "none" : "auto",
                                  transition: isExpanded ? "opacity 0.12s ease" : "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s",
                                }}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <Image src={card.logo} alt="" width={32} height={32} className="h-8 w-auto object-contain opacity-90" />
                                  <div className="flex items-center gap-2 text-white text-[15px] font-medium">
                                    {card.title}
                                    <span className="text-white/60 text-[15px]">›</span>
                                  </div>
                                </div>
                                <div className="text-[15px] text-white/65 font-light leading-relaxed max-w-[80%]">
                                  {card.bottom}
                                </div>
                              </div>

                              {/* EXPANDED layout */}
                              <div
                                className="absolute inset-0 px-10 pt-5 pb-7 flex gap-6"
                                style={{
                                  opacity: isExpanded ? 1 : 0,
                                  pointerEvents: isExpanded ? "auto" : "none",
                                  transition: isExpanded ? "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s" : "opacity 0.12s ease",
                                }}
                              >
                                <div className="flex flex-col justify-between min-w-0" style={{ flex: 1, paddingRight: "80px" }}>
                                  <div className="text-[15px] font-normal text-white leading-snug mb-2">{card.headline}</div>
                                  <div
                                    className="text-[13px] text-white/60 font-normal leading-relaxed"
                                    style={{
                                      display: "-webkit-box",
                                      WebkitLineClamp: 4,
                                      WebkitBoxOrient: "vertical" as const,
                                      overflow: "hidden",
                                    }}
                                  >
                                    {card.expandedDesc}
                                  </div>
                                </div>
                                <div className="flex flex-col justify-between items-end shrink-0">
                                  <div className="flex items-center gap-2">
                                    <Image src={card.logo} alt="" width={32} height={32} className="h-8 w-auto object-contain opacity-90" />
                                    <span className="text-white text-[17px] font-semibold whitespace-nowrap">{card.title}</span>
                                  </div>
                                  <a
                                    href="#"
                                    className="group flex items-center gap-1 text-[15px] font-semibold"
                                    style={{ color: "var(--color-primary-600)" }}
                                  >
                                    <span className="underline decoration-transparent group-hover:decoration-current transition-[text-decoration-color] duration-200">
                                      Learn more
                                    </span>
                                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.75" style={{ opacity: 0.9 }}>
                                      →
                                    </span>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>
                      )
                    })}
                  </div>
                  </Reveal>
                ))}
              </div>

            </div>
          </section>
        )
      })()}


      {/* ================= FINAL CTA + FOOTER — MOBILE ================= */}
      <section
        className="md:hidden relative bg-background-900 overflow-hidden"
        style={{ minHeight: "820px" }}
      >

        {/* BACKGROUND IMAGE — full bleed, z:0, direct child of relative section */}
        <Image
          src="/CTA_Background.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />

        {/* GRADIENT OVERLAY — semi-transparent always, never solid black */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.35) 0%,
              rgba(0,0,0,0.10) 20%,
              transparent 38%,
              transparent 50%,
              rgba(0,0,0,0.50) 70%,
              rgba(0,0,0,0.88) 100%
            )`
          }}
        />

        {/* VERTICAL FRAME LINES — left and right cinematic borders */}
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: "20px", width: "1px", background: "rgba(255,255,255,0.06)", zIndex: 4 }}
        />
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{ right: "20px", width: "1px", background: "rgba(255,255,255,0.06)", zIndex: 4 }}
        />

        {/* WATERMARK LOGO — mid-lower, z:2 (above overlay, below content) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ top: "46%", opacity: 0.10, zIndex: 2 }}
        >
          <Image
            src="/Atrium_Big.png"
            alt=""
            width={900}
            height={180}
            className="w-[90vw] max-w-[500px] object-contain"
          />
        </div>

        {/* CTA CONTENT — upper-mid, floats over scene */}
        <div
          className="relative flex flex-col items-center text-center px-8 pt-32"
          style={{ zIndex: 3 }}
        >
          <h2 className="text-[30px] font-bold leading-[1.35] text-white tracking-tight max-w-[300px]">
            Build something meaningful together.
          </h2>
          <div className="mt-10">
            <div className="relative inline-block">
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-[#0E7A52]" />
              <div
                className="relative px-10 py-4 rounded-xl text-[16px] font-semibold"
                style={{
                  background: "#BFF3DA",
                  color: "var(--color-background-900)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.40)"
                }}
              >
                Work with us
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER — pinned to bottom, dissolves into gradient scene */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 pb-8 flex flex-col items-center gap-3"
          style={{ zIndex: 3 }}
        >
          <span className="text-white/40 text-[13px]">© Atrium 2026. All rights reserved</span>
          <div className="flex items-center gap-6 text-[13px] text-white/50">
            <a href="#" className="underline underline-offset-2 decoration-white/25 hover:text-white/75 hover:decoration-white/50 transition-colors duration-200">Twitter</a>
            <a href="#" className="underline underline-offset-2 decoration-white/25 hover:text-white/75 hover:decoration-white/50 transition-colors duration-200">View Programs</a>
          </div>
        </div>

      </section>

      {/* ================= FINAL CTA + FOOTER — DESKTOP ================= */}
      <section className="hidden md:block relative bg-background-900 overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/CTA_Background.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="object-cover"
            priority
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.75) 80%,
              rgba(0,0,0,0.78) 84%,
              rgba(0,0,0,0.82) 88%,
              rgba(0,0,0,0.88) 96%,
              rgba(0,0,0,0.92) 100%
            )`
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-[420px] pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              var(--color-background-900) 0%,
              var(--color-background-900) 20%,
              rgba(13,13,12,0.96) 35%,
              rgba(13,13,12,0.85) 50%,
              rgba(13,13,12,0.65) 65%,
              rgba(13,13,12,0.35) 80%,
              transparent 100%
            )`
          }}
        />

        {/* CTA CONTENT */}
        <div className="relative z-10 min-h-287.5 flex flex-col items-center justify-center text-center px-10">

          <Reveal>
          <h2 className="text-[40px] font-bold leading-[1.4] text-white tracking-tight">
            Build something meaningful together.
          </h2>
          </Reveal>

          <Reveal delay={150}>
          <div className="mt-14">
            <div className="relative inline-block group">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-[#0E7A52]" />
              <div
                className="relative px-10 py-4 rounded-xl text-[15px] font-semibold transition-all duration-150 group-hover:translate-x-px group-hover:translate-y-px"
                style={{ background: "#BFF3DA", color: "var(--color-background-900)", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}
              >
                Work with us
              </div>
            </div>
          </div>
          </Reveal>

        </div>

        {/* LARGE ATRIUM LOGO */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10 pointer-events-none" style={{ opacity: 100 }}>
          <Image
            src="/Atrium_Big.png"
            alt=""
            width={1180}
            height={200}
            className="w-295 max-w-[95vw] object-contain"
          />
        </div>

        {/* FOOTER */}
        <div className="relative z-20 bg-background-900/85 border-t border-white/10">
          <div className="max-w-300 mx-auto px-10 py-6 flex flex-row justify-between items-center text-[15px] text-white/60">
            <div>© Atrium 2026. All rights reserved</div>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">View Programs</a>
            </div>
          </div>
        </div>

      </section>

    </main>
  )
}
