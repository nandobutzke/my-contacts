import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import {
  Overlay, Container, Footer,
} from './styles';
import Button from '../Button';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>

        <strong>Tem certeza que deseja remover o contato &quot;Fernando Butzke&quot;?</strong>
        <small>Esta ação não poderá ser desfeita!</small>

        <Footer>
          <button type="button" className="cancel-button">Cancelar</button>
          <Button type="button" danger={danger}>Deletar</Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
