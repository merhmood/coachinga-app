// Add your YouTube video IDs from https://www.youtube.com/@agreementpodcast
const PODCAST_EPISODES = [
  {
    id: "dQw4w9WgXcQ",
    title: "The Disagreement (this agreement) Sessions — Episode 1",
    description:
      "Weekly 30-minute interviews with faith, community & industry leaders discussing Mindset vs. Material.",
  },
  {
    id: "jNQXAC9IVRw",
    title: "The Disagreement (this agreement) Sessions — Episode 2",
    description:
      "Professional, minimalist studio audio. Engaging conversations to spark immediate mindset shifts.",
  },
  {
    id: "9bZkp7q19f0",
    title: "The Disagreement (this agreement) Sessions — Episode 3",
    description:
      "Faith, community & industry leaders on mindset engineering and intentional growth.",
  },
];

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-[var(--surface)]">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

export default function PodcastsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
          The Disagreement (this agreement) Sessions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--foreground)]/70">
          Weekly 30-minute interviews with faith, community & industry leaders
          discussing &quot;Mindset vs. Material.&quot; Professional, minimalist
          studio audio for high impact.
        </p>
        <a
          href="https://www.youtube.com/@agreementpodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[var(--border)] px-6 py-3 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:bg-[var(--accent)]/5"
        >
          Subscribe on YouTube
        </a>
      </div>

      <div className="mt-16 space-y-16">
        {PODCAST_EPISODES.map((episode) => (
          <section key={episode.id} className="scroll-mt-24">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
                {episode.title}
              </h2>
              <p className="mt-2 text-[var(--foreground)]/70">
                {episode.description}
              </p>
              <div className="mt-6">
                <YouTubeEmbed videoId={episode.id} title={episode.title} />
              </div>
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-[var(--foreground)]/50">
        Replace the video IDs above with your actual episode IDs from{" "}
        <a
          href="https://www.youtube.com/@agreementpodcast"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          YouTube @agreementpodcast
        </a>
        .
      </p>
    </div>
  );
}
