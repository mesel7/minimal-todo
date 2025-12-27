import Header from "@/components/Header";
import TodoEditor from "@/components/TodoEditor";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}
