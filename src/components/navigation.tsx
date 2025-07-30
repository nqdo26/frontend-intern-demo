"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  const router = useRouter();
  const goToPage = (href: string) => {
    if (href === "#home") router.push("/");
    else if (href === "#features") router.push("/features");
    else if (href === "#about") router.push("/about");
    else if (href === "#contact") router.push("/contact");
    if (onNavigate) onNavigate();
  };

  return (
    <nav>
      <div className="border-b px-4 py-3">
        <a
          href="#home"
          className="text-2xl font-bold text-gray-900 block"
          onClick={() => goToPage("#home")}
        >
          Maxius
        </a>
      </div>
      <div className="px-2 pt-4 pb-3 space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start text-gray-700 hover:text-gray-900 text-base font-medium"
            onClick={() => goToPage(item.href)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </nav>
  );
}
