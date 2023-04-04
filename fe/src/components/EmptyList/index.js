/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';

import { Container } from './styles';

import emptyBox from '../../assets/images/empty-box.svg';

export default function EmptyList({ children }) {
  return (
    <Container>
      <img src={emptyBox} alt="Empty Box" />
      {children}
    </Container>
  );
}

EmptyList.propTypes = {
  children: PropTypes.node.isRequired,
};
