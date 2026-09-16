import Cookies from "../../../UI/cookies";
import type { Partner } from "../../../types";
import { CalendarDays, MapPin, Users } from "lucide-react";
import IndustryTag from "../../../UI/industry-tag";
import VerifiedBadge from "../../../UI/verified-badge";
import Container from "../../../UI/container";
import InfoCard from "../../../UI/info-card";

export default function PartnersDetailHero({ partner }: { partner: Partner }) {
  const COOKIES_LINKS = [
    { title: "Головна", link: "/" },
    { title: "Партнери", link: "/partners" },
    { title: partner.name, link: "*" },
  ];

  const stats = [
    {
      icon: <Users size={20} />,
      info: "працівників",
      value: partner.employeesCount,
    },
    {
      icon: <CalendarDays size={20} />,
      info: "рік заснування",
      value: partner.foundedYear,
    },
    {
      icon: <MapPin size={20} />,
      info: partner.location.city,
      value: partner.location.country,
    },
  ];

  return (
    <section className="py-10 min-[768px]:py-14">
      <Container>
        <div className="flex flex-col items-start gap-8 min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:justify-between min-[1440px]:gap-20">
          <div className="w-full overflow-hidden rounded-xl min-[1440px]:hidden">
            <img
              src={partner.imgURL}
              alt={partner.slug}
              className="w-full h-56 min-[768px]:h-80 object-cover"
            />
          </div>

          <div className="flex flex-col items-start w-full min-[1440px]:w-auto">
            <Cookies links={COOKIES_LINKS} />
            <div className="flex items-center flex-wrap gap-2 mt-6 min-[768px]:mt-7">
              <IndustryTag industry={partner.industry} />
              {partner.verified ? <VerifiedBadge /> : null}
            </div>
            <h1 className="text-2xl font-bold mt-3 text-brand-primary min-[768px]:text-3xl min-[1440px]:text-4xl">
              {partner.name}
            </h1>
            <p className="text-brand-secondary mt-4 min-[768px]:mt-7">
              {partner.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-6 min-[768px]:gap-8 min-[768px]:mt-7">
              {stats.map((el, i) => (
                <InfoCard key={i} data={el} />
              ))}
            </div>
          </div>

          <div className="hidden w-120 h-80 shrink-0 overflow-hidden rounded-xl min-[1440px]:block">
            <img
              src={partner.imgURL}
              alt={partner.slug}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
