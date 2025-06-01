import React, { useState } from "react";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-8 text-brand-light">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2">
        Get in Touch
      </h1>
      <p className="text-md text-brand-gray leading-relaxed max-w-2xl">
        Have a project in mind? Fill out the form below and let's build
        something meaningful together.
      </p>
      {messageSent ? (
        <div className="text-brand-light text-lg font-medium mt-6 sm:mt-8">
          Thank you for reaching out. Your message has been sent successfully!
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = {
              name: e.target.name.value,
              email: e.target.email.value,
              tier: e.target.tier.value,
              message: e.target.message.value,
            };

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });

            if (res.ok) {
              setMessageSent(true);
              e.target.reset();
            } else {
              alert("Something went wrong.");
            }
          }}
          className="space-y-6"
        >
          <div>
            <label
              className="block text-sm font-medium text-brand-gray mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-brand-dark border border-brand-border text-brand-light px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-brand-gray mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-brand-dark border border-brand-border text-brand-light px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-brand-gray mb-1"
              htmlFor="tier"
            >
              Service Tier
            </label>
            <select
              id="tier"
              name="tier"
              className="w-full bg-brand-dark border border-brand-border text-brand-light px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <option value="">Select one</option>
              <option value="teaser">The Teaser (~$1,500–$2,500)</option>
              <option value="feature">The Feature (~$4,000–$7,000)</option>
              <option value="directors-cut">The Director’s Cut ($10K+)</option>
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-brand-gray mb-1"
              htmlFor="message"
            >
              Project Overview
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full bg-brand-dark border border-brand-border text-brand-light px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-red"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-brand-red text-brand-light font-semibold rounded hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
