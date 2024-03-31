'use client';

import { IoIosAddCircle } from "react-icons/io";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const AddTask = () => {
    const router = useRouter();
    const[modalOpen, setModalOpen] = useState<boolean>(false);
    const[newTask, setNewTask] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addTodo({
            id: uuidv4(),
            task: newTask,
            done: false,
        })
        setNewTask("");
        setModalOpen(false);
        router.refresh();
    }
    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn w-full font-bold">Add Task
            <IoIosAddCircle size={16} className="ml-1"/>
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmit}>
                    <h3 className="font-bold text-lg">Add Todo</h3>
                    <div className="modal-action">
                        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
            </Modal>
        </div> 
    );
}
 
export default AddTask;