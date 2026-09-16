import { Check } from "lucide-react";

export default function VerifiedBadge() {
  return (
    <>
      <div className="flex items-center gap-1 text-green-700 bg-green-100 rounded-lg px-2 py-1">
        <Check size={12} />
        <span className="text-xs font-bold">Перевірено</span>
      </div>
    </>
  );
}
