
import Link from "next/link";

const problems = [
  "Read notes repeatedly",
  "Highlight everything",
  "Forget information after exams",
  "Don\'t know what to review",
  "Have scattered study materials",
];

const solutions = [
  "Flashcards",
  "Spaced repetition",
  "AI-assisted card generation",
  "Study sessions",
  "Progress analytics",
  "Deck organization",
];

const values = [
  {
    title: "Simplicity",
    description: "Learning tools shouldn\'t feel complicated.",
  },
  {
    title: "Consistency",
    description: "Small daily sessions beat last-minute cramming.",
  },
  {
    title: "Progress",
    description: "Learners should be able to see improvement.",
  },
  {
    title: "Accessibility",
    description: "Powerful learning tools should be available to everyone.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section
          className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10"
          style={{ backgroundImage: "linear-gradient(to bottom right, #fff5ef, var(--card), #fffaf5)" }}
        >
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Hero</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Learning should be easier.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Betot exists because studying is often harder than it needs to be. Learners spend
            hours rereading content, but still struggle to retain what matters when it counts.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-muted-foreground">
              Betot helps students turn information into knowledge they can actually remember.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Built for learners
            </p>
            <h2 className="mt-2 text-2xl font-bold">Who Betot is for</h2>
            <p className="mt-3 text-muted-foreground">
              Betot is for students, independent learners, and professionals preparing for
              coursework, certifications, and long-term mastery. If you want to study with more
              focus and retain more over time, Betot is designed for you.
            </p>
          </article>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-bold">The Problem</h2>
            <p className="mt-2 text-sm text-muted-foreground">Students often:</p>
            <ul className="mt-4 space-y-2">
              {problems.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Our Solution</h2>
            <p className="mt-2 text-sm text-muted-foreground">Betot brings together:</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {solutions.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Values</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border border-border bg-background p-4">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-border bg-primary p-8 text-center text-white shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight">Start learning with Betot</h2>
          <p className="mt-3 text-white/90">
            Turn your notes into daily progress with simple, consistent study sessions.
          </p>
          <div className="mt-6">
            <Link
              href="/auth/sign-up"
              className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-secondary transition hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
