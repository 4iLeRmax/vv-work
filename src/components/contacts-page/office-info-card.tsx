import { Mail, MapPin, Phone } from "lucide-react";
import IndustryTag from "../../UI/industry-tag";
import type { TOfficeInfo } from "./contacts-info";

export default function OfficeInfoCard({
  officeInfo,
}: {
  officeInfo: TOfficeInfo;
}) {
  return (
    <>
      <div className="p-4 min-[768px]:p-6 bg-primary border border-bor-primary rounded-xl">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-sm min-[768px]:text-base">
            {officeInfo.location.city}, {officeInfo.location.country}
          </h2>
          <IndustryTag industry={officeInfo.location.place} />
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <p className="text-brand-secondary text-sm min-[768px]:text-base flex items-center gap-2">
            <MapPin size={20} className="shrink-0" />
            <span>{officeInfo.location.address}</span>
          </p>
          <p className="text-brand-secondary text-sm min-[768px]:text-base flex items-center gap-2">
            <Phone size={20} className="shrink-0" />
            <span>{officeInfo.phone}</span>
          </p>
          <p className="text-brand-secondary text-sm min-[768px]:text-base flex items-center gap-2">
            <Mail size={20} className="shrink-0" />
            <span>{officeInfo.email}</span>
          </p>
        </div>
      </div>
    </>
  );
}
