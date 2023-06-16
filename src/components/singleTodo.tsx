import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <div>
            <form className="todos-single">
                <span className="todos-single-text">{todo.todo}</span>
                <div>
                    <span className="icon">
                        <AiFillEdit className="edit-icon" />
                    </span>
                    <span className="icon">
                        <AiFillDelete className="delete-icon" />
                    </span>
                    <span className="icon">
                        <MdDoneOutline />
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SingleTodo;
