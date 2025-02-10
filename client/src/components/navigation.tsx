import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">TechTraining</span>
        </Link>

        <div className="flex gap-6">
          {links.map(link => (
            <Link key={link.href} href={link.href}>
              <span className={cn(
                "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                location === link.href && "text-primary"
              )}>
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}