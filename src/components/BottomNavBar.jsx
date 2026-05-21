import { NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';

const items = [
  { to: '/', label: 'Connect', icon: 'wifi', matches: ['/', '/connected'] },
  { to: '/magazine', label: 'Articles', icon: 'auto_stories', matches: ['/magazine'] },
  { to: '/gallery', label: 'Gallery', icon: 'collections', matches: ['/gallery'] },
  { to: '/vouchers', label: 'Vouchers', icon: 'local_activity', matches: ['/vouchers'] },
];

export default function BottomNavBar() {
  const { pathname } = useLocation();

  const isActive = (matches) =>
    matches.some((m) => (m === '/' ? pathname === '/' || pathname === '/connected' : pathname.startsWith(m)));

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 bg-surface border-t border-outline-variant flex justify-around items-center px-container-margin-mobile py-2 rounded-t-xl shadow-sm pb-[max(env(safe-area-inset-bottom),0.5rem)]">
      {items.map((item) => {
        const active = isActive(item.matches);
        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={
              active
                ? 'flex flex-col items-center justify-center bg-primary-fixed text-primary rounded-full px-4 py-1 scale-95 duration-200 transition-all min-w-[72px]'
                : 'flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary transition-colors min-w-[72px]'
            }
          >
            <Icon name={item.icon} filled={active} />
            <span className={`font-label-sm text-label-sm mt-0.5 ${active ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}
