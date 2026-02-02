import Link from "next/link";

// Replace with your real ebooks; these are placeholders
const EBOOKS = [
  {
    id: "1",
    title: "The Mindset Shift",
    description:
      "A practical guide to changing your mindset and achieving lasting personal growth. Includes exercises and reflection prompts.",
    price: 19.99,
    image: "/ebooks/mindset.jpg",
    format: "PDF",
  },
  {
    id: "2",
    title: "Goals That Stick",
    description:
      "Learn how to set goals you actually achieve. Frameworks, habits, and accountability systems that work.",
    price: 24.99,
    image: "/ebooks/goals.jpg",
    format: "PDF + EPUB",
  },
  {
    id: "3",
    title: "Coaching Yourself",
    description:
      "Self-coaching techniques you can use every day. Questions, journaling prompts, and weekly practices.",
    price: 29.99,
    image: "/ebooks/self-coaching.jpg",
    format: "PDF",
  },
];

export const metadata = {
  title: "The Bookshop | coachseunopoola",
  description:
    "Literature for growth. Curated materials to provide a foundational blueprint for change. E-books and resources.",
};

export default function EbooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
          The Bookshop
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--foreground)]/70">
          Literature for growth. Curated materials to provide a foundational
          blueprint for change. Buy once, keep forever.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EBOOKS.map((ebook) => (
          <article
            key={ebook.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[var(--accent)]/50"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-[var(--accent)]/20 to-[var(--surface)] flex items-center justify-center">
              <svg
                className="h-24 w-24 text-[var(--accent)]/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                {ebook.format}
              </span>
              <h2 className="mt-2 font-display text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
                {ebook.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-[var(--foreground)]/70">
                {ebook.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-[var(--foreground)]">
                  ${ebook.price.toFixed(2)}
                </span>
                <Link
                  href={`/ebooks/${ebook.id}/checkout`}
                  className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition glow-hover"
                >
                  Buy now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
