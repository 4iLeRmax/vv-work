import { CircleX, RotateCw } from "lucide-react";

interface RetryBlockProps {
  onRetry: () => void;
  isLoading?: boolean;
  title?: string;
  message?: string;
}

export default function RetryBlock({
  onRetry,
  isLoading = false,
  title = "Щось пішло не так",
  message = "Не вдалося завантажити дані. Спробуйте ще раз пізніше.",
}: RetryBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center rounded-xl border border-bor-primary bg-primary my-6">
      <div className="max-w-md">
        <h3 className="text-xl font-bold text-red-500 flex items-center justify-center gap-2">
          <CircleX size={40} />
          <span>{title}</span>
        </h3>
        <p className="text-brand-secondary text-sm mt-2">{message}</p>

        <button
          onClick={onRetry}
          disabled={isLoading}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
        >
          <RotateCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          {isLoading ? "Завантаження..." : "Спробувати знову"}
        </button>
      </div>
    </div>
  );
}
