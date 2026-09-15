import Container from "../../../UI/container";
import PartnerCard from "./partner-card";
import useQueryPartners from "../../../hooks/useQueryPartners";
import { PartnersListSkeleton } from "../../../UI/skeletons";
import RetryBlock from "../../../UI/retry-block";

export default function PartnersContent() {
  const { data: partners, isLoading, error, retry } = useQueryPartners();

  if (isLoading) return <PartnersListSkeleton />;

  if (error) return <RetryBlock onRetry={retry} />;

  return (
    <>
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-3 gap-6">
            {partners.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
