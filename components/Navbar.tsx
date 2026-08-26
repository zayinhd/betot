

const links = [
  { name: "Home", href: "/home" },
  { name: "Decks", href: "/decks" },
  {name: "study"},
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Betot</h1>
      {links.map((link) => (
        <a key={link.name} href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
}
