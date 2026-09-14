import { MapPin, Search } from "lucide-react";
import React from "react";

export default function HeroSearchContainer() {
  return (
    <>
      <div className="bg-white p-2 rounded-2xl border border-bor-primary">
        <div className="flex items-center gap-3">
          {/*  */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 w-80">
              <Search size={20} className="text-brand-accent" />
              <input
                type="text"
                placeholder="Посада або ключове слово"
                className="w-full"
              />
            </div>
            <div className="h-10 w-0.5 bg-bor-primary"></div>
            <div className="flex items-center gap-2 px-4 w-80">
              <MapPin size={20} className="text-brand-accent" />
              <input type="text" placeholder="Місто або країна" />
            </div>
          </div>
          {/*  */}
          <button className="text-lg bg-brand-accent text-white rounded-xl w-30 py-2.5 ">
            Знайти
          </button>
        </div>
      </div>
    </>
  );
}
