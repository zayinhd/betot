import Link from "next/link";

const quickActions = [
  { label: "Create Deck", href: "/decks/new" },
  { label: "Generate Flashcards", href: "/decks/generate" },
  { label: "Import PDF", href: "/decks/import" },
  { label: "Browse Decks", href: "/decks" },
  { label: "Start Review", href: "/study" },
];

const recentDecks = [
  {
    name: "Human Nutrition",
    cards: 32,
    due: 12,
    mastery: 75,
    cta: "Continue",
  },
  {
    name: "Food Safety",
    cards: 48,
    due: 8,
    mastery: 82,
    cta: "Today\'s Study",
  },
];

const weeklyStudy = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const activeDays = [true, true, true, false, true, true, true];

const recommendedDecks = [
  {
    title: "Metabolism Essentials",
    reason: "Matches your nutrition study path",
  },
  {
    title: "Clinical Food Microbiology",
    reason: "Popular with food safety learners",
  },
  {
    title: "Biochemistry Rapid Review",
    reason: "Aligned with your recent deck creation",
  },
];

const activity = [
  'Created "Biochemistry"',
  "Studied 35 cards",
  "Mastered 12 cards",
  'Imported "DIET 612 Notes.pdf"',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                B
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Header</p>
                <h1 className="text-xl font-bold">Betot</h1>
              </div>
            </div>

            <div className="flex flex-1 items-center gap-3 lg:max-w-2xl">
              <label htmlFor="home-search" className="sr-only">
                Search
              </label>
              <input
                id="home-search"
                type="search"
                placeholder="Search decks, cards, or subjects"
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary"
              />
              <button
                type="button"
                className="rounded-xl border border-border px-3 py-2 text-sm font-medium transition hover:bg-muted"
              >
                Notifications
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-semibold text-secondary"
                aria-label="Profile avatar"
                title="Profile/avatar"
              >
                Z
              </button>
              <Link
                href="/decks/new"
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Quick Create Deck
              </Link>
            </div>
          </div>
        </header>

        <section className="grid gap-4 rounded-2xl border border-border bg-gradient-to-r from-[#fff5ef] via-card to-[#fffaf5] p-6 shadow-sm lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Welcome</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Good afternoon, Zayin</h2>
            <p className="mt-2 text-muted-foreground">Ready to keep learning?</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xs text-muted-foreground">Current study streak</p>
              <p className="mt-1 text-xl font-bold">7 days</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xs text-muted-foreground">Cards due today</p>
              <p className="mt-1 text-xl font-bold">24</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xs text-muted-foreground">Cards studied today</p>
              <p className="mt-1 text-xl font-bold">35</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3">
              <p className="text-xs text-muted-foreground">Study time this week</p>
              <p className="mt-1 text-xl font-bold">4h 20m</p>
            </div>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
          <section className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recently Studied Decks</h3>
                <Link href="/decks" className="text-sm font-medium text-primary hover:underline">
                  View all
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {recentDecks.map((deck) => (
                  <article key={deck.name} className="rounded-xl border border-border bg-background p-4">
                    <h4 className="text-base font-semibold">{deck.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{deck.cards} cards</p>
                    <p className="text-sm text-muted-foreground">{deck.due} cards due</p>
                    <div className="mt-3 h-2 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${deck.mastery}%` }}
                        aria-label={`${deck.mastery}% mastery`}
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="font-medium">{deck.mastery}% mastery</span>
                      <Link href="/study" className="font-semibold text-primary hover:underline">
                        {deck.cta} 
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-primary p-6 text-white shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">`Today&apos;s Study`</p>
              <h3 className="mt-2 text-2xl font-bold">Your daily review</h3>
              <p className="mt-2 text-sm text-white/90">24 cards are ready for review.</p>
              <Link
                href="/study"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-secondary transition hover:opacity-90"
              >
                Start Review 
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Quick Actions</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium transition hover:border-primary hover:text-primary"
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Learning streak</p>
              <h3 className="mt-2 text-2xl font-bold">7 day streak</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                `You&apos;ve studied for 7 consecutive days.`
              </p>

              <div className="mt-4 grid grid-cols-7 gap-2">
                {weeklyStudy.map((day, idx) => (
                  <div key={day} className="text-center">
                    <p className="mb-1 text-[10px] uppercase text-muted-foreground">{day}</p>
                    <div
                      className={`mx-auto h-7 w-7 rounded-full border ${
                        activeDays[idx]
                          ? "border-transparent bg-primary"
                          : "border-border bg-muted"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Recommended Decks</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Based on subjects, recently created decks, popular decks, user interests, and recent activity.
              </p>
              <div className="mt-4 space-y-3">
                {recommendedDecks.map((deck) => (
                  <article key={deck.title} className="rounded-xl border border-border bg-background p-3">
                    <h4 className="text-sm font-semibold">{deck.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{deck.reason}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {activity.map((entry) => (
                  <li key={entry} className="rounded-lg bg-background px-3 py-2">
                    {entry}
                  </li>
                ))}
              </ul>
            </section>

            <Link
              href="/study"
              className="inline-flex w-full justify-center rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Continue Learning
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
