import PartnersHero from "../../components/partners-page/partners-hero/partners-hero";
import PartnersContent from "../../components/partners-page/partners-content/partners-content";
import EmployerCTA from "../../components/common/employer-cta/employer-cta";

export default function PartnersPage() {
  return (
    <>
      <section>
        <PartnersHero />
        <PartnersContent />
        <EmployerCTA />
      </section>
    </>
  );
}
