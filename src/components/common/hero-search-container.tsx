import { MapPin, Search } from "lucide-react";

export default function HeroSearchContainer() {
  return (
    <div className="bg-white p-2 rounded-2xl border border-bor-primary w-full max-w-200 min-[768px]:w-auto">
      <div className="flex flex-col gap-2 min-[768px]:flex-row min-[768px]:items-center min-[768px]:gap-3">
        <div className="flex flex-col min-[768px]:flex-row min-[768px]:items-center gap-2 min-[768px]:gap-3 w-full">
          <div className="flex items-center gap-2 px-4 w-full min-[768px]:w-64 min-[1440px]:w-80">
            <Search size={20} className="text-brand-accent shrink-0" />
            <input
              type="text"
              placeholder="Посада або ключове слово"
              className="w-full min-w-0"
            />
          </div>
          <div className="h-0.5 w-full min-[768px]:h-10 min-[768px]:w-0.5 bg-bor-primary"></div>
          <div className="flex items-center gap-2 px-4 w-full min-[768px]:w-64 min-[1440px]:w-80">
            <MapPin size={20} className="text-brand-accent shrink-0" />
            <input
              type="text"
              placeholder="Місто або країна"
              className="w-full min-w-0"
            />
          </div>
        </div>
        <button className="text-lg bg-brand-accent text-white rounded-xl w-full min-[768px]:w-30 py-2.5">
          Знайти
        </button>
      </div>
    </div>
  );
}
