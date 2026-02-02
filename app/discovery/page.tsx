import Link from "next/link";

export const metadata = {
  title: "Book Your Discovery Session | coachseunopoola",
  description:
    "Book a discovery session with Coach Seun Opoola. Personalized roadmaps for elite performance through coaching and mentorship.",
};

export default function DiscoveryPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
          Book Your Discovery Session
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--foreground)]/70">
          Bridge the gap between where you are and where you are destined to be.
          Personalized roadmaps for elite performance through coaching and
          mentorship.
        </p>
      </div>

      <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-8 sm:p-10">
        <h2 className="font-display text-xl font-semibold text-[var(--foreground)]">
          Get in touch
        </h2>
        <p className="mt-3 text-[var(--foreground)]/70">
          Email Oluwaseun (Coach Seun Opoola) to schedule your discovery
          session or inquire about keynote speaking and coaching programs.
        </p>
        <a
          href="mailto:agreementpodcast@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--background)] transition glow-hover"
        >
          agreementpodcast@gmail.com
        </a>
        <p className="mt-6 text-sm text-[var(--foreground)]/60">
          You can also use this address for podcast and collaboration inquiries.
        </p>
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
