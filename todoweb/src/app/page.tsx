import { getAllTodos } from "../../api";
import AddTask from "./component/AddTask";
import CurrentTime from "./component/CurrentTime";
import TaskList from "./component/TaskList";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="h-screen max-w-4xl mx-auto pt-5">
      <div className="text-center my-5 flex flex-col gap-4">
        <AddTask />
        <TaskList tasks={tasks} />
      </div>
      <div className="flex justify-end absolute bottom-0 right-0 p-5">
        <CurrentTime />
      </div>
    </main>
  );
}
