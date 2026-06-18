import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MarketingLayout = () => {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
      <Navbar />
      <main className="min-w-0 flex-1 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
