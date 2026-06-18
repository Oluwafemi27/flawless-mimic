import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Lock,
  Zap,
  BadgeCheck,
  Globe2,
  Menu,
  X,
  Play,
  ArrowRight,
  Battery,
  Gauge,
  Sparkles,
  Wallet,
  Cpu,
  CheckCircle2,
  Users,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import sedanRed from "@/assets/sedan-red.jpg";
import sedanSilver from "@/assets/sedan-silver.jpg";
import sedanBlue from "@/assets/sedan-blue.jpg";
import suvWhite from "@/assets/suv-white.jpg";
import suvBlack from "@/assets/suv-black.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tesla Motors — Electric Performance, Reimagined" },
      {
        name: "description",
        content:
          "Volthaus Motors designs long-range electric vehicles built around silent power, software-first interiors, and a global supercharging network.",
      },
      { property: "og:title", content: "Tesla Motors" },
      {
        property: "og:description",
        content: "Long-range electric vehicles, software-first interiors, global charging network.",
      },
    ],
  }),
  component: Index,
});

const models = [
  {
    tag: "Most Popular",
    name: "Tesla Model 3",
    type: "Electric Sedan",
    range: "358 mi range",
    power: "510 hp",
    price: "From $42,990",
    img: sedanSilver,
  },
  {
    tag: "Best SUV",
    name: "Tesla Model Y",
    type: "Electric SUV",
    range: "330 mi range",
    power: "384 hp",
    price: "From $48,990",
    img: suvWhite,
  },
  {
    tag: "Flagship",
    name: "Tesla Model S Plaid",
    type: "Luxury Sedan",
    range: "405 mi range",
    power: "670 hp",
    price: "From $79,990",
    img: sedanBlue,
  },
  {
    tag: "Family Pick",
    name: "Tesla Model X",
    type: "Luxury SUV",
    range: "348 mi range",
    power: "670 hp",
    price: "From $84,990",
    img: suvBlack,
  },
];

