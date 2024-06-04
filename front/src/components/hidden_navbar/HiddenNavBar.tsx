'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface HiddenNavBarProps {
  children: ReactNode;
}

const HiddenNavBar: React.FC<HiddenNavBarProps> = ({ children }) => {
  const pathname = usePathname();
  const hiddenPaths = [ 
    '/',
    '/login', 
    '/register', 
    '/Dashboard', 
    '/dashboard/admin_dashboard', 
    '/dashboard/user_dashboard',
    '/dashboard/shelter_dashboard',
];
  const isHidden = hiddenPaths.includes(pathname);

  return (
    <div className={isHidden ? 'hidden' : ''}>
      {children}
    </div>
  );
};

export default HiddenNavBar;
