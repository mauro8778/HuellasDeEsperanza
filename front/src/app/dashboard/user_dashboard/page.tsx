import DashboardLayout from '../layout';
import React from 'react';

const UserDashboard = () => {
  return (
    <>
    </>
  );
};

UserDashboard.getLayout = (page: React.ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default UserDashboard;
