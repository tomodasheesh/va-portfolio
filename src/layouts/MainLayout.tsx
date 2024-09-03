import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export default function MainLayout() {
  return (
    <div className='header'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}