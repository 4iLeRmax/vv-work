import React from "react";
import InfoCard from "../../UI/info-card";
import { Clock, Mail, Phone } from "lucide-react";
import OfficeInfoCard from "./office-info-card";

const contactsInfo: {
  info: string;
  value: string | number;
  icon: React.ReactNode;
}[] = [
  {
    icon: <Phone size={20} />,
    value: "Гаряча лінія",
    info: "+380 99 999 9999",
  },
  {
    icon: <Mail size={20} />,
    value: "Електронна пошта",
    info: "support@vvwork.eu",
  },
  {
    icon: <Clock size={20} />,
    value: "Графік роботи",
    info: "Пн–Пт: 09:00 - 18:00 (за київським часом)",
  },
];

export type TOfficeInfo = {
  location: {
    country: string;
    city: string;
    address: string;
    place: "Офіс";
  };
  phone: string;
  email: string;
};

const officeInfo: TOfficeInfo[] = [
  {
    location: {
      country: "Україна",
      city: "Київ",
      place: "Офіс",
      address: "вул. Хрещатик, 15, офіс 402",
    },
    email: "kyiv@vvwork.eu",
    phone: "+380 44 123 4567",
  },
  {
    location: {
      country: "Польща",
      city: "Варшава",
      place: "Офіс",
      address: "Al. Jerozolimskie 85, 02-001",
    },
    email: "warsaw@vvwork.eu",
    phone: "+48 22 987 6543",
  },
];

export default function ContactsInfo() {
  return (
    <>
      <div className="w-full">
        <h2 className="text-brand-secondary">Загальні контакти</h2>
        <div className="flex flex-col items-start gap-4 mt-6">
          {contactsInfo.map((el) => (
            <InfoCard key={el.info} data={el} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-10">
          {officeInfo.map((el) => (
            <OfficeInfoCard officeInfo={el} />
          ))}
        </div>
      </div>
    </>
  );
}
