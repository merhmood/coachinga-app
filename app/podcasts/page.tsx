// Replace these with your actual YouTube video IDs (from the video URL: youtube.com/watch?v=VIDEO_ID)
const PODCAST_EPISODES = [
  {
    id: "dQw4w9WgXcQ",
    title: "Episode 1: Introduction to Coaching",
    description: "What is coaching and how can it change your life?",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Episode 2: Setting Powerful Goals",
    description: "The science and art of goal-setting that actually works.",
  },
  {
    id: "9bZkp7q19f0",
    title: "Episode 3: Building Habits",
    description: "How to build habits that stick and compound over time.",
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
          Podcasts
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--foreground)]/70">
          Watch coaching episodes from YouTube. New episodes added regularly.
        </p>
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
        Replace the video IDs in the code with your own YouTube podcast video
        IDs to show your content.
      </p>
    </div>
  );
}
