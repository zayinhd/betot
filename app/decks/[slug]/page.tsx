import Link from "next/link";

const decks = {
  "human-nutrition": {
    title: "Human Nutrition",
    cards: 124,
    mastery: 78,
    learned: 96,
    toReview: 28,
    actions: ["Start Study", "Practice", "Edit", "Share", "Favorite", "More"],
    studyOptions: [
      {
        title: "Quick Review",
        description: "10 cards",
      },
      {
        title: "Full Review",
        description: "All due cards",
      },
      {
        title: "Practice",
        description: "Random cards",
      },
      {
        title: "Difficult Cards",
        description: "Cards you've struggled with",
      },
    ],
    cardsList: [
      {
        question: "What is BMR?",
        status: "Mastered",
        difficulty: "Easy",
      },
      {
        question: "Define RDA",
        status: "Learning",
        difficulty: "Medium",
      },
      {
        question: "What is BMI?",
        status: "Review",
        difficulty: "Hard",
      },
    ],
  },
} as const;

type DeckSlug = keyof typeof decks;

type DeckPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getBadgeClasses(value: string) {
  switch (value) {
    case "Mastered":
      return "bg-success/10 text-success";
    case "Learning":
      return "bg-warning/10 text-warning";
    case "Review":
      return "bg-danger/10 text-danger";
    case "Easy":
      return "bg-success/10 text-success";
    case "Medium":
      return "bg-warning/10 text-warning";
    case "Hard":
      return "bg-danger/10 text-danger";
    default:
      return "bg-muted text-muted-foreground";
  }
}

export function generateStaticParams() {
  return Object.keys(decks).map((slug) => ({ slug }));
}

export default async function DeckPage({ params }: DeckPageProps) {
  const { slug } = await params;
  const deck = decks[slug as DeckSlug] ?? decks["human-nutrition"];

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/decks" className="transition-colors hover:text-foreground">
            My Decks
          </Link>
          <span>/</span>
          <span className="text-foreground">{deck.title}</span>
        </div>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">{deck.title}</h1>
              <p className="text-base text-muted-foreground">
                {deck.cards} cards · {deck.mastery}% mastery
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {deck.actions.map((action, index) => (
                <button
                  key={action}
                  className={
                    index === 0
                      ? "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      : "rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  }
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Mastery</p>
            <p className="mt-2 text-3xl font-bold text-primary">{deck.mastery}%</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Cards learned</p>
            <p className="mt-2 text-3xl font-bold">{deck.learned} / {deck.cards}</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Cards to review</p>
            <p className="mt-2 text-3xl font-bold">{deck.toReview}</p>
          </article>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Study options</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {deck.studyOptions.map((option) => (
              <article key={option.title} className="rounded-2xl bg-background p-5">
                <h3 className="text-base font-semibold">{option.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{option.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Cards</h2>
            <p className="text-sm text-muted-foreground">Preview of card status and difficulty</p>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-border">
            <table className="min-w-full divide-y divide-border text-left text-sm">
              <thead className="bg-background">
                <tr>
                  <th className="px-4 py-3 font-semibold text-foreground">Question</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Status</th>
                  <th className="px-4 py-3 font-semibold text-foreground">Difficulty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {deck.cardsList.map((card) => (
                  <tr key={card.question}>
                    <td className="px-4 py-4 text-foreground">{card.question}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getBadgeClasses(card.status)}`}>
                        {card.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getBadgeClasses(card.difficulty)}`}>
                        {card.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}