import { FC, useState, FormEvent } from "react";
import { createTodo } from "../../store/todos/todosActions";
import { AppDispatch } from "../../store/store";

const AddTodo: FC<{dispatch: AppDispatch}> = ({ dispatch }): JSX.Element => {
    const [todo, setTodo] = useState({
        title: "",
        status: false,
        date: 0,
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if(!todo.title.trim()){
            return;
        }
        dispatch(createTodo(todo));
        setTodo({
          title: "",
          status: false,
          date: 0,
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
