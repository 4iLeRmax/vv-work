import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import TrustedBy from "../../components/trusted-by/trusted-by";
import Category from "../../components/category/category";
import PopularDirections from "../../components/popular-directions/popular-directions";

export default function HomePage() {
  return (
    <>
      <div>
        <Hero />
        <PopularDirections />
        <TrustedBy />
        <Category />
      </div>
    </>
  );
}
