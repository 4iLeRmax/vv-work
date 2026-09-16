import { Mail, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  const columns = [
    {
      title: "Для кандидатів",
      links: [
        "Знайти роботу",
        "Категорії вакансій",
        "Як це працює",
        "Відгуки",
        "FAQ",
      ],
    },
    {
      title: "Для роботодавців",
      links: [
        "Знайти працівника",
        "Розмістити вакансію",
        "Тарифи",
        "Партнерство",
        "Підтримка",
      ],
    },
  ];

  return (
    <>
      <footer className="bg-brand-primary text-brand-accent">
        <div className=" px-20 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <h2 className="text-primary text-xl font-semibold tracking-tight mb-4">
                VV WORK
              </h2>
              <p className="text-sm leading-relaxed text-brand-secondary max-w-[220px]">
                Платформа для пошуку роботи та працівників у Європі. Поєднуємо
                професійний потенціал та надійними роботодавцями.
              </p>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-primary text-sm font-semibold mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-brand-secondary hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-primary text-sm font-semibold mb-4">
                Контакти
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-brand-secondary">
                  <Mail size={15} className="text-slate-500" />
                  <a
                    href="mailto:info@vvwork.eu"
                    className="hover:text-primary transition-colors"
                  >
                    info@vvwork.eu
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-brand-secondary">
                  <Phone size={15} className="text-slate-500" />
                  <a
                    href="tel:+380441234567"
                    className="hover:text-primary transition-colors"
                  >
                    +380 99 999 9999
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 select-none pointer-events-none">
            <p className="text-[64px] md:text-[88px] font-bold tracking-tight text-primary/[0.04] text-center leading-none">
              VV WORK
            </p>
          </div>

          <div className="mt-4 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2025 VV WORK. Усі права захищені.</p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-brand-secondary transition-colors"
              >
                Політика конфіденційності
              </a>
              <a
                href="#"
                className="hover:text-brand-secondary transition-colors"
              >
                Умови користування
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
