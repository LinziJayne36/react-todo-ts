import React from "react";
import { Todo } from "../model";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    return (
        <div>
            <form action="" className="todos-single">
                <span className="todos-single-text">{todo.todo}</span>
            </form>
        </div>
    );
};

export default SingleTodo;
