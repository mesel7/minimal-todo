import { Pencil } from "lucide-react";

export default function TodoEditor() {
  return (
    <section className="py-6" aria-label="Todo 작성">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold font-outfit">
        Todo 작성하기
        <Pencil className="h-6 w-6" aria-hidden="true" />
      </h2>

      <form className="flex w-full gap-4">
        <input
          className="
            w-full bg-transparent p-1
            border-b border-gray-300
            transition-colors duration-200
            focus:border-[color:var(--foreground)]
            focus-visible:outline-none
          "
          placeholder="Todo..."
        />

        <button
          type="submit"
          className="shrink-0 border border-transparent
                     bg-[color:var(--foreground)] px-4 py-2 text-[color:var(--background)]
                     transition-colors duration-200
                     hover:border-black hover:bg-white hover:text-black
                     cursor-pointer"
        >
          추가
        </button>
      </form>
    </section>
  );
}
