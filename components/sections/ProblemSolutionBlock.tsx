import React from "react";
import Image from "next/image";
import Columns from "@/components/layout/Columns";
import Typography from "@/components/Typography";

/* ── Position presets for the floating card ── */
type FloatingCardAnchor = "top-left" | "bottom-right" | "center-right" | "lower-right";

const ANCHOR_STYLES: Record<FloatingCardAnchor, React.CSSProperties> = {
  "top-left":     { left: "40px",  top: "0",    transform: "translate(-20%, -20%)" },
  "bottom-right": { right: "40px", bottom: "0", transform: "translate(20%, 20%)"  },
  "center-right": { right: "0",    top: "50%",  transform: "translate(20%, -50%)" },
  "lower-right":  { right: "40px", top: "72%",  transform: "translate(20%, -50%)" },
};

/* ── Component types ── */
export type ProblemSolutionBlockProps = {
  image: string;
  eyebrow?: string;
  title: string;
  description: string;
  bullet: string;
  reverse?: boolean;
  floatingCard?: {
    image: string;
    text: string;
    anchor?: FloatingCardAnchor;
  };
};

export default function ProblemSolutionBlock({
  image,
  eyebrow,
  title,
  description,
  bullet,
  reverse = false,
  floatingCard,
}: ProblemSolutionBlockProps) {
  return (
    <>
      {/* ── MOBILE LAYOUT (<768px) ── */}
      <div className="flex flex-col gap-6 md:hidden">

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-4/3">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Bullet */}
        <div className="flex items-start gap-3">
          <span
            className="w-2 h-2 mt-2 rounded-full shrink-0"
            style={{ background: "var(--color-primary-600)" }}
          />
          <p className="text-[16px] text-white/70 leading-relaxed">{bullet}</p>
        </div>

        {/* Title */}
        <h4 className="text-[22px] font-semibold text-white leading-snug">{title}</h4>

        {/* Description */}
        <p className="text-[17px] text-white/65 leading-relaxed">{description}</p>

      </div>

      {/* ── DESKTOP LAYOUT (≥768px) ── */}
      <Columns mobileStack className="items-center relative hidden md:grid">

        {/* IMAGE SIDE */}
        <div className={`relative ${reverse ? "order-1 md:order-2" : ""}`}>

          <div className="relative aspect-16/10 overflow-hidden rounded-3xl">
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 1536px) 50vw, 720px"
              quality={90}
              className="object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(
                  to top,
                  var(--color-background-900) 0%,
                  rgba(13,13,12,0.85) 18%,
                  rgba(13,13,12,0.65) 35%,
                  rgba(13,13,12,0.35) 55%,
                  transparent 75%
                )`,
              }}
            />
          </div>

          {/* Floating card — desktop only */}
          {floatingCard && (
            <div
              className="hidden md:flex absolute w-90 max-w-[90%] p-5 rounded-2xl backdrop-blur-md bg-surface-900 border border-white/6 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
              style={ANCHOR_STYLES[floatingCard.anchor ?? "bottom-right"]}
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 relative">
                  <Image
                    src={floatingCard.image}
                    alt=""
                    fill
                    sizes="160px"
                    quality={85}
                    className="object-cover"
                  />
                </div>
                <div className="text-[17px] text-white/85 leading-relaxed">
                  {floatingCard.text}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* TEXT SIDE */}
        <div className={`flex flex-col gap-8 md:gap-35 ${reverse ? "order-2 md:order-1" : ""}`}>

          {eyebrow && (
            <div className="text-[13px] tracking-[0.2em] uppercase text-white/40">
              {eyebrow}
            </div>
          )}

          <div className="flex items-start gap-3 text-[15px] text-white/60 leading-relaxed">
            <span
              className="w-2 h-2 mt-2 rounded-full shrink-0"
              style={{ background: "var(--color-primary-600)" }}
            />
            {bullet}
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="h3" className="font-semibold">{title}</Typography>
            <Typography variant="body-2" className="text-white/70 leading-relaxed">
              {description}
            </Typography>
          </div>

        </div>

      </Columns>
    </>
  );
}
