import Link from "next/link";

const internalLinks = [
  { href: "/", label: "Home" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/ebooks", label: "Bookshop" },
  { href: "/blog", label: "Blog" },
  { href: "/discovery", label: "Discovery Session" },
];

const externalLinks = [
  { href: "https://oluwasingapore.blogspot.com/?m=1", label: "Blog (Oluwasingapore)" },
  { href: "https://www.youtube.com/@agreementpodcast", label: "YouTube" },
  { href: "http://bit.ly/4pIElLs", label: "The Middle of Everything" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center lg:text-left">
            <Link
              href="/"
              className="text-lg font-bold text-[var(--foreground)] hover:text-[var(--accent)]"
            >
              coachseunopoola
            </Link>
            <p className="mt-1 text-sm font-medium text-[var(--foreground)]/80">
              Oluwaseun Opoola · Coach Seun Opoola (cso)
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]/60">
              To catalyze a global shift in consciousness by empowering
              individuals to rewire their mindsets through transformative
              literature and expert guidance.
            </p>
            <a
              href="mailto:agreementpodcast@gmail.com"
              className="mt-3 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
            >
              agreementpodcast@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center lg:gap-12">
            <nav>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/50">
                Site
              </p>
              <ul className="flex flex-wrap justify-center gap-4 sm:flex-col sm:justify-start">
                {internalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--foreground)]/70 transition hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]/50">
                Connect
              </p>
              <ul className="flex flex-wrap justify-center gap-4 sm:flex-col sm:justify-start">
                {externalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--foreground)]/70 transition hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--foreground)]/50">
          © {new Date().getFullYear()} Oluwaseun Opoola (coachseunopoola). All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
