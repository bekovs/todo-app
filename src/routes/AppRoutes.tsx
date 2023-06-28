import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import MainLayout from '../pages/MainLayout';
import Archive from '../pages/Archive';

const AppRoutes = () => {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;