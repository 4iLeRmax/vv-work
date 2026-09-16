import Container from "../../../UI/container";
import type { Partner } from "../../../types";
import Sidebar from "../sidebar/sidebar";
import useQueryJobsByPartnerSlug from "../../../hooks/useQueryJobsByPartnerSlug";
import PartnerJobsList from "./partner-jobs-list";
import RetryBlock from "../../../UI/retry-block";
import { PartnerVacanciesSkeleton } from "../../../UI/skeletons";

export default function PartnerVacancies({ partner }: { partner: Partner }) {
  const {
    data: jobs,
    isLoading,
    error,
    retry,
  } = useQueryJobsByPartnerSlug(partner.slug);

  if (isLoading) return <PartnerVacanciesSkeleton />;
  if (error) return <RetryBlock onRetry={retry} />;

  return (
    <section className="bg-primary py-10 min-[768px]:py-12">
      <Container>
        <div className="flex flex-col items-start gap-8 min-[1440px]:flex-row min-[1440px]:gap-10">
          <Sidebar
            about={partner.about}
            perks={partner.perks}
            website={partner.website}
          />
          <PartnerJobsList jobs={jobs} />
        </div>
      </Container>
    </section>
  );
}
