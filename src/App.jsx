import React from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Benefits from './components/Benefits';
import FooterCTA from './components/FooterCTA';
import { Plane } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Simple top bar */}
      <header className="relative z-[2] mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
            <Plane className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">Wayfindr</span>
        </div>
        <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <a href="#destinations" className="hover:text-slate-900">Destinations</a>
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
        </nav>
        <div className="hidden sm:block">
          <button className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50">
            Sign in
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <div id="destinations">
          <Destinations />
        </div>
        <div id="features">
          <Benefits />
        </div>
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
