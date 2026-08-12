import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/assessment", label: "Assessment" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/coach", label: "AI Coach" },
  { href: "/interview", label: "Interview" },
  { href: "/resume", label: "Resume" },
  { href: "/health", label: "Health" },
];

export default function Navigation() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap gap-x-6 gap-y-2 px-4 py-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}