import React from 'react';
import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    title: 'Santorini, Greece',
    image:
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
    description: 'Cliffside villages, blue-domed churches, and breathtaking sunsets.'
  },
  {
    title: 'Kyoto, Japan',
    image:
      'https://images.unsplash.com/photo-1526481280698-8fcc13fd5f78?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
    description: 'Tranquil temples, bamboo forests, and timeless tea ceremonies.'
  },
  {
    title: 'Bali, Indonesia',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
    description: 'Lush rice terraces, vibrant culture, and world-class wellness retreats.'
  },
  {
    title: 'Amalfi Coast, Italy',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop',
    rating: 4.9,
    description: 'Pastel towns, lemon groves, and dazzling Mediterranean views.'
  }
];

const Destinations = () => {
  return (
    <section className="relative z-[1] mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Explore top destinations
        </h2>
        <p className="mt-3 text-slate-600">
          Handpicked places with local insights, quality stays, and must-see experiences.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <article
            key={d.title}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={d.image}
                alt={d.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs text-slate-700 shadow">
                <MapPin className="h-3.5 w-3.5" />
                {d.title.split(',')[1]?.trim() || 'Popular'}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-900">{d.title}</h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium text-slate-700">{d.rating}</span>
                </div>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{d.description}</p>
              <button className="mt-4 inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
