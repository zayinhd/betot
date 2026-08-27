
const overviewMetrics = [
  { value: "12", label: "Day streak", accent: "warning" },
  { value: "1,248", label: "Cards studied", accent: "primary" },
  { value: "84%", label: "Average accuracy", accent: "success" },
  { value: "32h 18m", label: "Study time", accent: "secondary" },
];

const activityData = [42, 58, 64, 49, 73, 91, 84, 97, 76, 88, 94, 101];
const accuracyData = [72, 75, 78, 76, 80, 82, 79, 84, 86, 83, 87, 84];

const masteryBreakdown = [
  { label: "Mastered", value: 64, color: "bg-success" },
  { label: "Learning", value: 23, color: "bg-warning" },
  { label: "Needs Review", value: 13, color: "bg-danger" },
];

const subjectPerformance = [
  { subject: "Nutrition", mastery: "92%" },
  { subject: "Biochemistry", mastery: "81%" },
  { subject: "Food Safety", mastery: "76%" },
  { subject: "Physiology", mastery: "68%" },
];

const weakAreas = [
  { name: "Vitamins", score: "54%" },
  { name: "Minerals", score: "61%" },
  { name: "Metabolism", score: "63%" },
];

const achievements = [
  "First Deck",
  "7 Day Streak",
  "1,000 Cards Studied",
  "90% Accuracy",
  "30 Minute Session",
  "100 Cards Mastered",
];

export default function Analytics() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight">Your Learning Analytics</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Review your study patterns, progress trends, and the topics that need more attention.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewMetrics.map((metric) => (
            <article key={metric.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p
                className={`text-3xl font-bold ${
                  metric.accent === "warning"
                    ? "text-warning"
                    : metric.accent === "success"
                      ? "text-success"
                      : metric.accent === "secondary"
                        ? "text-secondary"
                        : "text-primary"
                }`}
              >
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Learning activity</h2>
                <p className="mt-1 text-sm text-muted-foreground">Cards studied over time</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['7 days', '30 days', '3 months', '1 year'].map((range, index) => (
                  <button
                    key={range}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      index === 0
                        ? 'bg-primary text-white'
                        : 'border border-border bg-background text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex h-64 items-end gap-3 rounded-2xl bg-background p-4">
              {activityData.map((value, index) => (
                <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-t-xl bg-primary/80"
                    style={{ height: `${Math.max(value * 1.7, 16)}px` }}
                  />
                  <span className="text-xs text-muted-foreground">W{index + 1}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Accuracy</h2>
            <p className="mt-1 text-sm text-muted-foreground">84% average accuracy</p>

            <div className="mt-6 flex h-64 items-end gap-2 rounded-2xl bg-background p-4">
              {accuracyData.map((value, index) => (
                <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                  <div
                    className="w-full rounded-t-xl bg-success/80"
                    style={{ height: `${Math.max(value * 1.8, 20)}px` }}
                  />
                  <span className="text-xs text-muted-foreground">M{index + 1}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold">Mastery</h2>
            <div className="mt-5 space-y-4">
              {masteryBreakdown.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className="text-muted-foreground">{item.value}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-muted">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Study habits</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="rounded-xl bg-background p-4">
                <dt className="text-muted-foreground">Most productive day</dt>
                <dd className="mt-1 font-semibold text-foreground">Tuesday</dd>
              </div>
              <div className="rounded-xl bg-background p-4">
                <dt className="text-muted-foreground">Most productive time</dt>
                <dd className="mt-1 font-semibold text-foreground">7 PM - 9 PM</dd>
              </div>
              <div className="rounded-xl bg-background p-4">
                <dt className="text-muted-foreground">Average session</dt>
                <dd className="mt-1 font-semibold text-foreground">24 minutes</dd>
              </div>
            </dl>
          </article>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Subject performance</h2>
            <div className="mt-5 overflow-hidden rounded-2xl border border-border">
              <table className="min-w-full divide-y divide-border text-left text-sm">
                <thead className="bg-background">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-foreground">Subject</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Mastery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {subjectPerformance.map((item) => (
                    <tr key={item.subject}>
                      <td className="px-4 py-4 text-foreground">{item.subject}</td>
                      <td className="px-4 py-4 text-muted-foreground">{item.mastery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Areas that need attention</h2>
            <ul className="mt-5 space-y-3">
              {weakAreas.map((area) => (
                <li key={area.name} className="flex items-center justify-between rounded-xl bg-background px-4 py-3 text-sm">
                  <span className="font-medium text-foreground">{area.name}</span>
                  <span className="text-danger">{area.score}</span>
                </li>
              ))}
            </ul>
            <button className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Review Weak Areas
            </button>
          </article>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Achievements</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement) => (
              <article key={achievement} className="rounded-2xl border border-border bg-background p-5">
                <p className="text-base font-semibold text-foreground">{achievement}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
