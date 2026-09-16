import useQueryAllJobs from "../../../hooks/useQueryAllJobs";
import { RecommendedJobsSkeleton } from "../../../UI/skeletons";
import RetryBlock from "../../../UI/retry-block";
import RecommendedJobCard from "./recommended-job-card";

export default function RecommendedJobsList({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const { data: jobs, isLoading, error, retry } = useQueryAllJobs();

  if (isLoading) return <RecommendedJobsSkeleton />;

  if (error) return <RetryBlock onRetry={retry} />;

  const filteredJobs =
    selectedCategory === "Усі"
      ? jobs
      : jobs.filter(
          (j) =>
            j.category.toLocaleLowerCase() ===
            selectedCategory.toLocaleLowerCase(),
        );

  return (
    <div className="flex flex-col gap-4 mt-8">
      {filteredJobs.slice(0, 3).map((job) => (
        <RecommendedJobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
