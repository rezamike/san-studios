import React from 'react';

export default function About() {
  return (
    <section className="px-8 py-16 max-w-6xl mx-auto space-y-16">
      <div className="animate-fadein">
        <small className="text-brand-red tracking-widest uppercase text-sm">Who We Are</small>
        <div className="text-3xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2">
          About san studios
        </div>
        <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-2">
          San Studios is a boutique collective of filmmakers, designers, and developers
          weaving soulful digital experiences that whisper rather than shout. We don’t just build—we direct,
          compose, and design with emotion in mind.
        </p>
        <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-2">
          From the first frame to the final scroll, we choreograph movement and story,
          shaping immersive web journeys that feel like film—crafted with intention,
          delivered with elegance.
        </p>
        <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-2">
          We believe your story deserves the same care as cinema. Whether you're launching
          a brand, platform, or visual identity—San Studios ensures it arrives with
          gravity and grace.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
          <img
            src="/itsmeinasuit.jpeg"
            alt="Michael Sanaiha"
            className="w-40 h-40 object-cover rounded-full border-2 border-brand-red"
          />
          <div className="text-brand-gray space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2">Michael Sanaiha</h3>
            <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-2">
              Founder & Creative Director of San Studios. With a background in film and software,
              Michael brings narrative clarity and visual soul to every project.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2">About the <span className="text-brand-red">Michael</span> App</h3>
          <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-2">
            Under the San Studios umbrella, <span className="text-brand-light font-semibold">Michael</span> is a minimalist AI-driven texting platform designed
            to help users feel heard, understood, and supported. It listens, asks questions, and
            creates space for deeper reflection — all with no chat history and a calm visual aesthetic.
          </p>
          <a
            href="https://www.michaellistens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-brand-red font-semibold hover:underline"
          >
            Learn more about the Michael App &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}