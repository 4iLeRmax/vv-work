import React from "react";
import Container from "../../../UI/container";

const TRUSTED_LOGOS = ["Bosch", "Lidl", "DHL", "Skanska", "Wolt"];

export default function TrustedBy() {
  return (
    <section className="py-8 min-[768px]:py-10">
      <Container>
        <h2 className="text-center text-brand-secondary text-sm min-[768px]:text-base">
          Нам довіряють провідні роботодавці Європи
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-6 min-[768px]:justify-between min-[768px]:gap-x-6">
          {TRUSTED_LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-brand-secondary text-xl font-bold min-[768px]:text-2xl min-[1440px]:text-3xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
