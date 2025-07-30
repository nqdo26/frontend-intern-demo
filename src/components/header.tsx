"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Navigation } from "./navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-8xl sm:mx-10  px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-900">
          Maxius
        </a>

        {/* Mobile menu button */}
        <div className="flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-gray-900"
                aria-label="Mở menu"
                onClick={() => setOpen(true)}
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex justify-end p-4">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label="Đóng menu"
                    onClick={() => setOpen(false)}
                  >
                    Đóng
                  </Button>
                </SheetClose>
              </div>
              <Navigation onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
