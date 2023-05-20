import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from 'components/Sidebar/Sidebar';
import { GlobalStyle } from 'components/GlobalStyle';
import { ButtonScrollUp } from 'components/Button/Button';

export const Layout = () => {
  const [isButtonUp, setIsButtonUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsButtonUp(true);
        return;
      }
      setIsButtonUp(false);
    });
  }, []);

  const handleOnScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Suspense>
        <Outlet />
      </Suspense>
      <ButtonScrollUp isButtonUp={isButtonUp} onClickUp={handleOnScrollUp}>
        ^
      </ButtonScrollUp>
    </>
  );
};
