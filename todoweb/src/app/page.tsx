import { getAllTodos } from "../../api";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Your todo list</h1>
        <AddTask />
        <TaskList tasks={tasks} />
      </div>

    </main>
  );
}
