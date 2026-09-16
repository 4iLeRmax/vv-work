import Hero from "../../components/home-page/hero/Hero";
import TrustedBy from "../../components/home-page/trusted-by/trusted-by";
import Category from "../../components/home-page/category/category";
import PopularDirections from "../../components/home-page/popular-directions/popular-directions";
import RecommendedJobs from "../../components/home-page/recommended-jobs/recommended-jobs";
import EmployerCTA from "../../components/common/employer-cta/employer-cta";
import HowItWorks from "../../components/home-page/how-it-works/how-it-works";
import Statistics from "../../components/home-page/statistics/statistics";
import Testimonial from "../../components/home-page/testimonial/testimonial";

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
