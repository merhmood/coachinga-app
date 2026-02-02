import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/ebooks", label: "Ebooks" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-lg font-bold text-[var(--foreground)] hover:text-[var(--accent)]"
            >
              coachseunopoola
            </Link>
            <p className="mt-2 text-sm text-[var(--foreground)]/60">
              Transform your life with coaching, podcasts, and ebooks.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--foreground)]/70 transition hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--foreground)]/50">
          © {new Date().getFullYear()} coachseunopoola. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
