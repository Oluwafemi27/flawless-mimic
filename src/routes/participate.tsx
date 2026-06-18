import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Zap, Check } from "lucide-react";
import sedanRed from "@/assets/sedan-red.jpg";
import sedanSilver from "@/assets/sedan-silver.jpg";
import sedanBlue from "@/assets/sedan-blue.jpg";
import suvWhite from "@/assets/suv-white.jpg";
import suvBlack from "@/assets/suv-black.jpg";

export const Route = createFileRoute("/participate")({
  head: () => ({
    meta: [
      { title: "Claim Your Tesla — Free Electric Vehicle" },
      {
        name: "description",
        content:
          "Register to claim your free Tesla electric vehicle. Choose from V3, VY, VS Plaid, or VX models.",
      },
    ],
  }),
  component: Participate,
});

const vehicleOptions = [
  {
    name: "Tesla V3",
    type: "Performance Sedan",
    badge: "🏆 Most Popular",
    power: "510 hp Dual Motor",
    range: "358 mi Range",
    delivery: "7–10 Business Days",
    shipsTo: "All Countries",
    fee: "$299",
    img: sedanSilver,
  },
  {
    name: "Tesla VY",
    type: "Premium SUV",
    badge: "⚡ Express Delivery",
    power: "384 hp Electric",
    range: "330 mi Range",
    delivery: "5–7 Business Days",
    shipsTo: "All Countries",
    fee: "$349",
    img: suvWhite,
  },
  {
    name: "Tesla VS Plaid",
    type: "Luxury Flagship",
    badge: "👑 Premium",
    power: "670 hp Tri Motor",
    range: "405 mi Range",
    delivery: "3–5 Business Days",
    shipsTo: "All Countries",
    fee: "$399",
    img: sedanBlue,
  },
  {
    name: "Tesla VX",
    type: "Ultra Luxury SUV",
    badge: "💎 Best Value",
    power: "670 hp Tri Motor",
    range: "348 mi Range",
    delivery: "10–14 Business Days",
    shipsTo: "All Countries",
    fee: "$249",
    img: suvBlack,
  },
  {
    name: "Tesla V3 SR",
    type: "City Special",
    badge: "🌊 City Pick",
    power: "283 hp RWD",
    range: "272 mi Range",
    delivery: "10–14 Business Days",
    shipsTo: "All Countries",
    fee: "$199",
    img: sedanRed,
  },
];

function Participate() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Tesla <span className="text-primary">Motors</span>
            </span>
          </a>
          <a
            href="/"
            className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            ← Back
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Official Tesla Global Giveaway — LIVE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Claim Your <span className="text-primary">Free Tesla</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Tesla is giving away brand-new electric vehicles worldwide. Choose your model, pay the
            delivery fee, and receive your vehicle within 14 days.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium mb-12">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> 100% Free Vehicle
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> One-Time Delivery Fee
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> 7–14 Day Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Countdown + Participants */}
      <section className="border-b border-border bg-muted/50 py-8">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                Event Ends In
              </p>
              <p className="text-3xl md:text-4xl font-bold tracking-tight font-mono">
                11 HRS : 42 MIN : 33 SEC
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">
                Participants
              </p>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">
                12,847 <span className="text-primary">joined</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Choose Your <span className="text-primary">Tesla</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            All vehicles are brand new 2025 models. Select your preferred model and proceed to
            claim.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicleOptions.map((vehicle, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
              >
                {/* Header with badge */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                  <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {vehicle.badge}
                  </div>
                  <img
                    src={vehicle.img}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-primary uppercase mb-2">
                    {vehicle.type}
                  </p>
                  <h3 className="text-lg font-bold mb-4">{vehicle.name}</h3>

                  {/* Specs */}
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Power</span>
                      <span className="font-semibold">{vehicle.power}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Range</span>
                      <span className="font-semibold">{vehicle.range}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Ships To</span>
                      <span className="font-semibold">{vehicle.shipsTo}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-semibold">{vehicle.delivery}</span>
                    </div>
                  </div>

                  {/* Delivery Fee */}
                  <div className="rounded-lg bg-muted p-4 mb-4 border border-border">
                    <p className="text-xs font-semibold text-muted-foreground mb-1">
                      One-Time Delivery Fee
                    </p>
                    <p className="text-2xl font-bold text-primary">{vehicle.fee}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Covers shipping, customs & logistics
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary-glow transition-colors flex items-center justify-center gap-2">
                    🚗 Claim This Model
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 text-center">
            <p className="font-semibold text-foreground">
              ⚡ Tesla Electric — <span className="text-primary">Built for the Future</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Each participant is eligible for <strong>one vehicle only</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Claim Form Section */}
      <section className="py-20 bg-muted/50 border-t border-border">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-3xl font-bold text-center mb-12">
            Claim Your <span className="text-primary">Tesla</span> Today
          </h2>

          <form className="bg-card rounded-2xl border border-border p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Delivery Address</label>
              <input
                type="text"
                placeholder="123 Main Street, City, Country"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Country</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4 text-sm">
              <p className="font-semibold text-foreground mb-2">Selected Vehicle: Tesla V3</p>
              <p className="text-muted-foreground">
                Delivery Fee: <span className="text-primary font-bold">$299</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-primary-glow transition-colors flex items-center justify-center gap-2 text-lg"
            >
              🚗 Claim Your Tesla Now
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="text-xs text-muted-foreground text-center">
              By clicking "Claim", you agree to our Terms of Service and Privacy Policy. No spam,
              just your vehicle delivery updates.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Tesla</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#models" className="hover:underline">
                    Vehicles
                  </a>
                </li>
                <li>
                  <a href="/#tech" className="hover:underline">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Giveaway</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
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
