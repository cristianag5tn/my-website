import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Columns from "@/components/layout/Columns";
import Stack from "@/components/layout/Stack";
import Block from "@/components/layout/Block";
import Typography from "@/components/Typography";

export default function Home() {
  return (
    <main className="text-white">

      {/* ================= HERO ================= */}
<section className="relative min-h-[140vh] overflow-hidden text-white">

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="/hero.jpg"
      alt=""
      className="w-full h-full object-cover scale-[1.05] brightness-100 contrast-90"
    />
  </div>

  {/* TOP FADE – strong readability version */}
<div
  className="absolute top-0 left-0 right-0 h-[72vh] pointer-events-none"
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
    style={{
      background:
        "linear-gradient(to bottom, transparent 0%, var(--color-surface-900) 100%)"
    }}
  />

  {/* ================= NAVIGATION ================= */}
  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
    <div
      className="
        w-[760px]
        h-12
        px-6
        flex items-center justify-between
        rounded-xl
        bg-black/70
        backdrop-blur-sm
        border border-white/5
        shadow-[0_8px_30px_rgba(0,0,0,0.6)]
      "
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/atrium-logo.svg"
          alt="Atrium"
          className="h-[20px] w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-8 text-sm text-white/70">
        <span className="hover:text-white transition cursor-pointer">
          About us
        </span>

        {/* NAV BUTTON */}
        <div className="relative inline-block group">

          {/* Bottom slab */}
          <div
            className="absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-xl"
            style={{ background: "#059669" }}
          />

          {/* Main surface */}
          <div
            className="
              relative
              px-5 py-2
              rounded-xl
              text-sm font-medium
              text-black
              transition-all duration-150
              group-hover:translate-x-[1px]
              group-hover:translate-y-[1px]
            "
            style={{
              background: "#BFF3DA",
              boxShadow: "0 6px 14px rgba(0,0,0,0.25)"
            }}
          >
            Work with us
            <div className="absolute inset-0 rounded-xl border border-white/40 opacity-30 pointer-events-none" />
          </div>

        </div>
      </div>
    </div>
  </div>

  {/* ================= HERO CONTENT ================= */}
  <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-40 text-center">

    {/* HEADLINE */}
    <h1
      className="
        text-6xl md:text-7xl
        leading-[1.05]
        tracking-tight
        font-semibold
        max-w-[1000px]
        mx-auto
      "
    >
      BUILDING EXPERTISE
      <br />
      THROUGH{" "}
      <span style={{ color: "var(--color-primary-600)" }}>
        EDUCATION
      </span>
    </h1>

    {/* SUBCOPY */}
    <div className="mt-14 max-w-[700px] mx-auto">
      <div className="grid grid-cols-2 gap-14 text-left">

        <p className="text-lg text-white/85 leading-snug font-medium">
          Turns practitioners
          <br />
          Into Experts
        </p>

        <p className="text-base text-white/75 leading-relaxed">
          An education studio building programs that turn practitioners into experts.
          We drive adoption, retention, and scale for our partners.
        </p>

      </div>
    </div>

  </div>

</section>


      {/* ================= CONTENT ================= */}
      <Section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
        }}
      >

        <Container>
          <Stack gap={160}>

            {/* ================= PRODUCT ACTIVATION ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img
        src="Product_Activation.jpg"
        alt=""
        className="w-full h-[420px] object-cover"
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute left-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        top: "0",
        transform: "translate(-20%, -20%)",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Product_Activation.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          Software company with a complex product that needs customer
          education driving actual usage
        </div>
      </div>
    </div>

  </div>

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      You’ve built something powerful, but users don’t reach the “aha”
      moment fast enough to stick.
    </div>

    <Typography variant="h3">Product Activation</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Create structured education pipelines that guide users from onboarding
      to mastery—driving real adoption, retention, and measurable growth.
    </Typography>
  </Stack>

</Columns>


{/* ================= DEVELOPER ADOPTION ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      Developers are interested, but learning curves and unclear entry
      points stop real building from happening.
    </div>

    <Typography variant="h3">Developer Adoption</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Design educational journeys that reduce friction, accelerate onboarding,
      and transform curiosity into active builders and ecosystem growth.
    </Typography>
  </Stack>

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img
        src="Developer_Adoption.jpg"
        alt=""
        className="w-full h-[420px] object-cover"
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute right-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        bottom: "0",
        transform: "translate(20%, 20%)",
        background: "rgba(10,10,10,0.96)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 120px rgba(0,0,0,0.85)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Developer_Adoption.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          Protocol launching a major feature and seeking rapid adoption.
        </div>
      </div>
    </div>

  </div>

</Columns>


{/* ================= GO TO MARKET ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img src="Go-To-Market.jpg" alt="" className="w-full h-[420px] object-cover" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute right-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        top: "50%",
        transform: "translate(20%, -50%)",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Go-To-Market.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          Education business looking to scale products or hand them off entirely
        </div>
      </div>
    </div>

  </div>

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      You’re launching something valuable, but education isn’t converting
      attention into sustained growth.
    </div>

    <Typography variant="h3">Go-To-Market</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Use education as a growth engine—aligning launch strategy, adoption,
      and long-term market expansion.
    </Typography>
  </Stack>

</Columns>


{/* ================= TALENT NETWORK ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      You need founders, operators, or builders—but there’s no scalable
      way to find, train, and surface the right ones.
    </div>

    <Typography variant="h3">Talent Network</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Build structured ecosystems that connect learning pathways with
      real-world opportunity and long-term practitioner growth.
    </Typography>
  </Stack>

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img src="Talent_Network.jpg" alt="" className="w-full h-[420px] object-cover" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute right-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        top: "72%",
        transform: "translate(20%, -50%)",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Talent_Network.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          VC firm looking to build an accelerator to support portfolio companies
        </div>
      </div>
    </div>

  </div>

</Columns>

          </Stack>
        </Container>
      </Section>


            {/* ================= EXPERIENCES ORNAMENTAL ================= */}