const transactions = [
  { name: "James O.", country: "🇺🇸", model: "Model 3 2024", fee: "$299" },
  { name: "Sophie M.", country: "🇬🇧", model: "Model Y 2024", fee: "$349" },
  { name: "Carlos R.", country: "🇲🇽", model: "Model S 2025", fee: "$399" },
  { name: "Yuki T.", country: "🇯🇵", model: "Model X 2024", fee: "$249" },
  { name: "Emma W.", country: "🇨🇦", model: "Model Y 2025", fee: "$329" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTxIndex, setCurrentTxIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  // Auto-rotate transactions with popup show/hide
  useEffect(() => {
    const cycle = () => {
      setShowNotification(true);
      const showTimer = setTimeout(() => {
        setShowNotification(false);
        const hideTimer = setTimeout(() => {
          setCurrentTxIndex((prev) => (prev + 1) % transactions.length);
        }, 400);
        return () => clearTimeout(hideTimer);
      }, 3500);
      return () => clearTimeout(showTimer);
    };

    cycle();
    const rotateInterval = setInterval(() => {
      setShowNotification(true);
      const showTimer = setTimeout(() => {
        setShowNotification(false);
        const hideTimer = setTimeout(() => {
          setCurrentTxIndex((prev) => (prev + 1) % transactions.length);
        }, 400);
        return () => clearTimeout(hideTimer);
      }, 3500);
      return () => {
        clearTimeout(showTimer);
      };
    }, 3900);

    return () => clearInterval(rotateInterval);
  }, []);

  const currentTx = transactions[currentTxIndex];

  return (
    <div
      className="min-h-screen bg-background font-sans text-foreground"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Top trust bar */}
      <div className="bg-bar text-bar-foreground text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-2.5">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-success" />
            EPA Certified Range
          </span>
          <span className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" />
            256-bit SSL Secured
          </span>
          <span className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-warning" />
            Over-the-Air Updates
          </span>
          <span className="flex items-center gap-2">
            <BadgeCheck className="h-3.5 w-3.5 text-primary-glow" />
            40,000+ Owners
          </span>
        </div>
      </div>

      {/* Live Delivery Notification Card - Popup Mode */}
      {showNotification && (
        <div className="fixed top-20 left-0 right-0 z-50 px-4 pointer-events-none animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="mx-auto max-w-md bg-white rounded-lg shadow-lg border border-gray-100 px-3 py-2 pointer-events-auto">
            {/* Header with avatar */}
            <div className="flex items-start gap-2 mb-1">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-foreground text-xs truncate">{currentTx.name}</p>
                <p className="text-xs text-muted-foreground">{currentTx.country}</p>
              </div>
            </div>

            {/* Message */}
            <p className="text-xs text-muted-foreground mb-0.5 ml-10">Just paid delivery fee for</p>
            <p className="text-xs font-bold text-primary mb-1 ml-10">{currentTx.model}</p>

            {/* Confirmation */}
            <p className="text-xs font-bold text-success mb-0.5 ml-10">
              🚗 Car confirmed & dispatched!
            </p>
            <p className="text-xs font-bold text-success mb-1.5 ml-10">
              ({currentTx.fee} fee paid)
            </p>

            {/* Progress bar */}
            <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full drain-progress" />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes drainBar {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
        .drain-progress {
          animation: drainBar 3.5s linear forwards;
        }
      `}</style>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tesla
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#models" className="hover:text-foreground">
              Vehicles
            </a>
            <a href="#instructions" className="hover:text-foreground">
              How It Works
            </a>
            <a href="#participate" className="hover:text-foreground">
              Claim Free Car
            </a>
            <a href="#deliveries" className="hover:text-foreground">
              Live Deliveries
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/participate"
              className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:bg-primary-glow sm:inline-flex"
            >
              Claim Now
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md border border-border p-2 text-foreground md:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="flex flex-col gap-1 p-4">
              <a
                href="#models"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
              >
                Vehicles
              </a>
              <a
                href="#instructions"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
              >
                How It Works
              </a>
              <a
                href="#participate"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
              >
                Claim Free Car
              </a>
              <a
                href="#deliveries"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium hover:bg-muted"
              >
                Live Deliveries
              </a>
              <a
                href="/participate"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-glow mt-2"
              >
                Claim Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero - Giveaway */}
      <section
        id="giveaway"
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold">
                ✅ Official Event
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> LIVE — 12,849
                joined
              </span>
            </div>
            <h1
              className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Win a Brand New <span className="text-primary">Tesla</span> Electric Car
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tesla is giving away brand-new electric vehicles worldwide. Claim your car today! No
              hidden fees—just register, select your model, pay the small delivery fee, and receive
              your vehicle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/participate"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] transition hover:bg-primary-glow"
              >
                🚗 Claim Your Free Car <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#participate"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                View All Models
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" /> Secure Reservation
              </span>
              <span className="flex items-center gap-1.5">
                <BadgeCheck className="h-3.5 w-3.5" /> Fully Refundable
              </span>
              <span className="flex items-center gap-1.5">
                <Globe2 className="h-3.5 w-3.5" /> Ships Worldwide
              </span>
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
                  alt="Tesla Model 3 electric sedan in red"
                  width={1280}
                  height={960}
                  className="h-auto w-full"
                />
              </div>
              <div className="px-3 pb-3 pt-5 text-center">
                <h3
                  className="text-xl font-semibold text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Tesla Model 3 Performance
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  0–60 mph in 2.9s · 358 mi range
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section id="models" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Available Models
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Available <span className="text-primary">Tesla</span> Cars
          </h2>
          <p className="mt-4 text-muted-foreground">
            Brand new 2024–2025 models available now. All are completely free—you only pay a
            one-time delivery fee.
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
                <p className="mt-3 text-sm text-foreground/80">
                  {m.range} · {m.power}
                </p>
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

      {/* Instructions */}
      <section id="instructions" className="mx-auto max-w-7xl px-5 py-20 bg-muted/30">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            How It Works
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How to Claim Your <span className="text-primary">Tesla</span> Car
          </h2>
          <p className="mt-4 text-muted-foreground">
            Follow these simple steps to claim your free electric vehicle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Register Your Details",
              desc: "Enter your name, delivery address, and contact information so Tesla can ship your vehicle directly.",
            },
            {
              step: "02",
              title: "Choose Your Tesla Car",
              desc: "Select from Model 3, Model Y, Model S Plaid, or Model X—all brand new 2025 models.",
            },
            {
              step: "03",
              title: "Pay Delivery Fee",
              desc: "Pay the one-time delivery fee ($199–$399) for shipping and logistics. This is the only fee required.",
            },
            {
              step: "04",
              title: "Receive Your Tesla Car",
              desc: "Your vehicle will be delivered within 7–14 business days, fully charged and ready to drive.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/participate"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:bg-primary-glow"
          >
            🚗 Start Claiming Your Tesla Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Participate Section - Car Selection */}
      <section id="participate" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
            Official Tesla Global Giveaway
          </div>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Choose Your <span className="text-primary">Tesla</span> Electric Car
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tesla is gifting brand new electric vehicles worldwide. All vehicles are 100% free—just
            pay the one-time delivery fee.
          </p>
        </div>

        <div className="mb-8 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-center">
          <div className="rounded-lg bg-muted p-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Event Ends In</p>
            <p className="text-3xl font-bold tracking-tight mt-2 font-mono">
              11 HRS : 42 MIN : 33 SEC
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase">Participants</p>
            <p className="text-3xl font-bold tracking-tight mt-2">
              <span className="text-primary">12,847</span> joined
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            ✨ Each participant is eligible for <strong>one vehicle only</strong>
          </p>
        </div>
      </section>

      {/* Live Deliveries Feed */}
      <section id="deliveries" className="mx-auto max-w-7xl px-5 py-20 bg-muted/30">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Real-Time Updates
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Live <span className="text-primary">Deliveries</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real-time delivery updates from Tesla owners around the world.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]">
          <div className="bg-foreground text-background p-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold">Live Delivery Feed</span>
          </div>
          <div className="divide-y divide-border">
            {[
              {
                name: "James O.",
                country: "🇺🇸",
                model: "V3 2024",
                status: "Delivery confirmed ✓",
                fee: "$299",
                time: "5 min ago",
              },
              {
                name: "Sophie M.",
                country: "🇬🇧",
                model: "VY 2024",
                status: "Car dispatched 🚚",
                fee: "$349",
                time: "44 min ago",
              },
              {
                name: "Carlos R.",
                country: "🇲🇽",
                model: "VS 2025",
                status: "Payment verified ✓",
                fee: "$399",
                time: "24 min ago",
              },
              {
                name: "Yuki T.",
                country: "🇯🇵",
                model: "VX 2024",
                status: "Shipment confirmed ✓",
                fee: "$249",
                time: "56 min ago",
              },
              {
                name: "Emma W.",
                country: "🇨🇦",
                model: "VY 2025",
                status: "Vehicle en route 🚗",
                fee: "$329",
                time: "12 min ago",
              },
              {
                name: "Lucas B.",
                country: "🇧🇷",
                model: "VY 2025",
                status: "Delivery confirmed ✓",
                fee: "$289",
                time: "1 min ago",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition">
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">
                    {item.name} {item.country}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tesla {item.model} · {item.status}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-semibold text-primary text-sm">{item.fee}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Announcements */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Official Statement
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Straight from the <span className="text-primary">Leadership</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                V
              </div>
              <div>
                <p className="font-semibold">Tesla Leadership</p>
                <p className="text-xs text-muted-foreground">@Tesla · Official</p>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary ml-auto flex-shrink-0" />
            </div>
            <p className="text-muted-foreground mb-4">
              Our mission is to accelerate the world's transition to sustainable energy. The global
              Tesla giveaway is completely free—just cover the delivery cost. This is our commitment
              to making electric vehicles accessible worldwide.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>
                ❤️ <strong>128K</strong>
              </span>
              <span>
                🔁 <strong>47K</strong>
              </span>
              <span>
                💬 <strong>8.2K</strong>
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                ⚡
              </div>
              <div>
                <p className="font-semibold">Tesla Official</p>
                <p className="text-xs text-muted-foreground">@Tesla · Verified</p>
              </div>
              <CheckCircle2 className="h-4 w-4 text-primary ml-auto flex-shrink-0" />
            </div>
            <p className="text-muted-foreground mb-4">
              🚗 Our global Tesla car giveaway is NOW LIVE! Open to ALL countries. No purchase
              necessary—just cover the one-time delivery fee. Models available: V3, VY, VS Plaid,
              VX, and more. Claim yours today!
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>
                ❤️ <strong>215K</strong>
              </span>
              <span>
                🔁 <strong>89K</strong>
              </span>
              <span>
                💬 <strong>14K</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 bg-muted/30">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Real Winners
          </p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What <span className="text-primary">Winners</span> Are Saying
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real testimonials from verified Tesla car recipients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
          {[
            {
              name: "Michael R.",
              country: "🇺🇸 USA",
              quote:
                "I received my Tesla V3 2024 after paying the delivery fee. It arrived in 9 days, fully charged and ready. Best decision ever!",
              vehicle: "Tesla V3 2024",
              initial: "M",
            },
            {
              name: "Sarah Chen",
              country: "🇨🇦 Canada",
              quote:
                "The entire process was seamless. Customer service was fantastic, and my Tesla VY arrived in perfect condition. Absolutely worth it!",
              vehicle: "Tesla VY 2024",
              initial: "S",
            },
            {
              name: "James Wilson",
              country: "🇬🇧 UK",
              quote:
                "I've owned three cars before, but nothing compares to my new Tesla. The technology is incredible and the delivery was on time.",
              vehicle: "Tesla Model S 2024",
              initial: "J",
            },
            {
              name: "Emma Rodriguez",
              country: "🇲🇽 Mexico",
              quote:
                "Couldn't believe how affordable it was. The payment plan made it even better. My whole family loves the new Tesla!",
              vehicle: "Tesla VX 2024",
              initial: "E",
            },
            {
              name: "David Kim",
              country: "🇰🇷 South Korea",
              quote:
                "Amazing experience from start to finish. The online portal was user-friendly and tracking was real-time. Highly recommended!",
              vehicle: "Tesla V3 SR 2025",
              initial: "D",
            },
            {
              name: "Lisa Brown",
              country: "🇦🇺 Australia",
              quote:
                "Best investment I ever made. The range is incredible and the performance is exactly as advertised. Worth every penny of the delivery fee!",
              vehicle: "Tesla VS Plaid 2024",
              initial: "L",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.country}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">"{review.quote}"</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-success/10 text-success px-3 py-1.5 text-xs font-semibold border border-success/30">
                ✅ Received: {review.vehicle} 🚗
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Connect</p>
          <h2
            className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Follow <span className="text-primary">Tesla</span> Official
          </h2>
          <p className="mt-4 text-muted-foreground">
            Verified official social media accounts of Tesla worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Twitter/X",
              handle: "@Tesla",
              desc: "Official Tesla X account.",
              followers: "28.4M followers",
              icon: Twitter,
              link: "https://twitter.com",
            },
            {
              name: "Facebook",
              handle: "Tesla",
              desc: "Official Tesla Facebook page.",
              followers: "14.2M likes",
              icon: Facebook,
              link: "https://facebook.com",
            },
            {
              name: "Instagram",
              handle: "@TeslaMotors",
              desc: "Official Tesla Instagram.",
              followers: "12.8M followers",
              icon: Instagram,
              link: "https://instagram.com",
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <social.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-semibold mb-1">{social.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{social.handle}</p>
              <p className="text-sm text-muted-foreground mb-4">{social.desc}</p>
              <p className="text-xs text-muted-foreground font-semibold">{social.followers}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-24 text-center bg-muted/30 rounded-3xl my-20">
        <h2
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Don't miss out! Claim your <span className="text-primary">free Tesla</span> today.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Limited time offer. Register now, select your model, pay delivery, and drive your new
          Volthaus within 14 days.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/participate"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elevated)] hover:bg-primary-glow"
          >
            🚗 Claim Your Free Tesla <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#instructions"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-muted"
          >
            How It Works
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="font-bold">Tesla Motors</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Giveaway</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#giveaway" className="hover:opacity-100">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#instructions" className="hover:opacity-100">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#participate" className="hover:opacity-100">
                    Claim Car
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="text-sm opacity-75">
              © 2025 Tesla Motors Official Giveaway. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
