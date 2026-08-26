import Link from "next/link";

const mainLinks = [
	{ name: "Home", href: "/home", icon: HomeIcon },
	{ name: "My Decks", href: "/decks", icon: DecksIcon },
	{ name: "Study", href: "/study", icon: BrainIcon },
	{ name: "Analytics", href: "/analytics", icon: ChartIcon },
	{ name: "Explore", href: "/explore", icon: SearchIcon },
];

const createLinks = [
	{ name: "Create Deck", href: "/decks/new", icon: PlusIcon },
	{ name: "Generate with AI", href: "/decks/generate", icon: SparklesIcon },
	{ name: "Import PDF", href: "/decks/import", icon: FileIcon },
];

const otherLinks = [
	{ name: "Favorites", href: "/favorites", icon: StarIcon },
	{ name: "Settings", href: "/settings", icon: SettingsIcon },
	{ name: "Help & Support", href: "/support", icon: HelpIcon },
];

type IconProps = {
	className?: string;
};

function SidebarSection({
	title,
	links,
}: {
	title?: string;
	links: Array<{ name: string; href: string; icon: (props: IconProps) => React.JSX.Element }>;
}) {
	return (
		<section className="space-y-3">
			{title ? <h2 className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</h2> : null}
			<div className="space-y-1">
				{links.map((link) => {
					const Icon = link.icon;

					return (
						<Link
							key={link.name}
							href={link.href}
							className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
						>
							<Icon className="h-4 w-4 text-muted-foreground" />
							<span>{link.name}</span>
						</Link>
					);
				})}
			</div>
		</section>
	);
}

export default function Sidebar() {
	return (
		<aside className="flex min-h-screen w-full max-w-xs flex-col border-r border-border bg-card text-card-foreground">
			<div className="px-6 py-6">
				<Link href="/home" className="text-xl font-bold tracking-[0.22em] text-foreground">
					BETOT
				</Link>
			</div>

			<div className="flex flex-1 flex-col gap-6 px-4">
				<SidebarSection links={mainLinks} />
				<div className="h-px bg-border" />
				<SidebarSection title="Create" links={createLinks} />
				<div className="h-px bg-border" />
				<SidebarSection title="Other" links={otherLinks} />
			</div>

			<div className="border-t border-border p-4">
				<div className="flex items-center gap-3 rounded-2xl bg-background p-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
						M
					</div>
					<div>
						<p className="text-sm font-semibold text-foreground">Mubarak</p>
						<p className="text-xs text-muted-foreground">Free Plan</p>
					</div>
				</div>
			</div>
		</aside>
	);
}

function HomeIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M3 10.5L12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M5.25 9.75V21h13.5V9.75" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function DecksIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M6 4.5h10.5A1.5 1.5 0 0 1 18 6v12a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5Z" strokeLinejoin="round" />
			<path d="M8 8h6M8 11.5h8M8 15h5" strokeLinecap="round" />
		</svg>
	);
}

function BrainIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M9 5.25a3 3 0 0 0-5.25 2v.75A3 3 0 0 0 5.25 10.5v.75A3 3 0 0 0 7.5 14.1V15a3.75 3.75 0 0 0 7.5 0v-.9a3 3 0 0 0 2.25-2.85v-.75a3 3 0 0 0 1.5-2.55V7.5A3 3 0 0 0 13.5 5.25" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M9 5.25c1.243 0 2.25 1.007 2.25 2.25V18M15 5.25c-1.243 0-2.25 1.007-2.25 2.25" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function ChartIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M4.5 19.5h15" strokeLinecap="round" />
			<path d="M7.5 16.5V10.5" strokeLinecap="round" />
			<path d="M12 16.5V6.75" strokeLinecap="round" />
			<path d="M16.5 16.5V12" strokeLinecap="round" />
		</svg>
	);
}

function SearchIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<circle cx="11" cy="11" r="6" />
			<path d="M20 20l-4.35-4.35" strokeLinecap="round" />
		</svg>
	);
}

function PlusIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M12 5v14M5 12h14" strokeLinecap="round" />
		</svg>
	);
}

function SparklesIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" strokeLinejoin="round" />
			<path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2ZM5.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" strokeLinejoin="round" />
		</svg>
	);
}

function FileIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M8.25 3.75h5.379c.398 0 .779.158 1.06.44l3.121 3.121c.281.281.44.662.44 1.06V18A2.25 2.25 0 0 1 16 20.25H8.25A2.25 2.25 0 0 1 6 18V6A2.25 2.25 0 0 1 8.25 3.75Z" strokeLinejoin="round" />
			<path d="M14.25 3.75V8.25H18.75" strokeLinejoin="round" />
		</svg>
	);
}

function StarIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="m12 3.75 2.47 5.002 5.52.802-3.995 3.893.943 5.498L12 16.35l-4.938 2.595.943-5.498L4.01 9.554l5.52-.802L12 3.75Z" strokeLinejoin="round" />
		</svg>
	);
}

function SettingsIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<path d="M10.325 4.317a1.724 1.724 0 0 1 3.35 0 1.724 1.724 0 0 0 2.573 1.066 1.724 1.724 0 0 1 2.894 1.675 1.724 1.724 0 0 0 1.066 2.573 1.724 1.724 0 0 1 0 3.35 1.724 1.724 0 0 0-1.066 2.573 1.724 1.724 0 0 1-2.894 1.675 1.724 1.724 0 0 0-2.573 1.066 1.724 1.724 0 0 1-3.35 0 1.724 1.724 0 0 0-2.573-1.066 1.724 1.724 0 0 1-2.894-1.675 1.724 1.724 0 0 0-1.066-2.573 1.724 1.724 0 0 1 0-3.35 1.724 1.724 0 0 0 1.066-2.573 1.724 1.724 0 0 1 2.894-1.675 1.724 1.724 0 0 0 2.573-1.066Z" strokeLinejoin="round" />
			<circle cx="12" cy="12" r="3" />
		</svg>
	);
}

function HelpIcon({ className = "" }: IconProps) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
			<circle cx="12" cy="12" r="8.25" />
			<path d="M9.75 9.75a2.25 2.25 0 1 1 3.404 1.93c-.773.464-1.154.964-1.154 1.82v.375" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M12 16.5h.008" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}