<section className="relative py-64 overflow-hidden text-center bg-[var(--color-surface-900)]">

  {/* Top Arc Line */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] border-t border-white/10 rounded-[50%] pointer-events-none" />

  {/* Ornamental Background */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <img
      src="/ornament.png"   // ⬅️ GANTI dengan image ornamental khusus
      alt=""
      className="w-[900px] opacity-20"
    />
  </div>

  {/* Dark Fade Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70 pointer-events-none" />

  <div className="relative z-10 max-w-[1100px] mx-auto px-6">

    {/* Top Pills */}
    <div className="flex justify-center gap-4 mb-20 flex-wrap">
      {["Bootcamps", "Workshops", "Courses", "Accelerators"].map((item) => (
        <div
          key={item}
          className="px-7 py-3 rounded-full text-sm"
          style={{
            background: "rgba(20,20,20,0.75)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {item}
        </div>
      ))}
    </div>

    {/* Heading */}
    <h2 className="text-6xl font-semibold leading-tight mb-20">
      Experiences we build
      <br />
      with you
    </h2>

    {/* Bottom Pills */}
    <div className="flex justify-center gap-4 flex-wrap">
      {["Subscriptions", "Communities", "Fellowships"].map((item) => (
        <div
          key={item}
          className="px-7 py-3 rounded-full text-sm"
          style={{
            background: "rgba(20,20,20,0.75)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {item}
        </div>
      ))}
    </div>

  </div>

</section>


{/* ================= STACKED CASE STUDIES ================= */}
<section className="relative py-40 bg-[var(--color-surface-900)] overflow-hidden">

  {/* Heading */}
  <div className="text-center mb-20 max-w-[760px] mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
      Category defining programs,
      <br />
      built to world-class standards
    </h2>
  </div>

  {/* STACK WRAPPER — width sudah diperkecil supaya tidak melewati vertical line */}
  <div className="relative max-w-[960px] mx-auto px-6 h-[460px]">

    {[0,1,2,3].map((i) => {

      const offset = i * 28;

      return (
        <div
          key={i}
          className="absolute w-full h-full rounded-3xl overflow-hidden grid grid-cols-12"
          style={{
            top: offset,
            left: offset,
            zIndex: 10 + i,
            background: "#121212",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              i === 3
                ? "0 50px 140px rgba(0,0,0,0.9)"
                : "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >

          {/* LEFT COPY */}
          <div className="col-span-12 md:col-span-6 p-10 flex flex-col justify-center">

            <div className="text-sm text-white/50 mb-4">
              Maven
            </div>

            <div className="text-2xl font-semibold mb-6 text-white leading-snug">
              First Cohort Based Courses on Maven
            </div>

            <div className="text-white/70 leading-relaxed">
              Helped define the cohort-based learning model on Maven,
              shaping how experts turned knowledge into structured,
              high-impact programs.
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-span-12 md:col-span-6 relative">

            <img
              src="/hero.jpg"
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Subtle inner gradient supaya transisi ke copy lebih halus */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#121212]/70" />

          </div>

        </div>
      );
    })}

  </div>

</section>


{/* ================= PROGRAM TRANSFORMATION ================= */}
<section className="relative py-56 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/hero.jpg"
      alt=""
      className="w-full h-full object-cover scale-110"
    />
  </div>

  {/* Dark Vertical Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

  {/* Radial Focus Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06),transparent_60%)]" />

  {/* Content */}
  <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">

    {/* Small Eyebrow */}
    <div className="mb-6 text-sm text-white/60">
      Programs That Deliver
    </div>

    <div
      className="text-base font-medium mb-10"
      style={{ color: "var(--color-primary-600)" }}
    >
      Life Changing Transformations
    </div>

    {/* Main Headline */}
    <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-20 max-w-[820px] mx-auto">
      We don’t just optimize for outcomes.
      <br />
      <span className="text-white/70">
        We design programs that change how people see
        themselves and what they believe they can do next.
      </span>
    </h2>

    {/* TESTIMONIAL CARDS */}
    <div className="grid md:grid-cols-2 gap-10 mt-10">

      {/* CARD 1 */}
      <div
        className="p-8 rounded-3xl backdrop-blur-xl text-left"
        style={{
          background: "rgba(20,20,20,0.75)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
        }}
      >
        <div className="text-white/80 leading-relaxed mb-8">
          Before the program, I always felt like I was catching up,
          like everyone else had a playbook I missed. Halfway through,
          that feeling disappeared. I stopped asking whether I belonged
          here and started acting like I did.
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/20" />
          <div>
            <div
              className="font-semibold"
              style={{ color: "var(--color-primary-600)" }}
            >
              Jessica Blund
            </div>
            <div className="text-sm text-white/50">
              Program participant
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div
        className="p-8 rounded-3xl backdrop-blur-xl text-left"
        style={{
          background: "rgba(20,20,20,0.75)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.8)",
        }}
      >
        <div className="text-white/80 leading-relaxed mb-8">
          I didn’t just learn new concepts. I learned how to make
          decisions with confidence. For the first time, I wasn’t
          waiting for permission or validation. I trusted my own
          judgment.
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/20" />
          <div>
            <div
              className="font-semibold"
              style={{ color: "var(--color-primary-600)" }}
            >
              Steward Angle
            </div>
            <div className="text-sm text-white/50">
              Early-career operator
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Bottom Fade Melt */}
  <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-surface-900)] to-transparent" />

</section>


{/* ================= FULL STACK / MODULAR ================= */}
<section className="relative py-40 bg-[var(--color-surface-900)] overflow-hidden">

  <div className="max-w-[1000px] mx-auto px-6">

    {/* TOP TEXT */}
    <div className="grid md:grid-cols-2 gap-16 mb-24 items-start">

      <div>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Full-stack or Modular.
          <br />
          <span style={{ color: "var(--color-primary-600)" }}>
            Built Around You.
          </span>
        </h2>
      </div>

      <div className="text-white/70 leading-relaxed text-lg">
        We can own strategy & execution end-to-end OR partner
        with your team on where guidance is most needed.
      </div>

    </div>


    {/* STACKED PANELS */}
    <div className="relative h-[500px]">

      {[4,3,2,1].map((num, i) => {

        const offset = i * 40;
        const isFront = num === 1;

        return (
          <div
            key={num}
            className="absolute top-0 w-full h-full rounded-3xl overflow-hidden grid grid-cols-12"
            style={{
              transform: `translateX(${offset}px)`,
              zIndex: 20 + i,
              background: "#121212",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: isFront
                ? "0 60px 160px rgba(0,0,0,0.95)"
                : "0 30px 80px rgba(0,0,0,0.6)",
            }}
          >

            {/* IMAGE SIDE */}
            <div className="col-span-12 md:col-span-7 relative">

              <img
                src="/hero.jpg"
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Left fade for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

              {/* Number */}
              <div className="absolute top-6 left-6 text-3xl font-semibold text-white/80 tracking-tight">
                {String(num).padStart(2, "0")}
              </div>

            </div>


            {/* RIGHT CONTENT (ONLY FRONT PANEL) */}
            <div className="col-span-12 md:col-span-5 p-14 flex flex-col justify-center">

              {isFront && (
                <>
                  <div className="mb-6 text-white/60 leading-relaxed">
                    We own strategy and execution.
                    You bring the goal, we build the system.
                  </div>

                  <div
                    className="text-2xl font-semibold mb-6"
                    style={{ color: "var(--color-primary-600)" }}
                  >
                    Strategy
                  </div>

                  <div className="text-white/70 leading-relaxed">
                    Adapting to your business problem,
                    choosing right metrics, and iterating
                    quickly based on what we learn.
                  </div>
                </>
              )}

            </div>

          </div>
        );
      })}

    </div>

  </div>

</section>


{/* ================= PARTNER IMPACT ================= */}
<section className="relative py-32 bg-[var(--color-surface-900)]">

  <div className="max-w-[1100px] mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
        <span style={{ color: "var(--color-primary-600)" }}>
          What We've Built
        </span>{" "}
        with Our Partners
      </h2>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* CARD 1 */}
      <div className="relative rounded-3xl overflow-hidden h-[360px]">

        {/* Background */}
        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top subtle dark */}
        <div className="absolute inset-0 bg-black/40" />

        {/* BOTTOM SOLID PANEL */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/90 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col justify-between">

          <div className="flex gap-10 text-white/80 font-semibold text-xl">
            <div>
              $2T
              <div className="text-xs text-white/50 mt-2">
                Protocol trading volume
              </div>
            </div>
            <div>
              1st
              <div className="text-xs text-white/50 mt-2">
                Ecosystem on Uniswap Hooks
              </div>
            </div>
          </div>

          <div>
            <div className="text-xl font-semibold mb-3">
              Uniswap Hook Incubator
            </div>

            <div className="text-white/60 mb-4 text-sm leading-relaxed">
              End-to-end strategy, curriculum, and execution
              supporting builders at protocol scale.
            </div>

            <div
              className="text-sm font-medium"
              style={{ color: "var(--color-primary-600)" }}
            >
              Learn More →
            </div>
          </div>

        </div>
      </div>


      {/* CARD 2 */}
      <div className="relative rounded-3xl overflow-hidden h-[360px]">

        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/90 backdrop-blur-sm" />

        <div className="relative h-full p-8 flex flex-col justify-between">

          <div className="text-white/80 text-2xl font-semibold">
            1st
          </div>

          <div>
            <div className="text-xl font-semibold mb-3">
              Learn Prompting
            </div>
            <div className="text-white/60 text-sm">
              From open guide to scalable learning system.
            </div>
          </div>

        </div>
      </div>


      {/* CARD 3 */}
      <div className="relative rounded-3xl overflow-hidden h-[360px]">

        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/90 backdrop-blur-sm" />

        <div className="relative h-full p-8 flex flex-col justify-end">

          <div className="text-xl font-semibold mb-3">
            LevelUp Academy
          </div>
          <div className="text-white/60 text-sm">
            A system for developing talent internally.
          </div>

        </div>
      </div>


      {/* CARD 4 */}
      <div className="relative rounded-3xl overflow-hidden h-[360px]">

        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black/90 backdrop-blur-sm" />

        <div className="relative h-full p-8 flex flex-col justify-end">

          <div className="text-xl font-semibold mb-3">
            GTM Engineer Foundations
          </div>
          <div className="text-white/60 text-sm">
            Where technical skill meets go-to-market execution.
          </div>

        </div>
      </div>

    </div>

  </div>

</section>


      {/* ================= FINAL CTA ================= */}
<section className="relative py-56 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/hero.jpg"
      alt=""
      className="w-full h-full object-cover scale-110 opacity-70"
    />
  </div>

  {/* Dark Edge Vignette (lighter center) */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.55), rgba(0,0,0,0.9))",
    }}
  />

  {/* Top Blend from Previous Section */}
  <div
    className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
    style={{
      background:
        "linear-gradient(to bottom, var(--color-surface-900), transparent)",
    }}
  />

  <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
    <div className="max-w-[900px] mx-auto flex flex-col gap-16">

      <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
        Build Something That
        <br />
        <span style={{ color: "var(--color-primary-600)" }}>
          Actually Moves People
        </span>
      </h2>

      <p
        style={{
          color: "var(--color-foreground-70)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Let’s design an education experience that changes how people think,
        work, and grow.
      </p>

      <div>
        <div
          className="px-14 py-6 rounded-2xl font-semibold inline-block transition-all duration-300"
          style={{
            background: "var(--color-primary-600)",
            color: "black",
            boxShadow: "0 30px 90px rgba(0,0,0,0.7)",
          }}
        >
          Start a Conversation
        </div>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}
