import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTodos } from '../../store/todos/todosActions';
import "./Todos.css"
import AddTodo from './AddTodo';

const TodosList = () => {

  const { todos } = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div className="todos">
      <h2>Todo List</h2>
      <AddTodo dispatch={dispatch} />
      <div className="todos__list">
        {
          todos.map(({title, status}, index) => (
            <div key={index}>
              <p>{title}</p>
              <button>{status ? "Undone" : "Done"}</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TodosList;