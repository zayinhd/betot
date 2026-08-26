
import Link from "next/link";

const footerSections = [
  {
    title: "Product",
    links: ["Features", "Flashcards", "AI Generation", "Analytics", "Explore Decks", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Study Guide", "Blog", "Learning Resources", "FAQ"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers", "Partners"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  {
    title: "Social",
    links: ["Instagram", "X", "LinkedIn", "YouTube", "GitHub"],
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${slugify(item)}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <p className="text-lg font-bold tracking-tight text-foreground">Betot</p>
          <p className="mt-2 text-sm text-muted-foreground">Learn smarter. Remember longer.</p>
          <p className="mt-4 text-xs text-muted-foreground">© 2026 Betot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
