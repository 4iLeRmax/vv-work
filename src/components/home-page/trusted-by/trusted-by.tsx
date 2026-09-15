import React from "react";
import Container from "../../../UI/container";

const TRUSTED_LOGOS = ["Bosch", "Lidl", "DHL", "Skanska", "Wolt"];

export default function TrustedBy() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-center text-brand-secondary">
          Нам довіряють провідні роботодавці Європи
        </h2>
        <div className="flex items-center justify-between mt-6">
          {TRUSTED_LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-brand-secondary text-3xl font-bold"
            >
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
