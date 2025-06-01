import React from "react";
import { Link } from 'react-router-dom';


export default function MainSite() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark text-brand-light font-sans">

      <section className="sticky top-0 z-50 bg-brand-dark py-4 px-4 sm:py-6 sm:px-8 border-b border-brand-border">
        <div className="animate-fadein">
          <div className="text-5xl font-extrabold tracking-tight leading-none lowercase text-brand-light">
            san studios
          </div>
          <p className="text-sm text-brand-gray mt-2 max-w-3xl">
            Where story meets design. We create digital experiences with soul.
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-16 py-8 bg-brand-dark text-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 space-y-16">

          <section className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2 relative group overflow-hidden">
                <span className="inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 group-hover:after:w-full">
                  Cinematic video production
                </span>
              </h3>
              <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-4">
                Emotionally-driven visuals that bring your story to life. We produce cinematic content built for clarity and impact.
              </p>
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3379940/pexels-photo-3379940.jpeg?auto=compress&cs=tinysrgb&w=640"
                alt="cinematic"
                className="rounded-lg object-cover aspect-video w-full transition-transform duration-1000 ease-out hover:scale-105"
              />
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=640"
                alt="branding"
                className="rounded-lg object-cover aspect-video w-full transition-transform duration-1000 ease-out hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2 relative group overflow-hidden">
                <span className="inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 group-hover:after:w-full">
                  Story-driven websites & branding
                </span>
              </h3>
              <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-4">
                We build brands that speak with clarity and confidence. Digital platforms that are not just seen, but remembered.
              </p>
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-light lowercase tracking-tight leading-tight mb-2 relative group overflow-hidden">
                <span className="inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300 group-hover:after:w-full">
                  Creative direction
                </span>
              </h3>
              <p className="text-md text-brand-gray leading-relaxed max-w-3xl mt-4">
                From concept to execution, we shape visual narratives with depth and emotion. No fluff. All feels.
              </p>
            </div>
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/3730210/pexels-photo-3730210.jpeg?auto=compress&cs=tinysrgb&w=640"
                alt="creative"
                className="rounded-lg object-cover aspect-video w-full transition-transform duration-1000 ease-out hover:scale-105"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 border-t border-brand-border py-4 sm:py-8">
            <img
              src="https://images.pexels.com/photos/2510425/pexels-photo-2510425.jpeg?auto=compress&cs=tinysrgb&w=640"
              alt="cinematic"
              className="rounded-lg soft-shadow object-cover aspect-video hover:scale-102 transition duration-1000 ease-out animate-fadein"
            />
            <img
              src="https://images.pexels.com/photos/1391786/pexels-photo-1391786.jpeg?auto=compress&cs=tinysrgb&w=640"
              alt="studio"
              className="rounded-lg soft-shadow object-cover aspect-video hover:scale-102 transition duration-1000 ease-out animate-fadein delay-200"
            />
            <img
              src="https://images.pexels.com/photos/6803529/pexels-photo-6803529.jpeg?auto=compress&cs=tinysrgb&w=640"
              alt="creative"
              className="rounded-lg soft-shadow object-cover aspect-video hover:scale-102 transition duration-1000 ease-out animate-fadein delay-400"
            />
          </section>

        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 text-center">
          <p className="text-brand-gray text-md leading-relaxed italic animate-fadein">
            More to come — quietly waiting...
          </p>
        </div>
      </main>
    </div>
  );
}
