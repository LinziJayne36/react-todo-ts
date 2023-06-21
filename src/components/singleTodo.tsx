import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import TodoList from "./todoList";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isComplete: !todo.isComplete }
                    : todo
            )
        );
    };
    return (
        <div>
            <form className="todos-single">
                //This will conditionally render the todo - if isComplete is
                true it renders it as strikethru, if false renders as usual span
                {todo.isComplete ? (
                    <s className="todos-single-text">{todo.todo}</s>
                ) : (
                    <span className="todos-single-text">{todo.todo}</span>
                )}
                <div>
                    <span className="icon">
                        <AiFillEdit className="edit-icon" />
                    </span>
                    <span className="icon">
                        <AiFillDelete className="delete-icon" />
                    </span>
                    <span className="icon" onClick={() => handleDone(todo.id)}>
                        <MdDoneOutline />
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SingleTodo;
