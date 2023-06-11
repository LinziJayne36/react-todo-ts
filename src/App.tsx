import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField";
import { Todo } from "./model";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    console.log(todo);

    //todos state has been given a type that is an array of an interface - because the type Todo[] refers to an array of the interface we created...
    // in model.ts which defined the properties and types our Todo objects should have (their shape)...
    // we made the Todos interface a model because we are going to be reusing it in many places
    const [todos, setTodos] = useState<Todo[]>([]);
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todos) {
            setTodos([
                ...todos,
                { id: Date.now(), todo: todo, isComplete: false },
            ]);
            setTodo("");
        }
    };
    console.log(todos);
    return (
        <div className="App">
            <span className="heading">TaskMaster</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </div>
    );
};

export default App;
