import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteTodo, fetchTodos, updateTodo } from '../../store/todos/todosActions';
import "./Todos.scss"
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
          todos.map(({title, status, date, id}) => (
            <div key={id}>
              <p style={status ? { textDecoration: "line-through" } : {}}>{title}</p>
              <div className='todos__list_buttons'>
                <button onClick={() => dispatch(updateTodo({title, status: !status, date, id}))}>{status ? "Undone" : "Done"}</button>
                <button className='delete-btn' onClick={() => dispatch(deleteTodo(id))}>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TodosList;