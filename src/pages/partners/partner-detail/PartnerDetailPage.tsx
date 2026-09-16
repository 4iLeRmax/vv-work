import { useParams } from "react-router-dom";
import PartnersDetailHero from "../../../components/partner-detail-page/partners-detail-hero/partners-detail-hero";
import useQueryPartnerBySlug from "../../../hooks/useQueryPartnerBySlug";
import PartnerVacancies from "../../../components/partner-detail-page/partner-vacancies/partner-vacancies";
import EmployerCTA from "../../../components/common/employer-cta/employer-cta";
import RetryBlock from "../../../UI/retry-block";
import { PartnerDetailPageSkeleton } from "../../../UI/skeletons";

export default function PartnerDetailPage() {
  const { slug } = useParams();

  const {
    data: partner,
    isLoading,
    error,
    retry,
  } = useQueryPartnerBySlug({ slug });

  if (isLoading) return <PartnerDetailPageSkeleton />;

  if (error) return <RetryBlock onRetry={retry} />;

  return (
    <>
      <div>
        <PartnersDetailHero partner={partner} />
        <PartnerVacancies partner={partner} />
        <EmployerCTA />
      </div>
    </>
  );
}
