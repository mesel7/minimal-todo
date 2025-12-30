import { Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="py-6">
      <p className="font-semibold">오늘은</p>

      <h1 className="mt-2 flex items-center gap-2 text-3xl font-semibold font-outfit">
        <Calendar className="h-8 w-8" aria-hidden="true" />
        {new Date().toDateString()}
      </h1>
    </header>
  );
}
