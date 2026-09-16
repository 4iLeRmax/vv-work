import { Link } from "react-router-dom";
import { Check, Link as LinkIcon } from "lucide-react";

interface SidebarProps {
  about: string;
  website: string;
  perks: string[];
}

export default function Sidebar({ about, website, perks }: SidebarProps) {
  return (
    <div className="w-full flex flex-col items-center gap-8 min-[1440px]:w-95 min-[1440px]:shrink-0">
      <div className="w-full flex flex-col items-start bg-white rounded-xl border border-bor-primary p-5 min-[768px]:p-8">
        <h2 className="text-xl font-bold text-brand-primary min-[768px]:text-2xl">
          Про компанію
        </h2>
        <p className="mt-4 text-brand-secondary">{about}</p>
        <div className="mt-10">
          <p className="text-brand-secondary font-semibold">
            Офіційний вебсайт
          </p>
          <Link
            to={website}
            className="flex items-center gap-1 text-brand-accent mt-2"
          >
            <LinkIcon size={20} />
            <span className="text-sm font-semibold break-all">
              {website.replace("https://", "")}
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col items-start bg-white rounded-xl border border-bor-primary p-5 min-[768px]:p-8">
        <h2 className="text-xl font-bold text-brand-primary min-[768px]:text-2xl">
          Соціальний пакет
        </h2>
        <ul className="flex flex-col gap-3 mt-4">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-3">
              <div className="w-7 h-7 shrink-0 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center">
                <Check size={20} />
              </div>
              <p className="text-brand-secondary text-sm font-semibold">
                {perk}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
