import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            New: Interactive glass card experience
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Discover destinations with a modern, vibrant travel platform
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Plan, compare, and book smarter. Explore immersive previews,
            curated guides, and real-time insights for your next journey.
          </p>

          {/* Search Bar */}
          <div className="mt-8 w-full rounded-2xl bg-white/10 p-2 backdrop-blur-md ring-1 ring-white/20">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
              <div className="col-span-2 flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 text-slate-900 shadow-sm sm:bg-white">
                <MapPin className="h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </div>
              <div className="col-span-2 flex items-center gap-2 rounded-xl bg-white/80 px-4 py-3 text-slate-900 shadow-sm sm:bg-white">
                <Calendar className="h-5 w-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Dates"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </div>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600">
                <Search className="h-5 w-5" />
                Search trips
              </button>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span>Trusted by 100k+ travelers</span>
            <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
            <span>Real-time pricing and curated experiences</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
