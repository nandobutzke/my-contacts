import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children, error, isLoading }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}

      <div className="form-group">
        {isLoading && <div className="loader" />}
      </div>

    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: '',
  isLoading: false,
};
