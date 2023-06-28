import { useState } from "react";
import { createTodo } from "../../store/todos/todosActions";

const AddTodo = ({ dispatch }: any) => {
    const [todo, setTodo] = useState({
        title: "",
        status: false,
    });

    const handleSubmit = (event: any): void => {
        event.preventDefault();
        if(!todo.title.trim()){
          return
        }
        dispatch(createTodo(todo));
        setTodo({
          title: "",
          status: false,
        })
    };

    return (
        <form className="add-todo" onSubmit={handleSubmit}>
            <input
                type="text"
                className="add-todo__inp"
                placeholder="new todo..."
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <input type="submit" className="add-todo__btn" value="Add" />
        </form>
    );
};

export default AddTodo;
