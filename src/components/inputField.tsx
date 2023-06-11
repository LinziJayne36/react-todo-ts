import React from "react";
import "./styles.css";

//Using an interface to define the state types of the todo/setTodo useState for inputfield...
// which can then be used to define the InputField functional component's return type and allow...
// the useState object for setting todos to be passed into it as props.
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input
                type="input"
                value={todo} //todo here is our state
                onChange={(e) => setTodo(e.target.value)} //sets the state to whatever is entered into this field
                placeholder="Add a task"
                className="input-box"
            />
            <button type="submit" className="input-submit">
                Add
            </button>
        </form>
    );
};

export default InputField;
