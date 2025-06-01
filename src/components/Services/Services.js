import React from 'react';

export default function Services() {
  return (
    <section className="px-8 py-16 max-w-6xl mx-auto space-y-24">
      <div className="space-y-4 animate-fadein">
        <small className="text-brand-red tracking-widest uppercase text-sm">Our Packages</small>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight">
          the three-tier creative system
        </h2>
        <p className="text-brand-gray text-md leading-relaxed max-w-3xl mt-4">
          Whether you’re a lean startup, personal brand, or full-scale operation, our service tiers scale with your vision — no fluff, just cinematic precision.
        </p>
      </div>

      <div className="space-y-12">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: '1. the teaser',
              subtitle: 'Perfect for indie creatives, personal brands, or early-stage startups',
              price: 'Starts at: ~$1,500–$2,500 USD',
              items: [
                '1-page scrolling website or landing page',
                'Light visual direction to shape your story',
                'Responsive design + smooth transitions',
                'Clean copy editing + CTA strategy',
                'Delivery via Figma + site export or hosted',
              ],
            },
            {
              title: '2. the feature',
              subtitle: 'Perfect for startups, DTC brands, small agencies',
              price: 'Starts at: ~$4,000–$7,000 USD',
              items: [
                '3–5 page custom website',
                'Full visual + narrative direction',
                'Wireframes + story-driven structure',
                'Light branding guidance (tone, type, color)',
                'Option to add motion/intro or lightweight video',
              ],
            },
            {
              title: '3. the director’s cut',
              subtitle: 'Perfect for brands that want a full cinematic launch',
              price: 'Starts at: $10K+ USD',
              items: [
                'Full site design + development',
                'Messaging + copywriting',
                'Story-driven visuals + mood board',
                'Custom motion work (Lottie, GSAP, subtle transitions)',
                'Launch strategy (email list, splash, lead capture)',
              ],
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              className="group bg-brand-border rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-brand-dark transition duration-300 space-y-4"
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2">
                <span className="inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red after:transition-all after:duration-300 group-hover:after:w-full">
                  {tier.title}
                </span>
              </h3>
              <p className="text-brand-gray italic">{tier.subtitle}</p>
              <ul className="text-brand-gray list-disc pl-5 space-y-1">
                {tier.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-brand-red font-semibold mt-2">{tier.price}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-brand-border space-y-4">
          <h4 className="text-3xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2">Add-ons (a la carte)</h4>
          <ul className="text-brand-gray list-disc pl-5 space-y-1">
            <li>Portfolio/Case Study template buildout</li>
            <li>Light editing for video/hero reels</li>
            <li>UX review + rewrite for existing sites</li>
            <li>Localization package (EN to JP, partner-based)</li>
            <li>Webflow/Framer dev support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}