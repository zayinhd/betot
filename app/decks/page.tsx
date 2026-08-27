
import Link from "next/link";
import Input from "@/components/ui/Input";

const filters = ["All", "Recent", "Favorites", "Shared", "Completed", "In Progress"];

const sortOptions = [
  "Recently updated",
  "Recently studied",
  "Name",
  "Most cards",
  "Progress",
];

const decks = [
  {
    slug: "human-nutrition",
    title: "Human Nutrition",
    category: "Nutrition",
    cards: 124,
    progress: 78,
    streak: 5,
    due: 32,
    lastStudied: "Today",
    mastery: 78,
    createdDate: "Jan 12, 2026",
  },
  {
    slug: "food-chemistry",
    title: "Food Chemistry",
    category: "Chemistry",
    cards: 86,
    progress: 61,
    streak: 3,
    due: 14,
    lastStudied: "Yesterday",
    mastery: 61,
    createdDate: "Feb 03, 2026",
  },
  {
    slug: "biochemistry",
    title: "Biochemistry",
    category: "Science",
    cards: 152,
    progress: 44,
    streak: 7,
    due: 28,
    lastStudied: "2 days ago",
    mastery: 44,
    createdDate: "Mar 18, 2026",
  },
];

const folders = [
  {
    name: "Semester 1",
    decks: ["Human Nutrition", "Food Chemistry", "Biochemistry"],
  },
  {
    name: "Semester 2",
    decks: ["Clinical Nutrition", "Food Safety"],
  },
  {
    name: "Exam Prep",
    decks: ["Final Exams", "Past Questions"],
  },
];

export default function Decks() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">My Decks</h1>
            <p className="text-sm text-muted-foreground">
              Organize your study material, track progress, and pick up where you left off.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              + Create Deck
            </button>
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Generate with AI
            </button>
          </div>
        </section>

        <section className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Search</h2>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 stroke-current"
                >
                  <circle cx="9" cy="9" r="5.5" strokeWidth="1.8" />
                  <path d="M13 13l4 4" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <Input
                type="search"
                placeholder="Search your decks..."
                className="pl-10"
                aria-label="Search your decks"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Sort</h2>
            <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-primary/30">
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-white"
                    : "border border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Deck Library</h2>
            <p className="text-sm text-muted-foreground">3 active decks</p>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {decks.map((deck) => (
              <article
                key={deck.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/decks/${deck.slug}`} className="text-lg font-semibold transition-colors hover:text-primary">
                      {deck.title}
                    </Link>
                    <p className="mt-1 inline-flex rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {deck.category}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {deck.progress}%
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-muted-foreground">Cards</p>
                    <p className="mt-1 font-semibold">{deck.cards}</p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-muted-foreground">Cards due</p>
                    <p className="mt-1 font-semibold">{deck.due}</p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-muted-foreground">Study streak</p>
                    <p className="mt-1 font-semibold">{deck.streak} day streak</p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-muted-foreground">Last studied</p>
                    <p className="mt-1 font-semibold">{deck.lastStudied}</p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-muted-foreground">Mastery</p>
                    <p className="mt-1 font-semibold">{deck.mastery}%</p>
                  </div>
                  <div className="rounded-xl bg-background p-3">
                    <p className="text-muted-foreground">Created</p>
                    <p className="mt-1 font-semibold">{deck.createdDate}</p>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${deck.progress}%` }} />
                </div>

                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                    Study
                  </button>
                  <Link
                    href={`/decks/${deck.slug}`}
                    className="flex-1 rounded-md border border-border px-4 py-2 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Open
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Folders</h2>
              <p className="text-sm text-muted-foreground">Group related decks by semester, topic, or exam target.</p>
            </div>
            <button className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              New Folder
            </button>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {folders.map((folder) => (
              <section key={folder.name} className="rounded-2xl bg-background p-5">
                <h3 className="text-lg font-semibold">Folder {folder.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {folder.decks.map((deck) => (
                    <li key={deck} className="rounded-md border border-border px-3 py-2 text-foreground">
                      {deck}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
