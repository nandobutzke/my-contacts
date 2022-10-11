import { AiOutlineCloseCircle, AiOutlineContacts } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import ReactPortal from '../ReactPortal';
import { Container, Overlay } from './styles';

export default function SideBar({ onShowSideBar }) {
  useEffect(() => {
    const teste = 0;

    console.log(teste);

    document.addEventListener('onclick', onShowSideBar);

    return () => {
      document.removeEventListener('onclick', onShowSideBar);
    };
  }, [onShowSideBar]);

  return (
    <ReactPortal containerId="sidebar-root">
      <Overlay>
        <Container>
          <header>
            <AiOutlineCloseCircle size={32} onClick={() => onShowSideBar()} />
          </header>
          <div>
            <Link to="/">
              <AiOutlineContacts size={24} />
              <span>Contatos</span>
            </Link>
            <Link to="/categories">
              <BiCategoryAlt size={24} />
              <span>Categorias</span>
            </Link>
          </div>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

SideBar.propTypes = {
  onShowSideBar: PropTypes.func.isRequired,
};
