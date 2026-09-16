import React from "react";
import DirectionCard from "./direction-card";
import Container from "../../../UI/container";

const cards = [
  {
    img: "https://images.unsplash.com/photo-1482731215275-a1f151646268?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Будівництво",
  },
  {
    img: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Виробництво",
  },
  {
    img: "https://images.unsplash.com/photo-1592228533283-d78f7c1cf453?q=80&w=779&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Логістика",
  },
  {
    img: "https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "IT",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1670650046023-b1622465105b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Водії",
  },
];

export default function PopularDirections() {
  return (
    <section className="py-8 min-[768px]:py-10 bg-primary">
      <Container>
        <div className="grid grid-cols-2 gap-4 min-[768px]:grid-cols-3 min-[768px]:gap-6 min-[1440px]:grid-cols-5">
          {cards.map((c) => (
            <DirectionCard key={c.title} info={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
