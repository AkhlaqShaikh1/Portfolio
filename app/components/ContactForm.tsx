"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c1cbfaa2-b7c5-4cda-bc6a-0af868ee07de",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative p-8 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black-100 to-purple-800/20" />
          <div className="absolute inset-[1px] rounded-2xl bg-black-100" />
          <div className="relative flex flex-col items-center text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-white-200 mb-6">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2 rounded-lg bg-purple/20 text-purple border border-purple/30 hover:bg-purple/30 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative p-8 rounded-2xl overflow-hidden">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-900/20 to-purple-500/30 rounded-2xl" />
        <div className="absolute inset-[1px] rounded-2xl bg-black-100" />

        <div className="relative space-y-6">
          {/* Name and Email row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white-200">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white-200">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-medium text-white-200">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-white-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg bg-black-200 border border-black-300 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple transition-colors resize-none"
            />
          </div>

          {/* Error message */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="relative w-full inline-flex h-14 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-purple disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 gap-2 text-base font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
