import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="hidden items-center gap-4 text-sm text-brand-primary min-[768px]:flex min-[1440px]:gap-8 min-[1440px]:text-base">
      <div className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer whitespace-nowrap">
        Знайти роботу
      </div>
      <div className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer whitespace-nowrap">
        Знайти працівника
      </div>
      <div className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer whitespace-nowrap">
        Про нас
      </div>
      <Link
        to={"/partners"}
        className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer whitespace-nowrap"
      >
        Партнери
      </Link>
      <Link
        to={"/contacts"}
        className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer whitespace-nowrap"
      >
        Контакти
      </Link>
    </nav>
  );
}
