import React from 'react';
import { Plane, ShieldCheck, Sparkles, Wallet } from 'lucide-react';

const items = [
  {
    icon: Plane,
    title: 'Smart planning',
    desc: 'Compare routes, stays, and experiences in one elegant view.'
  },
  {
    icon: Sparkles,
    title: 'Curated guides',
    desc: 'Local insights, photo walks, and hidden gems tailored to you.'
  },
  {
    icon: Wallet,
    title: 'Real-time pricing',
    desc: 'Live availability and transparent costs without the guesswork.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & trusted',
    desc: 'Best-in-class security with traveler protections built-in.'
  }
];

const Benefits = () => {
  return (
    <section className="relative z-[1] mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Everything you need to go from dream to booked
        </h2>
        <p className="mt-3 text-slate-600">
          Designed like a modern SaaS: fast, intuitive, and beautiful on every device.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
