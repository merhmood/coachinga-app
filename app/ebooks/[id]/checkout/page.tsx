import Link from "next/link";

// Placeholder: replace with real ebook data and Stripe/Gumroad integration
export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ebookTitle = "Your Ebook"; // Fetch by id in production

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
        <h1 className="font-display text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          Checkout
        </h1>
        <p className="mt-4 text-[var(--foreground)]/70">
          You selected: <strong>{ebookTitle}</strong> (ID: {id})
        </p>
        <p className="mt-4 text-sm text-[var(--foreground)]/60">
          For inquiries about books or bulk orders, email{" "}
          <a
            href="mailto:agreementpodcast@gmail.com"
            className="text-[var(--accent)] hover:underline"
          >
            agreementpodcast@gmail.com
          </a>
          .
        </p>
        <p className="mt-6 text-sm text-[var(--foreground)]/60">
          To accept real payments, integrate Stripe, Gumroad, or another
          payment provider. Add your API keys and checkout session logic in{" "}
          <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[var(--accent)]">
            app/ebooks/[id]/checkout/
          </code>
          .
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/ebooks"
            className="rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--background)] transition glow-hover"
          >
            Back to Bookshop
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[var(--border)] px-6 py-3 font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
