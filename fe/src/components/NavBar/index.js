import { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import SideBar from '../SideBar';
import ToggleThemeButton from '../ToggleThemeButton';
import { Container } from './styles';

export default function NavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleShowSideBar = useCallback(() => {
    setOpenSideBar((prevState) => !prevState);
  }, []);

  return (
    <Container>
      <AiOutlineMenu size={32} onClick={handleShowSideBar} />
      <ToggleThemeButton />

      {openSideBar && <SideBar onShowSideBar={handleShowSideBar} />}
    </Container>
  );
}
