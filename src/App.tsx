import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchTodos } from './store/todos/todosActions';
import AppRoutes from './routes/AppRoutes';

const App = () => {

  const { todos } = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  console.log(todos)

  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;