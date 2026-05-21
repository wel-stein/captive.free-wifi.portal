import { Outlet, useLocation } from 'react-router-dom';
import TopAppBar from './TopAppBar.jsx';
import BottomNavBar from './BottomNavBar.jsx';

export default function AppLayout() {
  const { pathname } = useLocation();
  // Voucher detail screen has its own top bar (back button).
  const hideTopBar = /^\/vouchers\/[^/]+$/.test(pathname);

  return (
    <div className="min-h-[100dvh] bg-background text-on-surface flex flex-col">
      {!hideTopBar && <TopAppBar />}
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <BottomNavBar />
    </div>
  );
}
