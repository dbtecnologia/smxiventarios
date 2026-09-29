'use client'

import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  Cpu,
  FileSpreadsheet,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ScanLine,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'
import {
  benefits,
  navLinks,
  processSteps,
  regions,
  site,
  whatsappUrl,
} from '@/lib/site-content'

const pickerStyle = `
.proto-picker {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2147483647;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: 999px;
  background: rgba(10, 10, 10, 0.82);
  -webkit-backdrop-filter: blur(12px) saturate(1.4);
  backdrop-filter: blur(12px) saturate(1.4);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08) inset,
    0 8px 24px rgba(0, 0, 0, 0.24),
    0 2px 6px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  -webkit-user-select: none;
}

.proto-picker-highlight {
  position: absolute;
  top: 4px;
  left: 0;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  will-change: transform;
}

.proto-picker[data-ready] .proto-picker-highlight {
  transition:
    transform 250ms cubic-bezier(0.23, 1, 0.32, 1),
    width 250ms cubic-bezier(0.23, 1, 0.32, 1);
}

@media (prefers-reduced-motion: reduce) {
  .proto-picker[data-ready] .proto-picker-highlight { transition: none; }
}

.proto-picker-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font: inherit;
  cursor: pointer;
  transition: color 150ms ease-out;
}

.proto-picker-item:hover { color: rgba(255, 255, 255, 0.85); }
.proto-picker-item:active { transform: scale(0.97); }
.proto-picker-item:focus-visible { outline: 2px solid rgba(255, 255, 255, 0.4); outline-offset: 2px; }
.proto-picker-item[data-active] { color: #fff; }
.proto-picker-divider { width: 1px; height: 16px; margin: 0 4px; background: rgba(255, 255, 255, 0.12); }
.proto-picker-replay { padding: 0 10px; font-size: 14px; }

@media (max-width: 520px) {
  .proto-picker { bottom: max(14px, env(safe-area-inset-bottom)); }
  .proto-picker-item { padding-inline: 9px; }
  .proto-picker-replay { padding-inline: 8px; }
}

.proto-page {
  min-height: 100svh;
  overflow: hidden;
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
}
.proto-page *, .proto-page *::before, .proto-page *::after { box-sizing: border-box; }
.proto-page a, .proto-page button { touch-action: manipulation; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; }
.proto-page input, .proto-page textarea, .proto-page select { font-size: 16px; }
.proto-page h1, .proto-page h2, .proto-page h3, .proto-page p { margin: 0; }
.proto-page a { color: inherit; text-decoration: none; }
.proto-page button { font: inherit; }
.proto-container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }
.proto-topline { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 18px 0; }
.proto-logo { display: inline-flex; align-items: center; gap: 10px; font-weight: 800; letter-spacing: -0.04em; }
.proto-logo img { width: 46px; height: 38px; object-fit: cover; object-position: center; mix-blend-mode: multiply; }
.proto-logo span { font-size: 17px; }
.proto-nav { display: flex; align-items: center; gap: 4px; }
.proto-nav a { padding: 9px 11px; font-size: 13px; font-weight: 600; opacity: .66; transition: opacity 150ms ease-out, background 150ms ease-out, transform 150ms ease-out; }
.proto-action { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 46px; padding: 0 18px; border-radius: 999px; font-size: 14px; font-weight: 750; transition: transform 150ms ease-out, background 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out; }
.proto-action:active { transform: scale(.97); }
.proto-eyebrow { display: inline-flex; align-items: center; gap: 9px; font-size: 11px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
.proto-eyebrow::before { content: ''; width: 7px; height: 7px; transform: rotate(45deg); border-radius: 2px; background: #f7bf16; }
.proto-kicker { font-size: 14px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.proto-muted { line-height: 1.7; }
.proto-grid { display: grid; }
.proto-card { border-radius: 22px; }
.proto-reveal { animation: proto-rise 650ms cubic-bezier(.23,1,.32,1) both; }
.proto-delay-1 { animation-delay: 70ms; }
.proto-delay-2 { animation-delay: 140ms; }
.proto-delay-3 { animation-delay: 210ms; }
@keyframes proto-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

/* Corporate: clarity, rhythm, and trust. */
.corporate { --c-bg: #f7f6f2; --c-surface: #fff; --c-ink: #181817; --c-muted: #686864; --c-line: rgba(24,24,23,.12); --c-accent: #f4bd16; background: var(--c-bg); color: var(--c-ink); }
.corporate .proto-header { border-bottom: 1px solid var(--c-line); background: rgba(247,246,242,.82); backdrop-filter: blur(18px); }
.corporate .proto-nav a:hover { background: rgba(24,24,23,.05); opacity: 1; }
.corporate .proto-action-primary { background: var(--c-ink); color: #fff; box-shadow: 0 10px 25px rgba(24,24,23,.12); }
.corporate .proto-action-primary:hover { background: #343430; }
.corporate .proto-action-secondary { border: 1px solid var(--c-line); color: var(--c-ink); }
.corporate .proto-action-secondary:hover { border-color: var(--c-ink); }
.corporate .proto-hero { padding: 86px 0 96px; }
.corporate .proto-hero-grid { grid-template-columns: minmax(0, 1.02fr) minmax(360px,.98fr); align-items: center; gap: 76px; }
.corporate .proto-hero h1 { max-width: 720px; margin-top: 22px; font-family: var(--font-manrope), sans-serif; font-size: clamp(3.6rem, 6.8vw, 6.65rem); line-height: .92; letter-spacing: -.075em; }
.corporate .proto-hero h1 em { display: inline; font-style: normal; background: linear-gradient(transparent 69%, var(--c-accent) 69%); }
.corporate .proto-hero-copy { max-width: 570px; margin-top: 26px; color: var(--c-muted); font-size: 18px; }
.corporate .proto-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 34px; }
.corporate .proto-hero-media { position: relative; }
.corporate .proto-hero-media::before { content: ''; position: absolute; top: -26px; right: -24px; width: 112px; height: 112px; border-radius: 28px; background: var(--c-accent); transform: rotate(45deg); }
.corporate .proto-image-frame { position: relative; overflow: hidden; border: 1px solid var(--c-line); border-radius: 28px; background: #deddd7; box-shadow: 0 24px 70px rgba(24,24,23,.12); }
.corporate .proto-image-frame img { display: block; width: 100%; height: 570px; object-fit: cover; }
.corporate .proto-overlay-card { position: absolute; right: 22px; bottom: 22px; width: min(250px, calc(100% - 44px)); padding: 18px; border: 1px solid rgba(255,255,255,.36); border-radius: 17px; background: rgba(24,24,23,.82); color: #fff; backdrop-filter: blur(14px); }
.corporate .proto-overlay-card strong { display: block; color: var(--c-accent); font-family: var(--font-manrope), sans-serif; font-size: 36px; line-height: 1; letter-spacing: -.08em; }
.corporate .proto-overlay-card span { display: block; margin-top: 7px; color: rgba(255,255,255,.74); font-size: 12px; line-height: 1.4; }
.corporate .proto-proof { border-block: 1px solid var(--c-line); background: var(--c-ink); color: #fff; }
.corporate .proto-proof-grid { grid-template-columns: 1.15fr repeat(4, 1fr); align-items: center; }
.corporate .proto-proof-item { min-height: 100px; display: flex; align-items: center; gap: 11px; border-left: 1px solid rgba(255,255,255,.13); padding: 18px 20px; color: rgba(255,255,255,.76); font-size: 13px; line-height: 1.35; }
.corporate .proto-proof-item:first-child { border-left: 0; }
.corporate .proto-proof-item strong { color: var(--c-accent); font-family: var(--font-manrope), sans-serif; font-size: 50px; line-height: .8; letter-spacing: -.08em; }
.corporate .proto-section { padding: 112px 0; }
.corporate .proto-section-tint { background: #ebeae4; }
.corporate .proto-section-head { display: flex; justify-content: space-between; align-items: end; gap: 30px; }
.corporate .proto-section-head h2 { max-width: 650px; margin-top: 18px; font-family: var(--font-manrope), sans-serif; font-size: clamp(2.2rem, 4vw, 4.1rem); line-height: .98; letter-spacing: -.065em; }
.corporate .proto-section-head p { max-width: 350px; color: var(--c-muted); font-size: 15px; }
.corporate .proto-steps { grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 48px; }
.corporate .proto-step { padding: 24px; border: 1px solid var(--c-line); background: rgba(255,255,255,.58); }
.corporate .proto-step b { display: flex; width: 40px; height: 40px; align-items: center; justify-content: center; border-radius: 12px; background: var(--c-accent); font-family: var(--font-manrope), sans-serif; }
.corporate .proto-step h3 { margin-top: 30px; font-size: 18px; line-height: 1.1; letter-spacing: -.03em; }
.corporate .proto-step p { margin-top: 10px; color: var(--c-muted); font-size: 13px; line-height: 1.55; }
.corporate .proto-service-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 48px; }
.corporate .proto-service { padding: 26px; border: 1px solid var(--c-line); border-radius: 18px; background: var(--c-surface); transition: transform 180ms ease-out, box-shadow 180ms ease-out; }
.corporate .proto-service:hover { transform: translateY(-4px); box-shadow: 0 16px 34px rgba(24,24,23,.09); }
.corporate .proto-service svg { color: var(--c-accent); }
.corporate .proto-service h3 { margin-top: 22px; font-size: 18px; letter-spacing: -.025em; }
.corporate .proto-service p { margin-top: 8px; color: var(--c-muted); font-size: 13px; line-height: 1.55; }
.corporate .proto-contact { display: grid; grid-template-columns: 1.1fr .9fr; gap: 30px; align-items: end; padding: 46px; border-radius: 24px; background: var(--c-accent); }
.corporate .proto-contact h2 { max-width: 620px; font-family: var(--font-manrope), sans-serif; font-size: clamp(2.4rem,4vw,4.3rem); line-height: .98; letter-spacing: -.07em; }
.corporate .proto-contact p { max-width: 500px; margin-top: 16px; color: rgba(24,24,23,.7); line-height: 1.6; }
.corporate .proto-contact-actions { display: flex; flex-direction: column; align-items: stretch; gap: 10px; }
.corporate .proto-contact-actions .proto-action { background: var(--c-ink); color: #fff; }

/* Signal: a dark, technical operating view. */
.signal { --s-bg: #0e1112; --s-surface: #151a1b; --s-line: rgba(255,255,255,.13); --s-ink: #f3f5f3; --s-muted: #9ba39e; --s-accent: #f4c11c; background: var(--s-bg); color: var(--s-ink); }
.signal .proto-header { border-bottom: 1px solid var(--s-line); background: rgba(14,17,18,.74); backdrop-filter: blur(18px); }
.signal .proto-page-grid { background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px); background-size: 64px 64px; }
.signal .proto-nav a:hover { background: rgba(255,255,255,.08); opacity: 1; }
.signal .proto-action-primary { background: var(--s-accent); color: #171714; }
.signal .proto-action-primary:hover { background: #ffd34f; }
.signal .proto-action-secondary { border: 1px solid var(--s-line); color: var(--s-ink); }
.signal .proto-action-secondary:hover { background: rgba(255,255,255,.07); }
.signal .proto-hero { padding: 80px 0 92px; }
.signal .proto-hero-grid { grid-template-columns: minmax(0,1fr) minmax(360px,.86fr); gap: 72px; align-items: end; }
.signal .proto-hero h1 { max-width: 780px; margin-top: 21px; font-family: var(--font-manrope), sans-serif; font-size: clamp(3.8rem, 7vw, 7.7rem); line-height: .88; letter-spacing: -.085em; }
.signal .proto-hero h1 span { color: var(--s-accent); }
.signal .proto-hero-copy { max-width: 540px; margin-top: 25px; color: var(--s-muted); font-size: 18px; line-height: 1.65; }
.signal .proto-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
.signal .proto-command { position: relative; overflow: hidden; border: 1px solid var(--s-line); border-radius: 18px; background: var(--s-surface); box-shadow: 0 24px 80px rgba(0,0,0,.25); }
.signal .proto-command-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid var(--s-line); color: var(--s-muted); font-family: ui-monospace, monospace; font-size: 11px; }
.signal .proto-command-status { color: var(--s-accent); }
.signal .proto-command-body { padding: 22px; }
.signal .proto-command-image { display: block; width: 100%; height: 230px; border-radius: 11px; object-fit: cover; filter: saturate(.72) contrast(1.08); }
.signal .proto-data-list { margin-top: 21px; border-top: 1px solid var(--s-line); }
.signal .proto-data-row { display: flex; justify-content: space-between; gap: 20px; padding: 13px 0; border-bottom: 1px solid var(--s-line); color: var(--s-muted); font-family: ui-monospace, monospace; font-size: 12px; }
.signal .proto-data-row b { color: var(--s-ink); font-weight: 500; }
.signal .proto-data-row b::before { content: '→'; margin-right: 8px; color: var(--s-accent); }
.signal .proto-proof { border-block: 1px solid var(--s-line); background: var(--s-accent); color: #171714; }
.signal .proto-proof-grid { grid-template-columns: 1.2fr repeat(3,1fr); }
.signal .proto-proof-item { min-height: 114px; padding: 24px; border-left: 1px solid rgba(23,23,20,.16); font-size: 13px; font-weight: 650; line-height: 1.35; }
.signal .proto-proof-item:first-child { border-left: 0; }
.signal .proto-proof-item strong { display: block; margin-bottom: 5px; font-family: ui-monospace, monospace; font-size: 11px; text-transform: uppercase; opacity: .62; }
.signal .proto-proof-item:first-child strong { font-size: 44px; line-height: .8; letter-spacing: -.08em; opacity: 1; }
.signal .proto-section { padding: 110px 0; }
.signal .proto-section-tint { border-top: 1px solid var(--s-line); background: #121718; }
.signal .proto-section-head h2 { max-width: 680px; margin-top: 18px; font-family: var(--font-manrope), sans-serif; font-size: clamp(2.4rem, 4vw, 4.7rem); line-height: .94; letter-spacing: -.075em; }
.signal .proto-section-head p { max-width: 500px; margin-top: 20px; color: var(--s-muted); line-height: 1.65; }
.signal .proto-steps { grid-template-columns: repeat(4,1fr); gap: 1px; margin-top: 48px; border: 1px solid var(--s-line); background: var(--s-line); }
.signal .proto-step { min-height: 230px; padding: 25px; background: var(--s-bg); }
.signal .proto-step b { color: var(--s-accent); font-family: ui-monospace, monospace; font-size: 13px; }
.signal .proto-step h3 { margin-top: 66px; font-size: 18px; line-height: 1.12; letter-spacing: -.03em; }
.signal .proto-step p { margin-top: 10px; color: var(--s-muted); font-size: 13px; line-height: 1.55; }
.signal .proto-service-grid { grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 48px; }
.signal .proto-service { padding: 24px; border: 1px solid var(--s-line); background: rgba(255,255,255,.025); transition: transform 180ms ease-out, border-color 180ms ease-out, background 180ms ease-out; }
.signal .proto-service:hover { transform: translateY(-4px); border-color: rgba(244,193,28,.7); background: rgba(244,193,28,.06); }
.signal .proto-service svg { color: var(--s-accent); }
.signal .proto-service h3 { margin-top: 20px; font-size: 17px; }
.signal .proto-service p { margin-top: 8px; color: var(--s-muted); font-size: 13px; line-height: 1.55; }
.signal .proto-contact { display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: center; padding: 42px; border: 1px solid var(--s-line); background: var(--s-surface); }
.signal .proto-contact h2 { max-width: 650px; font-family: var(--font-manrope), sans-serif; font-size: clamp(2.3rem, 4vw, 4.4rem); line-height: .94; letter-spacing: -.075em; }
.signal .proto-contact p { max-width: 560px; margin-top: 16px; color: var(--s-muted); line-height: 1.6; }
.signal .proto-contact-actions { display: flex; flex-direction: column; gap: 10px; min-width: 210px; }

/* Pipeline: conversation first, designed to turn intent into a contact. */
.pipeline { --p-bg: #f3eee5; --p-surface: #fffdf8; --p-ink: #28231e; --p-muted: #756d63; --p-line: rgba(40,35,30,.16); --p-accent: #efb820; background: var(--p-bg); color: var(--p-ink); }
.pipeline .proto-header { border-bottom: 1px solid var(--p-line); background: rgba(243,238,229,.85); backdrop-filter: blur(18px); }
.pipeline .proto-nav a:hover { background: rgba(40,35,30,.06); opacity: 1; }
.pipeline .proto-action-primary { background: var(--p-accent); color: var(--p-ink); box-shadow: 0 12px 24px rgba(239,184,32,.2); }
.pipeline .proto-action-primary:hover { background: #f8ce45; }
.pipeline .proto-action-secondary { border: 1px solid var(--p-line); background: rgba(255,253,248,.5); }
.pipeline .proto-action-secondary:hover { background: var(--p-surface); }
.pipeline .proto-hero { padding: 50px 0 80px; }
.pipeline .proto-hero-grid { grid-template-columns: minmax(0,1.06fr) minmax(340px,.94fr); align-items: stretch; gap: 22px; }
.pipeline .proto-lead-card { display: flex; flex-direction: column; justify-content: space-between; min-height: 650px; padding: clamp(28px,5vw,64px); border-radius: 28px; background: var(--p-ink); color: #fffdf8; }
.pipeline .proto-lead-card h1 { max-width: 680px; margin-top: 24px; font-family: var(--font-manrope), sans-serif; font-size: clamp(3.5rem, 6.4vw, 6.8rem); line-height: .9; letter-spacing: -.085em; }
.pipeline .proto-lead-card h1 span { color: var(--p-accent); }
.pipeline .proto-lead-copy { max-width: 540px; margin-top: 24px; color: rgba(255,253,248,.68); font-size: 18px; line-height: 1.65; }
.pipeline .proto-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 32px; }
.pipeline .proto-lead-card .proto-action-secondary { border-color: rgba(255,253,248,.24); color: #fffdf8; }
.pipeline .proto-lead-card .proto-action-secondary:hover { background: rgba(255,253,248,.1); }
.pipeline .proto-contact-card { display: flex; flex-direction: column; justify-content: space-between; min-height: 650px; padding: 30px; border: 1px solid var(--p-line); border-radius: 28px; background: var(--p-surface); }
.pipeline .proto-contact-card h2 { max-width: 330px; margin-top: 16px; font-family: var(--font-manrope), sans-serif; font-size: 35px; line-height: .98; letter-spacing: -.065em; }
.pipeline .proto-contact-card > p { margin-top: 14px; color: var(--p-muted); font-size: 14px; line-height: 1.6; }
.pipeline .proto-contact-links { margin-top: 32px; border-top: 1px solid var(--p-line); }
.pipeline .proto-contact-link { display: flex; align-items: center; gap: 12px; padding: 15px 0; border-bottom: 1px solid var(--p-line); font-size: 14px; }
.pipeline .proto-contact-link svg { color: var(--p-accent); }
.pipeline .proto-contact-card .proto-action { width: 100%; margin-top: 25px; }
.pipeline .proto-contact-image { width: 100%; height: 190px; margin-top: 30px; border-radius: 18px; object-fit: cover; }
.pipeline .proto-proof { border-block: 1px solid var(--p-line); background: var(--p-accent); }
.pipeline .proto-proof-grid { grid-template-columns: 1.1fr repeat(3,1fr); }
.pipeline .proto-proof-item { min-height: 112px; padding: 24px; border-left: 1px solid rgba(40,35,30,.16); font-size: 13px; line-height: 1.4; }
.pipeline .proto-proof-item:first-child { border-left: 0; }
.pipeline .proto-proof-item strong { display: block; margin-bottom: 6px; font-family: var(--font-manrope), sans-serif; font-size: 31px; line-height: 1; letter-spacing: -.07em; }
.pipeline .proto-section { padding: 100px 0; }
.pipeline .proto-section-head { display: flex; align-items: end; justify-content: space-between; gap: 32px; }
.pipeline .proto-section-head h2 { max-width: 650px; margin-top: 17px; font-family: var(--font-manrope), sans-serif; font-size: clamp(2.4rem,4vw,4.4rem); line-height: .94; letter-spacing: -.075em; }
.pipeline .proto-section-head p { max-width: 360px; color: var(--p-muted); font-size: 15px; line-height: 1.6; }
.pipeline .proto-service-grid { grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 45px; }
.pipeline .proto-service { min-height: 235px; padding: 25px; border: 1px solid var(--p-line); border-radius: 20px; background: var(--p-surface); transition: transform 180ms ease-out, box-shadow 180ms ease-out; }
.pipeline .proto-service:hover { transform: translateY(-4px); box-shadow: 0 14px 28px rgba(40,35,30,.09); }
.pipeline .proto-service svg { color: var(--p-accent); }
.pipeline .proto-service h3 { margin-top: 22px; font-size: 18px; letter-spacing: -.03em; }
.pipeline .proto-service p { margin-top: 9px; color: var(--p-muted); font-size: 13px; line-height: 1.55; }
.pipeline .proto-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-top: 42px; }
.pipeline .proto-step { padding: 21px 0; border-top: 1px solid var(--p-line); }
.pipeline .proto-step b { color: var(--p-accent); font-family: ui-monospace, monospace; font-size: 12px; }
.pipeline .proto-step h3 { margin-top: 17px; font-size: 17px; line-height: 1.1; }
.pipeline .proto-step p { margin-top: 9px; color: var(--p-muted); font-size: 13px; line-height: 1.5; }
.pipeline .proto-coverage { margin-top: 12px; padding: 32px; border-radius: 22px; background: var(--p-ink); color: #fffdf8; }
.pipeline .proto-coverage h2 { font-family: var(--font-manrope), sans-serif; font-size: 28px; letter-spacing: -.05em; }
.pipeline .proto-region-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.pipeline .proto-region-list span { padding: 8px 11px; border: 1px solid rgba(255,253,248,.2); border-radius: 999px; color: rgba(255,253,248,.76); font-size: 12px; }

@media (hover: hover) and (pointer: fine) {
  .proto-nav a:hover { transform: translateY(-1px); }
}
@media (max-width: 900px) {
  .proto-container { width: min(100% - 28px, 720px); }
  .proto-nav { display: none; }
  .proto-hero-grid, .corporate .proto-hero-grid, .signal .proto-hero-grid, .pipeline .proto-hero-grid { grid-template-columns: 1fr; gap: 38px; }
  .corporate .proto-hero, .signal .proto-hero { padding: 65px 0 70px; }
  .corporate .proto-image-frame img { height: 450px; }
  .corporate .proto-proof-grid, .signal .proto-proof-grid, .pipeline .proto-proof-grid { grid-template-columns: repeat(2,1fr); }
  .corporate .proto-proof-item:first-child, .signal .proto-proof-item:first-child, .pipeline .proto-proof-item:first-child { grid-column: 1 / -1; border-left: 0; }
  .corporate .proto-steps, .signal .proto-steps, .pipeline .proto-steps { grid-template-columns: repeat(2,1fr); }
  .corporate .proto-service-grid, .signal .proto-service-grid, .pipeline .proto-service-grid { grid-template-columns: repeat(2,1fr); }
  .corporate .proto-contact, .signal .proto-contact { grid-template-columns: 1fr; }
  .pipeline .proto-lead-card, .pipeline .proto-contact-card { min-height: auto; }
}
@media (max-width: 560px) {
  .proto-container { width: min(100% - 24px, 480px); }
  .proto-topline { padding: 12px 0; }
  .proto-logo img { width: 40px; height: 33px; }
  .proto-logo span { font-size: 15px; }
  .proto-topline > .proto-action { min-height: 40px; padding-inline: 13px; font-size: 12px; }
  .corporate .proto-hero, .signal .proto-hero { padding: 48px 0 54px; }
  .corporate .proto-hero h1, .signal .proto-hero h1, .pipeline .proto-lead-card h1 { font-size: clamp(3.1rem, 15vw, 5rem); }
  .corporate .proto-hero-copy, .signal .proto-hero-copy, .pipeline .proto-lead-copy { font-size: 16px; }
  .corporate .proto-image-frame img { height: 370px; }
  .corporate .proto-proof-grid, .signal .proto-proof-grid, .pipeline .proto-proof-grid, .corporate .proto-steps, .signal .proto-steps, .pipeline .proto-steps, .corporate .proto-service-grid, .signal .proto-service-grid, .pipeline .proto-service-grid { grid-template-columns: 1fr; }
  .corporate .proto-proof-item, .signal .proto-proof-item, .pipeline .proto-proof-item { min-height: auto; border-left: 0; border-top: 1px solid rgba(255,255,255,.13); }
  .signal .proto-proof-item, .pipeline .proto-proof-item { border-top-color: rgba(40,35,30,.16); }
  .corporate .proto-proof-item:first-child, .signal .proto-proof-item:first-child, .pipeline .proto-proof-item:first-child { border-top: 0; }
  .corporate .proto-section, .signal .proto-section, .pipeline .proto-section { padding: 70px 0; }
  .corporate .proto-section-head, .pipeline .proto-section-head { display: block; }
  .corporate .proto-section-head p, .pipeline .proto-section-head p { margin-top: 17px; }
  .corporate .proto-contact, .signal .proto-contact { padding: 28px 22px; }
  .pipeline .proto-lead-card, .pipeline .proto-contact-card { padding: 27px 22px; border-radius: 22px; }
  .pipeline .proto-contact-card { margin-top: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .proto-page *, .proto-page *::before, .proto-page *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
}
`

