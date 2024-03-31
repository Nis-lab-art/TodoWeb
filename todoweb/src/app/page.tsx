import { getAllTodos } from "../../api";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="h-screen max-w-4xl mx-auto pt-5">
    <div className="text-center my-5 flex flex-col gap-4">
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
    </main>
  );
}
