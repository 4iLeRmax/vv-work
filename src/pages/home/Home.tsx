import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import TrustedBy from "../../components/trusted-by/trusted-by";
import Category from "../../components/category/category";
import PopularDirections from "../../components/popular-directions/popular-directions";
import RecommendedJobs from "../../components/recommended-jobs/recomended-jobs";
import EmployerCTA from "../../components/employer-cta/employer-cta";
import HowItWorks from "../../components/how-it-works/how-it-works";
import Statistics from "../../components/statistics/statistics";
import Testimonial from "../../components/testimonial/testimonial";

export default function HomePage() {
  return (
    <>
      <div>
        <Hero />
        <PopularDirections />
        <TrustedBy />
        <Category />
        <RecommendedJobs />
        <EmployerCTA />
        <HowItWorks />
        <Statistics />
        <Testimonial />
      </div>
    </>
  );
}
