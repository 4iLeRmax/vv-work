import React from "react";
import Cookies from "../../../UI/cookies";
import type { Partner } from "../../../types";
import { CalendarDays, MapPin, Users } from "lucide-react";
import IndustryTag from "../../../UI/industry-tag";
import VerifiedBadge from "../../../UI/verified-badge";
import Container from "../../../UI/container";
import InfoCard from "../../../UI/info-card";

export default function PartnersDetailHero({ partner }: { partner: Partner }) {
  const COOKIES_LINKS = [
    {
      title: "Головна",
      link: "/",
    },
    {
      title: "Партнери",
      link: "/partners",
    },
    {
      title: partner.name,
      link: "*",
    },
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
    <>
      <section className="py-14">
        <Container>
          <div className="flex items-start justify-between gap-20">
            <div className="flex flex-col items-start">
              <Cookies links={COOKIES_LINKS} />
              <div className="flex items-center gap-2 mt-7">
                <IndustryTag industry={partner.industry} />
                {partner.verified ? <VerifiedBadge /> : null}
              </div>
              <h1 className="text-4xl font-bold mt-3 text-brand-primary">
                {partner.name}
              </h1>
              <p className="text-brand-secondary mt-7">{partner.description}</p>
              <div className="flex items-center gap-8 mt-7">
                {stats.map((el, i) => (
                  <InfoCard key={i} data={el} />
                ))}
              </div>
            </div>
            <div className="w-120 h-80 overflow-hidden rounded-xl">
              <img
                src={partner.imgURL}
                alt={partner.slug}
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
