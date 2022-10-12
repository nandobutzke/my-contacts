import { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import SideBar from '../SideBar';
import ToggleThemeButton from '../ToggleThemeButton';
import { Container } from './styles';

export default function NavBar({ onToggleTheme }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const location = useLocation();

  const handleShowSideBar = useCallback(() => {
    setOpenSideBar((prevState) => !prevState);
  }, []);

  useEffect(() => {
    setOpenSideBar(false);
  }, [location]);

  return (
    <Container>
      <AiOutlineMenu size={32} onClick={handleShowSideBar} />
      <ToggleThemeButton onToggleTheme={onToggleTheme} />

      {openSideBar && <SideBar onShowSideBar={handleShowSideBar} />}
    </Container>
  );
}

NavBar.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};
