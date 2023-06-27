import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchTodos } from './store/todos/todosActions';

const App = () => {

  const { todos } = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  console.log(todos)

  return (
    <div>
      <h2>Hello there!</h2>
    </div>
  );
};

export default App;