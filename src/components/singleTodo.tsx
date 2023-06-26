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

    const handleDelete = (id: number) => {
        //This uses the setTodos to update state of todos - by using filter to only return as an argument to setTodos those todos whose id does not
        //match the one whose delete button was clicked, we effectively delete the todo because it is no longer in state
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <form className="todos-single">
                {/*This will conditionally render the todo - if isComplete is
                true it renders it as strikethru, if false renders as usual span*/}
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
                        <AiFillDelete
                            className="delete-icon"
                            onClick={() => handleDelete(todo.id)}
                        />
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
