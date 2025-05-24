import React from "react";

export default function MainSite() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0e0e0e] text-[#F5F5F5] font-sans">
      {/* Sidebar */}
      <nav className="w-1/5 min-w-[220px] bg-[#0e0e0e] p-6 hidden sm:block">
        <h2 className="text-4xl font-bold mb-12 tracking-wide text-[#FF3C38] lowercase animate-pulse">
          三
        </h2>
        <ul className="space-y-6 text-lg font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-[#ff6f61] transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-[#ff6f61] transition duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#submit"
              className="hover:text-[#ff6f61] transition duration-300"
            >
              Submit
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#ff6f61] transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-16 overflow-y-auto bg-gradient-to-b from-[#0e0e0e] to-[#121212] text-[#F5F5F5]">
        <section className="mb-24">
          <div className="mb-4 animate-fadein">
            <h2 className="text-6xl sm:text-8xl font-extrabold mb-6 tracking-tight leading-none lowercase animate-fadein">
              san studios
            </h2>
          </div>
          <p className="text-2xl text-[#ccc] max-w-3xl">
            Where story meets design. We create digital experiences with soul.
          </p>
        </section>

        <section className="mb-24 text-xl text-[#ddd]">
          <div className="animate-fadein delay-100 mb-6">
            <p>
              <strong>Cinematic video production</strong> — with heart and
              intention.
            </p>
          </div>
          <div className="animate-fadein delay-300 mb-6">
            <p>
              <strong>Story-driven websites & branding</strong> — built to
              resonate.
            </p>
          </div>
          <div className="animate-fadein delay-500">
            <p>
              <strong>Creative direction</strong> — without the fluff, only the
              feels.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
          <img
            src="https://images.unsplash.com/photo-1549921296-3a6b77d61c1c"
            alt="cinematic"
            className="rounded-lg soft-shadow object-cover aspect-video hover:scale-102 transition duration-1000 ease-out animate-fadein"
          />
          <img
            src="https://images.unsplash.com/photo-1603190287605-e6ade32fa852"
            alt="studio"
            className="rounded-lg soft-shadow object-cover aspect-video hover:scale-102 transition duration-1000 ease-out animate-fadein delay-200"
          />
          <img
            src="https://images.unsplash.com/photo-1581093588401-22d9cf99f3ac"
            alt="creative"
            className="rounded-lg soft-shadow object-cover aspect-video hover:scale-102 transition duration-1000 ease-out animate-fadein delay-400"
          />
        </section>

        <div className="floating-cta">
          <p className="text-[#aaa] text-center">
            More to come, quietly waiting…
          </p>
        </div>
      </main>
    </div>
  );
}
