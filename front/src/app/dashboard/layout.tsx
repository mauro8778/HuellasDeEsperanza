import DashboardUi from '@/components/Dashboard_ui/Dashboard_ui';
import { FC, ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children, hideNav = false }) => {
  return (
    <div className="flex">
      {!hideNav && <DashboardUi />}
      <main className={hideNav ? 'w-full p-5' : 'flex-grow ml-64 p-5'}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
