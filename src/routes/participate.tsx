import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
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

const deliveryOptions = [
  {
    name: "Standard Delivery",
    price: "$299",
    description: "Standard international shipping & customs clearance",
    days: "10–14 business days",
  },
  {
    name: "Express Delivery",
    price: "$349",
    description: "Priority shipping with real-time tracking updates",
    days: "5–7 business days",
  },
  {
    name: "Premium Delivery",
    price: "$399",
    description: "Fastest dispatch, white-glove doorstep delivery",
    days: "3–5 business days",
  },
];

const cryptoAddresses = {
  BTC: "bc1qv6w3uzlgh88lze3dragznwsnrjaac2wt93jqjc",
  ETH: "0xf1eF924C75c5581ed59B632072E9bC68083b0157",
  SOL: "DQhSWapaC7NA5kDuN7wuGtMGfzKkSNcfufD4HbpNi77z",
  USDT: "0xf1eF924C75c5581ed59B632072E9bC68083b0157",
};

function Participate() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicleOptions[0]);
  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
  const [paymentMethod, setPaymentMethod] = useState<"BTC" | "ETH" | "SOL" | "USDT">("BTC");
  const [step, setStep] = useState<"form" | "delivery" | "payment">("form");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    street: "",
    city: "",
    zipCode: "",
    country: "",
    phone: "",
    paymentReceiptUrl: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.paymentReceiptUrl) {
      alert("Please upload your payment receipt");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        address: "",
        street: "",
        city: "",
        zipCode: "",
        country: "",
        phone: "",
        paymentReceiptUrl: "",
      });
      setStep("form");
    }, 3000);
  };

  const getTotalPrice = () => {
    const deliveryPrice = parseInt(selectedDelivery.price.replace("$", ""));
    return `$${deliveryPrice}`;
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1fb1eab53b834c0abd6aa29ba9ec79c4%2F2e2cc6f509384f1a90578452a6fda964?format=webp&width=800&height=1200"
              alt="Tesla"
              className="h-9 w-9"
            />
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
              <button
                key={idx}
                onClick={() => setSelectedVehicle(vehicle)}
                className={`group relative rounded-2xl overflow-hidden border transition-all text-left ${
                  selectedVehicle.name === vehicle.name
                    ? "border-primary shadow-lg ring-2 ring-primary/50"
                    : "border-border hover:shadow-lg"
                }`}
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

                </div>
              </button>
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

          {submitted ? (
            <div className="bg-card rounded-2xl border border-success/50 bg-success/10 p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Order Confirmed!</h3>
              <p className="text-muted-foreground">
                Thank you! Your order for the {selectedVehicle.name} has been placed. You'll receive a confirmation email with tracking details shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-8">
              {/* Step 1: Personal & Delivery Info */}
              {step === "form" && (
                <>
                  <div>
                    <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4 space-y-0">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4">Delivery Address</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        placeholder="Street Address"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="ZIP / Postal Code"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <select name="country" value={formData.country} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select Country</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>Nigeria</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep("delivery")}
                    className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary-glow transition-colors"
                  >
                    Continue to Delivery Options
                  </button>
                </>
              )}

              {/* Step 2: Delivery Options */}
              {step === "delivery" && (
                <>
                  <div>
                    <h3 className="text-lg font-bold mb-4">Select Delivery Option</h3>
                    <div className="space-y-3">
                      {deliveryOptions.map((option) => (
                        <button
                          key={option.name}
                          type="button"
                          onClick={() => setSelectedDelivery(option)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            selectedDelivery.name === option.name
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold text-foreground">{option.name}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                              <p className="text-xs text-muted-foreground mt-2">📦 {option.days}</p>
                            </div>
                            <span className="text-lg font-bold text-primary">{option.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Delivery Fee:</p>
                    <p className="text-3xl font-bold text-foreground">{getTotalPrice()}</p>
                    <p className="text-xs text-muted-foreground mt-2">🚗 Car Value: <span className="text-success font-bold">FREE</span></p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep("form")}
                      className="flex-1 bg-muted text-foreground font-bold py-3 rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep("payment")}
                      className="flex-1 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary-glow transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Payment */}
              {step === "payment" && (
                <>
                  <div>
                    <h3 className="text-lg font-bold mb-4">Select Cryptocurrency Payment</h3>
                    <div className="grid md:grid-cols-4 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("BTC")}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                          paymentMethod === "BTC"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl">₿</span>
                        <span className="font-bold text-sm">Bitcoin</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("ETH")}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                          paymentMethod === "ETH"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl">Ξ</span>
                        <span className="font-bold text-sm">Ethereum</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("SOL")}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                          paymentMethod === "SOL"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl">◎</span>
                        <span className="font-bold text-sm">Solana</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("USDT")}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                          paymentMethod === "USDT"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="text-2xl">₮</span>
                        <span className="font-bold text-sm">USDT</span>
                      </button>
                    </div>
                  </div>

                  {/* Crypto Payment Info */}
                  <div className="space-y-4 border-t border-border pt-6">
                    <h4 className="font-bold flex items-center gap-2">
                      <span>💰</span> {paymentMethod} Payment Address
                    </h4>

                    <div className="bg-muted rounded-lg p-4 border border-border">
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Send {paymentMethod} to this address:</p>
                      <div className="bg-background rounded p-3 font-mono text-sm break-all border border-border mb-3">
                        {cryptoAddresses[paymentMethod]}
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(cryptoAddresses[paymentMethod]);
                          alert("Address copied to clipboard!");
                        }}
                        className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary-glow transition-colors text-sm"
                      >
                        📋 Copy Address
                      </button>
                    </div>

                    <div className="bg-warning/10 border border-warning/30 rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground mb-2">⚠️ Payment Details:</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Send exactly <strong>{getTotalPrice()}</strong> worth of {paymentMethod}</li>
                        <li>• Include the amount shown above in your transaction</li>
                        <li>• Network fees may apply depending on blockchain</li>
                        <li>• Allow 5-30 minutes for confirmation</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold">Upload Payment Receipt/Proof</label>
                      <p className="text-xs text-muted-foreground mb-2">Screenshot of your transaction confirmation (must show amount, address, and timestamp)</p>
                      <div className="relative border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <input
                          type="file"
                          accept="image/*,.pdf"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              setFormData(prev => ({
                                ...prev,
                                paymentReceiptUrl: e.target.files![0].name
                              }));
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {formData.paymentReceiptUrl ? (
                          <>
                            <p className="text-success font-bold flex items-center justify-center gap-2">
                              <span>✅</span> {formData.paymentReceiptUrl}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="font-bold flex items-center justify-center gap-2 mb-2">
                              <span>📤</span> Click to upload payment proof
                            </p>
                            <p className="text-xs text-muted-foreground">PNG, JPG, or PDF (Max 10MB)</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep("delivery")}
                      className="flex-1 bg-muted text-foreground font-bold py-3 rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary text-primary-foreground font-bold py-3 rounded-lg hover:bg-primary-glow transition-colors flex items-center justify-center gap-2"
                    >
                      ✅ Confirm & Pay
                    </button>
                  </div>
                </>
              )}

              <p className="text-xs text-muted-foreground text-center border-t border-border pt-6">
                By proceeding, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          )}
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
                  <a href="/participate" className="hover:underline">
                    Claim Car
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
