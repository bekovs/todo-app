import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;