type VariantProps = { replayKey: number }

function ProtoHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className="proto-header">
      <div className="proto-container proto-topline">
        <a className="proto-logo" href="#inicio" aria-label="SMX Inventários, início">
          <Image src="/images/logo-smx.jpg" alt="SMX Inventários" width={1024} height={871} priority />
          <span>SMX Inventários</span>
        </a>
        <nav className="proto-nav" aria-label="Principal">
          {navLinks.slice(0, 5).map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="proto-action proto-action-primary" href="#contato">
          Solicitar orçamento <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}

function ProofBar({ variant }: { variant: 'corporate' | 'signal' | 'pipeline' }) {
  const items =
    variant === 'corporate'
      ? [
          { value: String(site.yearsInMarket), label: 'anos de experiência' },
          { icon: UserCheck, label: 'Liderança experiente em campo' },
          { icon: Cpu, label: 'Software próprio de contagem' },
          { icon: ClipboardCheck, label: 'Análise de divergências' },
          { icon: FileSpreadsheet, label: 'Relatórios comparativos' },
        ]
      : variant === 'signal'
        ? [
            { value: String(site.yearsInMarket), label: 'anos de operação' },
            { icon: ScanLine, label: 'Contagem com coletores' },
            { icon: BarChart3, label: 'Divergências analisadas' },
            { icon: FileSpreadsheet, label: 'Arquivos para o sistema' },
          ]
        : [
            { value: String(site.yearsInMarket), label: 'anos entendendo o varejo' },
            { icon: UserCheck, label: 'Equipe treinada em campo' },
            { icon: ShieldCheck, label: 'Mais controle e menos perdas' },
            { icon: MessageCircle, label: 'Orçamento sem compromisso' },
          ]

  return (
    <section className="proto-proof" aria-label="Credibilidade">
      <div className="proto-container proto-proof-grid">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <div className="proto-proof-item" key={item.label}>
              {item.value ? <strong>{item.value}</strong> : Icon ? <Icon size={19} aria-hidden="true" /> : null}
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Services({ variant }: { variant: 'corporate' | 'signal' | 'pipeline' }) {
  const iconSet = [BoxesIcon, ShieldCheck, ScanLine, BarChart3, Cpu, FileSpreadsheet]
  return (
    <section className="proto-section" id="servicos" aria-labelledby={`${variant}-services-title`}>
      <div className="proto-container">
        <div className="proto-section-head">
          <div>
            <p className="proto-eyebrow">Onde a SMX ajuda</p>
            <h2 id={`${variant}-services-title`}>Controle de estoque que apoia a gestão.</h2>
          </div>
          <p>Uma operação completa para transformar contagem, análise e atualização em decisões mais seguras.</p>
        </div>
        <div className="proto-service-grid">
          {benefits.map((benefit, index) => {
            const Icon = iconSet[index]
            return (
              <article className="proto-service" key={benefit.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function BoxesIcon(props: React.ComponentProps<typeof BarChart3>) {
  return <BarChart3 {...props} />
}

function ContactBlock({ variant }: { variant: 'corporate' | 'signal' | 'pipeline' }) {
  return (
    <section className="proto-section" id="contato" aria-labelledby={`${variant}-contact-title`}>
      <div className="proto-container">
        <div className="proto-contact">
          <div>
            <p className="proto-eyebrow">Próximo passo</p>
            <h2 id={`${variant}-contact-title`}>Sua empresa sabe exatamente o que tem em estoque?</h2>
            <p>Solicite uma visita técnica ou um orçamento sem compromisso e conheça uma nova forma de gerir seu estoque.</p>
          </div>
          <div className="proto-contact-actions">
            <a className="proto-action" href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden="true" /> Enviar e-mail
            </a>
            <a className="proto-action" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={16} aria-hidden="true" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CorporateVariant({ replayKey }: VariantProps) {
  return (
    <div className="corporate proto-page" key={replayKey}>
      <ProtoHeader />
      <main className="proto-page-grid">
        <section className="proto-hero" id="inicio">
          <div className="proto-container proto-hero-grid">
            <div className="proto-reveal">
              <p className="proto-eyebrow">Inventário e gestão de estoques</p>
              <h1>O estoque certo começa com uma <em>contagem precisa.</em></h1>
              <p className="proto-hero-copy">Conte com equipe especializada, tecnologia própria e relatórios completos para conhecer seu estoque, identificar divergências e reduzir perdas.</p>
              <div className="proto-actions">
                <a className="proto-action proto-action-primary" href="#contato">Solicitar orçamento <ArrowRight size={15} aria-hidden="true" /></a>
                <a className="proto-action proto-action-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" /> Falar no WhatsApp</a>
              </div>
            </div>
            <div className="proto-hero-media proto-reveal proto-delay-1">
              <div className="proto-image-frame"><Image src="/images/hero-inventario.png" alt="Equipe de inventário usando coletores de dados em um supermercado" width={1312} height={816} priority /></div>
              <div className="proto-overlay-card"><strong>{site.yearsInMarket}</strong><span>anos de experiência em consultoria e varejo</span></div>
            </div>
          </div>
        </section>
        <ProofBar variant="corporate" />
        <section className="proto-section proto-section-tint" id="solucoes">
          <div className="proto-container">
            <div className="proto-section-head"><div><p className="proto-eyebrow">Solução de inventário</p><h2>Do planejamento ao saldo atualizado.</h2></div><p>Conhecido no varejo como “balanço”, o inventário confronta entradas e saídas para chegar ao saldo correto no sistema e no físico.</p></div>
            <div className="proto-steps">{processSteps.map((step, index) => <article className="proto-step" key={step.title}><b>{String(index + 1).padStart(2, '0')}</b><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
          </div>
        </section>
        <Services variant="corporate" />
        <ContactBlock variant="corporate" />
      </main>
    </div>
  )
}

function SignalVariant({ replayKey }: VariantProps) {
  return (
    <div className="signal proto-page" key={replayKey}>
      <ProtoHeader />
      <main className="proto-page-grid">
        <section className="proto-hero" id="inicio">
          <div className="proto-container proto-hero-grid">
            <div className="proto-reveal"><p className="proto-eyebrow">SMX / inventory intelligence</p><h1>Mais sinal. <span>Menos dúvida.</span></h1><p className="proto-hero-copy">Inventário profissional para transformar o que acontece no estoque em informação pronta para agir.</p><div className="proto-actions"><a className="proto-action proto-action-primary" href="#contato">Mapear meu estoque <ArrowRight size={15} aria-hidden="true" /></a><a className="proto-action proto-action-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" /> Falar com a equipe</a></div></div>
            <div className="proto-command proto-reveal proto-delay-1"><div className="proto-command-head"><span>smx / operação</span><span className="proto-command-status">● sincronizado</span></div><div className="proto-command-body"><Image className="proto-command-image" src="/images/analise-relatorio.png" alt="Relatório de estoque ao lado de um coletor de dados" width={1024} height={768} /><div className="proto-data-list"><div className="proto-data-row"><span>equipe</span><b>treinada em campo</b></div><div className="proto-data-row"><span>contagem</span><b>com coletores</b></div><div className="proto-data-row"><span>saída</span><b>relatórios + arquivos</b></div></div></div></div>
          </div>
        </section>
        <ProofBar variant="signal" />
        <section className="proto-section proto-section-tint" id="solucoes"><div className="proto-container"><div className="proto-section-head"><p className="proto-eyebrow">Pipeline operacional</p><h2>Uma sequência clara para cada inventário.</h2><p>Planejar, contar, conferir e entregar. A SMX combina pessoas, equipamentos e software próprio em uma operação rastreável.</p></div><div className="proto-steps">{processSteps.map((step, index) => <article className="proto-step" key={step.title}><b>0{index + 1} / 04</b><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>
        <Services variant="signal" />
        <ContactBlock variant="signal" />
      </main>
    </div>
  )
}

function PipelineVariant({ replayKey }: VariantProps) {
  const stateNames = regions.flatMap((region) => region.states.map((state) => state.name))
  return (
    <div className="pipeline proto-page" key={replayKey}>
      <ProtoHeader />
      <main className="proto-page-grid">
        <section className="proto-hero" id="inicio"><div className="proto-container proto-hero-grid"><div className="proto-lead-card proto-reveal"><div><p className="proto-eyebrow">Inventário sem achismo</p><h1>Descubra o saldo real do seu <span>estoque.</span></h1><p className="proto-lead-copy">A SMX organiza a operação, realiza a contagem e entrega a leitura que sua gestão precisa para decidir melhor.</p><div className="proto-actions"><a className="proto-action proto-action-primary" href="#contato">Quero um orçamento <ArrowRight size={15} aria-hidden="true" /></a><a className="proto-action proto-action-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" /> WhatsApp</a></div></div><p className="proto-kicker" style={{ color: '#f4c11c' }}>20 anos entendendo o varejo</p></div><aside className="proto-contact-card proto-reveal proto-delay-1" id="contato"><div><p className="proto-eyebrow">Fale com a SMX</p><h2>Vamos entender seu próximo inventário?</h2><p>Conte um pouco sobre sua operação e nossa equipe retorna para alinhar o melhor formato.</p><div className="proto-contact-links"><a className="proto-contact-link" href={`mailto:${site.email}`}><Mail size={18} aria-hidden="true" /><span>{site.email}</span></a><a className="proto-contact-link" href={`tel:${site.phones[0].tel}`}><Phone size={18} aria-hidden="true" /><span>{site.phones[0].display}</span></a><a className="proto-contact-link" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" /><span>{site.whatsapp[0].display} · WhatsApp</span></a><div className="proto-contact-link"><MapPin size={18} aria-hidden="true" /><span>{site.city} – {site.stateCode}</span></div></div></div><div><Image className="proto-contact-image" src="/images/deposito-contagem.png" alt="Profissional contando caixas em um depósito" width={1024} height={1280} /></div></aside></div></section>
        <ProofBar variant="pipeline" />
        <Services variant="pipeline" />
        <section className="proto-section proto-section-tint" id="solucoes"><div className="proto-container"><div className="proto-section-head"><div><p className="proto-eyebrow">Como funciona</p><h2>Uma operação que termina em resposta.</h2></div><p>Mais do que contar produtos, a SMX organiza o local, analisa os resultados e aponta divergências e condições físicas.</p></div><div className="proto-steps">{processSteps.map((step, index) => <article className="proto-step" key={step.title}><b>etapa {index + 1}</b><h3>{step.title}</h3><p>{step.description}</p></article>)}</div><div className="proto-coverage"><h2>Atendimento onde sua operação precisa</h2><div className="proto-region-list">{stateNames.map((state) => <span key={state}>{state}</span>)}</div></div></div></section>
      </main>
    </div>
  )
}

const variants = [
  { name: 'Clarity', axis: 'Corporativa · confiança e ritmo', render: CorporateVariant },
  { name: 'Signal', axis: 'Tecnológica · dados e precisão', render: SignalVariant },
  { name: 'Pipeline', axis: 'Contato · conversão e clareza', render: PipelineVariant },
]

export default function SMXPrototypePage() {
  const [current, setCurrent] = useState(0)
  const [replayKey, setReplayKey] = useState(0)
  const pickerRef = useRef<HTMLElement>(null)
  const highlightRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const fromUrl = Number(new URLSearchParams(window.location.search).get('v'))
    if (fromUrl >= 1 && fromUrl <= variants.length) setCurrent(fromUrl - 1)
  }, [])

  const moveHighlight = () => {
    const picker = pickerRef.current
    const highlight = highlightRef.current
    const item = picker?.querySelector<HTMLElement>(`[data-variant-index="${current}"]`)
    if (!picker || !highlight || !item) return
    highlight.style.width = `${item.offsetWidth}px`
    highlight.style.transform = `translateX(${item.offsetLeft}px)`
  }

  useLayoutEffect(() => {
    moveHighlight()
  }, [current])

  useEffect(() => {
    const handleResize = () => moveHighlight()
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable) return
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const number = Number.parseInt(event.key, 10)
      if (number >= 1 && number <= variants.length) setActive(number - 1)
      else if (event.key === 'ArrowRight') setActive((current + 1) % variants.length)
      else if (event.key === 'ArrowLeft') setActive((current - 1 + variants.length) % variants.length)
      else if (event.key.toLowerCase() === 'r') setReplayKey((value) => value + 1)
    }
    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleKey)
    return () => { window.removeEventListener('resize', handleResize); document.removeEventListener('keydown', handleKey) }
  }, [current])

  function setActive(index: number) {
    if (index < 0 || index >= variants.length) return
    setCurrent(index)
    const url = new URL(window.location.href)
    url.searchParams.set('v', String(index + 1))
    window.history.replaceState(null, '', url)
  }

  const ActiveVariant = variants[current].render

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pickerStyle }} />
      <div className="proto-stage"><ActiveVariant replayKey={replayKey} /></div>
      <nav className="proto-picker" ref={pickerRef} aria-label="Prototype variants">
        <span className="proto-picker-highlight" ref={highlightRef} aria-hidden="true" />
        {variants.map((variant, index) => (
          <button key={variant.name} className="proto-picker-item" data-variant-index={index} data-active={current === index ? '' : undefined} aria-current={current === index ? 'true' : undefined} title={variant.axis} onClick={() => setActive(index)}>
            {variant.name}
          </button>
        ))}
        <span className="proto-picker-divider" aria-hidden="true" />
        <button className="proto-picker-item proto-picker-replay" aria-label="Replay animation (R)" onClick={() => setReplayKey((value) => value + 1)}>↻</button>
      </nav>
    </>
  )
}

