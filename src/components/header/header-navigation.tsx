import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav className="flex items-center gap-8 text-brand-primary">
        <div className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer">
          Знайти роботу
        </div>
        <div className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer">
          Знайти працівника
        </div>
        <div className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer">
          Про нас
        </div>
        <Link
          to={"/partner"}
          className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer"
        >
          Партнери
        </Link>
        <Link
          to={"/contacts"}
          className="text-brand-secondary hover:text-brand-accent transition-colors cursor-pointer"
        >
          Контакти
        </Link>
      </nav>
    </>
  );
}
