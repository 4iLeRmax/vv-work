import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LoginButton from "../../UI/login-button";

const NAV_LINKS: { label: string; to?: string }[] = [
  { label: "Знайти роботу" },
  { label: "Знайти працівника" },
  { label: "Про нас" },
  { label: "Партнери", to: "/partners" },
  { label: "Контакти", to: "/contacts" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-[768px]:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Закрити меню" : "Відкрити меню"}
        aria-expanded={open}
        className="flex items-center justify-center w-10 h-10 rounded-md text-brand-primary cursor-pointer"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 bg-white border-t border-bor-primary shadow-lg">
          <nav className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-brand-secondary hover:text-brand-accent transition-colors border-b border-bor-primary last:border-b-0"
                >
                  {link.label}
                </Link>
              ) : (
                <div
                  key={link.label}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-brand-secondary hover:text-brand-accent transition-colors border-b border-bor-primary last:border-b-0 cursor-pointer"
                >
                  {link.label}
                </div>
              ),
            )}
          </nav>
          <div className="px-4 py-4">
            <LoginButton />
          </div>
        </div>
      )}
    </div>
  );
}
