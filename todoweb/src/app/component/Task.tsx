'use client';

import { ITask } from "../../../types/tasks";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { editTodo, deleteTodo, editDoneTodo } from "../../../api";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const[editModalOpen, setEditModalOpen] = useState(false);
    const[deleteModalOpen, setDeleteModalOpen] = useState(false);
    const[editedValue, setEditedValue] = useState(task.task);
    const[done, setDone] = useState(task.done);
    const router = useRouter();

    const handleEdit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            task: editedValue,
            done: done,
        })
        setEditModalOpen(false);
        router.refresh();
    }

    const handleDelete = async (id: string) => {
        await deleteTodo(id);
        setDeleteModalOpen(false);
        router.refresh();
    }

    const handleDone = async (value: boolean) => {
    setDone(value);
    editDoneTodo({
        id: task.id,
        task: editedValue,
        done: value,
    })
    router.refresh();
    }

    return (
        <tr key={task.id}>
            <td className={`w-full text-base capitalize font-medium ${task.done ? "line-through" : ""}`}>{task.task}</td>
            <td className="flex gap-5">
                <FaEdit onClick={() => setEditModalOpen(true)} cursor="pointer" size={20}/>
                    <Modal modalOpen={editModalOpen} setModalOpen={setEditModalOpen}>
                        <form onSubmit={handleEdit}>
                            <h3 className="font-bold text-lg">Edit Todo</h3>
                            <div className="modal-action">
                                <input value={editedValue} onChange={(e) => setEditedValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                <button type="submit" className="btn">Submit</button>
                            </div>
                        </form>
                    </Modal>
                <MdDelete onClick={() => setDeleteModalOpen(true)} cursor="pointer" size={20} />
                    <Modal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen}>
                        <h3 className="text-lg">Are you sure you want to delete?</h3>
                        <div className="modal-action">
                            <button onClick={() => handleDelete(task.id)} className="btn">
                                YES
                            </button>
                        </div>
                    </Modal>
                {
                    done ? <MdCheckBox onClick={() => handleDone(false)} cursor="pointer" size={22} />
                    :
                    <MdCheckBoxOutlineBlank onClick={() => handleDone(true)} cursor="pointer" size={22}/>
                }
            </td>
        </tr>
    );
}
 
export default Task;