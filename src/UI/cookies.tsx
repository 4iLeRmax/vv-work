import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiesProps {
  links: { title: string; link: string }[];
}

export default function Cookies({ links }: CookiesProps) {
  return (
    <>
      <ul className="flex items-center gap-3">
        {links.map((l, i) =>
          i !== links.length - 1 ? (
            <Link
              to={l.link}
              key={l.title + l.link}
              className="flex items-center gap-3 text-brand-secondary"
            >
              <span>{l.title}</span>
              <ChevronRight size={10} />
            </Link>
          ) : (
            <h2
              key={l.title + l.link}
              className="flex items-center gap-3 text-brand-primary font-bold"
            >
              <span>{l.title}</span>
            </h2>
          ),
        )}
      </ul>
    </>
  );
}
