import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="relative z-[1] mx-auto max-w-7xl px-6 pb-16">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-tr from-emerald-50 to-white p-8 sm:p-12">
        <div className="grid items-center gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Start your next adventure with confidence
            </h3>
            <p className="mt-3 text-slate-600">
              Create your plan in minutes and explore destinations with immersive previews.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800">
                Get started free
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-50">
                Book a demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-200/50 blur-2xl" />
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• No credit card required</li>
              <li>• Cancel anytime</li>
              <li>• 24/7 support</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Wayfindr. All rights reserved.</div>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
          <a href="#" className="hover:text-slate-900">Contact</a>
        </nav>
      </footer>
    </section>
  );
};

export default FooterCTA;
