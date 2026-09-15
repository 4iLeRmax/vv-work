import { ArrowRight, BadgeCheck, Check, MapPin } from "lucide-react";
import type { Partner } from "../../../types";
import { Link } from "react-router-dom";
import VerifiedBadge from "../../../UI/verified-badge";
import Perk from "../../../UI/perk";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <>
      <div className="">
        <div className="overflow-hidden rounded-xl border border-bor-primary bg-primary">
          <div className="relative w-full h-40">
            <img
              src={partner.imgURL}
              alt={partner.name}
              className="object-cover w-full h-full"
            />
            {partner.verified ? (
              <div className="absolute top-3 left-3">
                <VerifiedBadge />
              </div>
            ) : null}
          </div>

          <div className="p-5">
            <span className="text-xs font-bold text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-md">
              {partner.industry}
            </span>
            <h1 className="text-2xl font-bold mt-2">{partner.name}</h1>
            <div className="flex items-center gap-1 text-brand-secondary mt-4">
              <MapPin size={20} />
              <span>
                {partner.location.country},{partner.location.city}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-brand-secondary text-sm">
              <div className="flex items-center gap-1">
                <h2>Співробітники:</h2>
                <span className="text-brand-primary font-bold">
                  {partner.employeesCount}
                </span>
              </div>
              <div className="w-1 h-1 bg-bor-primary rounded-full"></div>
              <div className="flex items-center gap-1">
                <h2>Рік заснування:</h2>
                <span className="text-brand-primary font-bold">
                  {partner.foundedYear}
                </span>
              </div>
            </div>
            <p className="text-brand-secondary mt-4">{partner.description}</p>

            <div className="flex items-center flex-wrap gap-1 mt-4">
              {partner.perks.map((perk) => (
                <Perk key={perk}>perk</Perk>
              ))}
            </div>
            <Link
              to={`/partners/${partner.slug}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-accent mt-4"
            >
              Детальніше
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
