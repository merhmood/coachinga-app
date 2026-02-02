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
            Coaching • Podcasts • Ebooks
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-8xl">
            Transform your{" "}
            <span className="gradient-text">life</span>
            <br />
            one step at a time
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--foreground)]/70 sm:text-xl">
            Watch exclusive coaching podcasts and get instant access to ebooks
            designed to help you grow. Everything you need, in one place.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/podcasts"
              className="w-full rounded-full bg-[var(--accent)] px-8 py-4 text-center font-semibold text-[var(--background)] transition glow-hover sm:w-auto"
            >
              Watch Podcasts
            </Link>
            <Link
              href="/ebooks"
              className="w-full rounded-full border-2 border-[var(--border)] px-8 py-4 text-center font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/5 sm:w-auto"
            >
              Browse Ebooks
            </Link>
          </div>
        </div>
        <div className="relative z-0 mt-8 animate-float opacity-60">
          <div className="h-24 w-px bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]/30 py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
              Everything you need
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[var(--foreground)]/70">
              Podcasts for inspiration. Ebooks for deep learning. All in one
              modern hub.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "YouTube Podcasts",
                description:
                  "Watch coaching episodes directly in the app. No distractions, just growth.",
                href: "/podcasts",
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
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Ebooks",
                description:
                  "Buy and download ebooks instantly. Practical guides to level up your life.",
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
              {
                title: "Modern Experience",
                description:
                  "Clean, fast interface. Watch and read on any device, anytime.",
                href: "/podcasts",
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground)]/70">
            Start with a podcast or grab an ebook. Your journey begins here.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/podcasts"
              className="rounded-full bg-[var(--accent)] px-8 py-4 font-semibold text-[var(--background)] transition glow-hover"
            >
              Watch Podcasts
            </Link>
            <Link
              href="/ebooks"
              className="rounded-full border-2 border-[var(--border)] px-8 py-4 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Shop Ebooks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
