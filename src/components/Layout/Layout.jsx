import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { GlobalStyle } from 'components/GlobalStyle';

export const Layout = () => {
  return (
    <div>
      <GlobalStyle />
      <Sidebar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
