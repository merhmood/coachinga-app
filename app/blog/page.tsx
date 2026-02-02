import Link from "next/link";

const BLOG_IDEAS = [
  "Where not to die.",
  "What manner of man is this",
  "Fight is good",
  "Know the woman: form and formation",
  "God mysteriously at work",
];

export const metadata = {
  title: "Blog | coachseunopoola",
  description:
    "Writings on faith, mindset, and growth. Insights into scriptures, surroundings, and experiences.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
          Blog
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--foreground)]/70">
          Writings on faith, community, and mindset. Insight into scriptures,
          surroundings, and experiences.
        </p>
      </div>

      <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-8">
        <p className="text-[var(--foreground)]/70">
          Full blog content lives on Oluwaseun&apos;s blog. Below are themes
          you&apos;ll find there and in upcoming pieces.
        </p>
        <ul className="mt-6 space-y-3">
          {BLOG_IDEAS.map((idea) => (
            <li
              key={idea}
              className="flex items-center gap-2 text-[var(--foreground)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {idea}
            </li>
          ))}
        </ul>
        <a
          href="https://oluwasingapore.blogspot.com/?m=1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--background)] transition glow-hover"
        >
          Visit blog (Oluwasingapore)
        </a>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-[var(--accent)] hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
