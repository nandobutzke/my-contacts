import PropTypes from 'prop-types';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'success' && <img src={checkCircleIcon} alt="Success" />}
      {type === 'danger' && <img src={xCircleIcon} alt="Error" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'error']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
