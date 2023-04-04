import PropTypes from 'prop-types';
import Button from '../Button';

import sad from '../../assets/images/sad.svg';
import { Container } from './styles';

export default function StatusError({ onTryAgain, children }) {
  return (
    <Container>
      <img src={sad} alt="Error Sad Face" />
      <div>
        <span>{children}</span>
        <Button onClick={onTryAgain}>Tentar novamente</Button>
      </div>
    </Container>
  );
}

StatusError.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
