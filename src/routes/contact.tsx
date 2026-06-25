import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MessageSquare, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Toaster, toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const supportCategories = [
  "Vehicle Delivery",
  "Payment Issues",
  "Order Status",
  "Technical Support",
  "General Inquiry",
  "Feedback",
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "General Inquiry",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("customer_support").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          category: formData.category,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          status: "open",
        },
      ]);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      toast.success("Thank you! We've received your message. We'll respond shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "General Inquiry",
        subject: "",
        message: "",
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting message:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send message";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-2.5">
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

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Customer <span className="text-primary">Support</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're here to help. Reach out with any questions or concerns about your order.
          </p>
        </div>
      </section>

      {/* Support Info Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Email Card */}
            <Card className="border-2 border-border bg-card p-6 text-center">
              <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">Email Support</h3>
              <p className="text-sm text-muted-foreground">
                support@teslamotors.com
              </p>
            </Card>

            {/* Phone Card */}
            <Card className="border-2 border-border bg-card p-6 text-center">
              <Phone className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">Phone Support</h3>
              <p className="text-sm text-muted-foreground">
                +1 (800) 901-8000
              </p>
            </Card>

            {/* Live Chat Card */}
            <Card className="border-2 border-border bg-card p-6 text-center">
              <MessageSquare className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Chat with us online
              </p>
            </Card>

            {/* Hours Card */}
            <Card className="border-2 border-border bg-card p-6 text-center">
              <Clock className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-bold text-foreground">Business Hours</h3>
              <p className="text-sm text-muted-foreground">
                24/7 Available
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-border bg-card p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="mb-4 text-5xl">✅</div>
                <h2 className="mb-2 text-2xl font-bold text-foreground">
                  Message Received!
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Thank you for contacting us. Our support team will review your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-8 text-3xl font-bold text-foreground">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="border-border bg-background"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="border-border bg-background"
                      />
                    </div>
                  </div>

                  {/* Phone and Category Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="border-border bg-background"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-foreground">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {supportCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      className="border-border bg-background"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-foreground">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary py-3 text-base font-bold hover:bg-primary/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    <span className="text-red-500">*</span> Required fields
                  </p>
                </form>
              </>
            )}
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-muted/50 py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How long does delivery take?",
                a: "Standard delivery takes 10-14 business days. Express delivery (5-7 days) and Premium delivery (3-5 days) are also available.",
              },
              {
                q: "Can I change my order?",
                a: "Orders can be modified within 24 hours of placement. Contact our support team immediately if you need changes.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cryptocurrency payments including Bitcoin, Ethereum, Solana, and USDT for maximum security and speed.",
              },
              {
                q: "Is the vehicle really free?",
                a: "Yes! You only pay a one-time delivery fee. The vehicle itself is completely free as part of our promotional giveaway.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="mb-2 font-bold text-foreground">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Toaster />
    </div>
  );
}
