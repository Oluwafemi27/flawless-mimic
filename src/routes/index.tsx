import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Zap,
  BadgeCheck,
  Globe2,
  Menu,
  Play,
  ArrowRight,
  Battery,
  Gauge,
  Sparkles,
  Wallet,
  Cpu,
} from "lucide-react";
import sedanRed from "@/assets/sedan-red.jpg";
import sedanSilver from "@/assets/sedan-silver.jpg";
import sedanBlue from "@/assets/sedan-blue.jpg";
import suvWhite from "@/assets/suv-white.jpg";
import suvBlack from "@/assets/suv-black.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Volthaus Motors — Electric Performance, Reimagined" },
      {
        name: "description",
        content:
          "Volthaus Motors designs long-range electric vehicles built around silent power, software-first interiors, and a global supercharging network.",
      },
      { property: "og:title", content: "Volthaus Motors" },
      {
        property: "og:description",
        content: "Long-range electric vehicles, software-first interiors, global charging network.",
      },
    ],
  }),
  component: Index,
});

const models = [
  { tag: "Most Popular", name: "Volthaus V3", type: "Electric Sedan", range: "358 mi range", power: "510 hp", price: "From $42,990", img: sedanSilver },
  { tag: "Best SUV", name: "Volthaus VY", type: "Electric SUV", range: "330 mi range", power: "384 hp", price: "From $48,990", img: suvWhite },
  { tag: "Flagship", name: "Volthaus VS Plaid", type: "Luxury Sedan", range: "405 mi range", power: "670 hp", price: "From $79,990", img: sedanBlue },
  { tag: "Family Pick", name: "Volthaus VX", type: "Luxury SUV", range: "348 mi range", power: "670 hp", price: "From $84,990", img: suvBlack },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Top trust bar */}
      <div className="bg-bar text-bar-foreground text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-2.5">
          <span className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-success" />EPA Certified Range</span>
          <span className="flex items-center gap-2"><Lock className="h-3.5 w-3.5" />256-bit SSL Secured</span>
          <span className="flex items-center gap-2"><Zap className="h-3.5 w-3.5 text-warning" />Over-the-Air Updates</span>
          <span className="flex items-center gap-2"><BadgeCheck className="h-3.5 w-3.5 text-primary-glow" />40,000+ Owners</span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Volthaus <span className="text-primary">Motors</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#models" className="hover:text-foreground">Vehicles</a>
            <a href="#tech" className="hover:text-foreground">Technology</a>
            <a href="#charging" className="hover:text-foreground">Charging</a>
            <a href="#story" className="hover:text-foreground">Our Story</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#models"
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:bg-primary-glow sm:inline-flex"
            >
              Configure
            </a>
            <button className="rounded-md border border-border p-2 text-foreground md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> 2025 Lineup
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Now Reserving — 18 Markets
              </span>
            </div>
            <h1
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Electric Performance, <span className="text-primary">Reimagined</span> from the Ground Up.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Volthaus builds long-range electric vehicles around three ideas: silent power, a software-first
              cabin, and a global supercharging network you'll never have to think about.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#models"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition hover:bg-primary-glow"
              >
                Configure Your V3 <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#models"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                View All Models
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> Secure Reservation</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5" /> Fully Refundable</span>
              <span className="flex items-center gap-1.5"><Globe2 className="h-3.5 w-3.5" /> Ships Worldwide</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
            <div
              className="rounded-3xl border border-primary/15 p-3 shadow-[var(--shadow-elevated)]"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="overflow-hidden rounded-2xl bg-background">
                <img
                  src={sedanRed}
                  alt="Volthaus V3 electric sedan in red"
                  width={1280}
                  height={960}
                  className="h-auto w-full"
                />
              </div>
              <div className="px-3 pb-3 pt-5 text-center">
                <h3 className="text-xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                  Volthaus V3 Performance
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">0–60 mph in 2.9s · 358 mi range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section id="models" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The Lineup</p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Available Volthaus Vehicles
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four vehicles, one architecture. All 2024–2025 models, delivered to your door with
            white-glove handover.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative">
                <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
                  {m.tag}
                </span>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  {m.name}
                </h3>
                <p className="text-sm text-muted-foreground">{m.type}</p>
                <p className="mt-3 text-sm text-foreground/80">{m.range} · {m.power}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold text-primary">{m.price}</span>
                  <button className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary">
                    Configure <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tech / Why */}
      <section id="tech" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Engineered in-house</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              Built around the battery, not bolted on.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Battery, title: "405 mi Range", body: "Structural pack with cell-to-body integration cuts weight and adds rigidity." },
              { icon: Gauge, title: "2.9s 0–60", body: "Tri-motor drivetrain delivers track-grade torque with cabin-grade quiet." },
              { icon: Cpu, title: "Volt OS", body: "A vehicle that updates like your phone. New features arrive overnight." },
              { icon: Sparkles, title: "White Glove", body: "Delivery, walkthrough, and home-charger install handled by our team." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video / Announcement */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Keynote</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Volthaus 2025 — The Architecture Reveal
          </h2>
          <p className="mt-4 text-muted-foreground">
            Watch our chief engineer walk through the new platform, the cell chemistry, and the
            software stack that ties it together.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elevated)]">
          <div className="relative aspect-video bg-bar">
            <img
              src={sedanRed}
              alt="Keynote preview"
              loading="lazy"
              width={1280}
              height={720}
              className="h-full w-full object-cover opacity-60"
            />
            <button
              aria-label="Play keynote"
              className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elevated)] transition hover:scale-105"
            >
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      {/* Charging */}
      <section id="charging" className="bg-bar text-bar-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">Volthaus Network</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
              50,000 chargers. One account.
            </h2>
            <p className="mt-5 max-w-xl text-bar-foreground/70">
              Plug in, walk away. Your car authenticates, your session bills automatically, and
              your trip plans around live stall availability.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "50k+", v: "Fast chargers" },
                { k: "42", v: "Countries" },
                { k: "15 min", v: "10 → 80%" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-bar-foreground/10 p-4">
                  <div className="text-2xl font-bold text-primary-glow" style={{ fontFamily: "var(--font-display)" }}>
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs text-bar-foreground/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-bar-foreground/10 bg-bar-foreground/5 p-8">
            <div className="flex items-center gap-3 text-sm text-bar-foreground/70">
              <Wallet className="h-4 w-4" /> Estimated cost per 1,000 miles
            </div>
            <div className="mt-2 text-6xl font-bold text-primary-glow" style={{ fontFamily: "var(--font-display)" }}>
              $38
            </div>
            <div className="mt-1 text-sm text-bar-foreground/60">vs. ~$160 for an equivalent gas vehicle</div>
            <div className="mt-8 h-2 overflow-hidden rounded-full bg-bar-foreground/10">
              <div className="h-full w-[24%] rounded-full bg-primary" />
            </div>
            <p className="mt-3 text-xs text-bar-foreground/50">Based on US average residential and DC fast-charge rates.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="story" className="mx-auto max-w-5xl px-5 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
          Ready to drive the next chapter?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Reserve any 2025 Volthaus with a fully refundable deposit. Build, configure, and we'll
          deliver — globally.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#models"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:bg-primary-glow"
          >
            Start Your Configuration <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#tech"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Explore the Technology
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" />
            </div>
            <span className="font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Volthaus Motors
            </span>
          </div>
          <p>© 2025 Volthaus Motors. A fictional brand built for design practice.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Press</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
