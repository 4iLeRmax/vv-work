import React from "react";
import Tag from "../../../UI/tag";
import { Quote } from "lucide-react";
import Container from "../../../UI/container";

export default function Testimonial() {
  return (
    <>
      <section className="bg-white py-20 ">
        <Container>
          <div className="flex flex-col items-center">
            <Tag firstColor="accent" secondColor="accent">
              Відгуки наших кандидатів
            </Tag>
            <h1 className="text-4xl font-bold mt-5 text-brand-primary">
              Що кажуть люди
            </h1>

            <div className="mt-10 max-w-3xl rounded-3xl bg-primary p-10 flex flex-col gap-8 items-center border border-bor-primary">
              <Quote className="text-brand-secondary" size={30} />
              <p className="text-lg text-brand-secondary">
                «Завдяки VV Work я знайшов стабільну роботу в Польщі за два
                тижні. Процес був простим і прозорим — від подачі заявки до
                першого робочого дня.»
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-accent/10 text-sm font-semibold text-brand-accent">
                  ОК
                </span>
                <div className="text-left">
                  <div className="text-sm font-semibold text-brand-primary">
                    Олександр Коваленко
                  </div>
                  <div className="text-xs text-brand-secondary">
                    Електрик, Варшава
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
