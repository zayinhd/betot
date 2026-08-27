
const reasons = [
  "General question",
  "Technical problem",
  "Account issue",
  "Billing",
  "Feature request",
  "Report a problem",
  "Partnership",
  "Other",
];

const contactCategories = [
  { title: "Support", email: "help@betot.app" },
  { title: "Business", email: "business@betot.app" },
  { title: "Feedback", email: "feedback@betot.app" },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Hero</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">We&apos;re here to help.</h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Have a question, found a bug, or want to tell us what we can improve?
          </p>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Contact form</h2>
            <form className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                  placeholder="What is this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="reason" className="text-sm font-medium">
                  Reason for contacting us
                </label>
                <select
                  id="reason"
                  name="reason"
                  defaultValue=""
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                >
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary"
                  placeholder="Tell us what you need help with"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="attachment" className="text-sm font-medium">
                  Attachment
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm file:font-medium"
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-lg font-semibold">FAQ section</h3>
              <p className="mt-3 text-sm text-muted-foreground">Can&apos;t find your answer?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Contact our support team and we&apos;ll get back to you.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Contact categories</h3>
              <div className="mt-4 space-y-3">
                {contactCategories.map((category) => (
                  <article key={category.title} className="rounded-xl border border-border bg-background p-3">
                    <p className="text-sm font-semibold">{category.title}</p>
                    <a
                      href={`mailto:${category.email}`}
                      className="mt-1 inline-block text-sm text-primary hover:underline"
                    >
                      {category.email}
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
