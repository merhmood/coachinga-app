import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,color-mix(in_srgb,var(--accent)_15%,transparent),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center stagger">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
            Author • Coaching • Speaking
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl">
            Shift Your{" "}
            <span className="gradient-text">Perspective.</span>
            <br />
            Transform Your World.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--foreground)]/70 sm:text-xl">
            Author, professional coaching and speaking services designed to
            bridge the gap between where you are and where you are destined to
            be through mindset engineering and intentional growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/discovery"
              className="w-full rounded-full bg-[var(--accent)] px-8 py-4 text-center font-semibold text-[var(--background)] transition glow-hover sm:w-auto"
            >
              Book Your Discovery Session
            </Link>
            <Link
              href="/ebooks"
              className="w-full rounded-full border-2 border-[var(--border)] px-8 py-4 text-center font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 sm:w-auto"
            >
              Explore the Bookshop
            </Link>
          </div>
        </div>
        <div className="relative z-0 mt-8 animate-float opacity-60">
          <div className="h-24 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>
      </section>

      {/* Core Pillars */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              Core Pillars
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[var(--foreground)]/70">
              Catalyzing a global shift in consciousness through transformative
              literature and expert guidance.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Coaching & Mentorship",
                description:
                  "Personalized roadmaps for elite performance. One-on-one guidance to rewire your mindset and unlock your potential.",
                href: "/discovery",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Keynote Speaking",
                description:
                  "Engaging audiences with conviction to spark immediate mindset shifts. Inspiring change through powerful storytelling.",
                href: "/discovery",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 016-0V3a6 6 0 00-6-6 6 6 0 00-6 6v3a3 3 0 006 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Literature for Growth",
                description:
                  "Curated materials to provide a foundational blueprint for change. E-books and resources for lasting personal and professional transformation.",
                href: "/ebooks",
                icon: (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
            ].map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 transition hover:border-[var(--accent)]/50 hover:bg-[var(--surface)]"
              >
                <div className="rounded-xl bg-[var(--accent)]/10 p-3 text-[var(--accent)] w-fit group-hover:bg-[var(--accent)]/20">
                  {feature.icon}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[var(--foreground)]/70">
                  {feature.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--accent)] group-hover:underline">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            Where you are is not where you&apos;re destined to be.
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground)]/70">
            Book a discovery session or explore the bookshop. Your journey
            begins here.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/discovery"
              className="rounded-full bg-[var(--accent)] px-8 py-4 font-semibold text-[var(--background)] transition glow-hover"
            >
              Book Your Discovery Session
            </Link>
            <Link
              href="/ebooks"
              className="rounded-full border-2 border-[var(--border)] px-8 py-4 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Explore the Bookshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
