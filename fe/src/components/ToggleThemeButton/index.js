/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function ToggleThemeButton({ onToggleTheme }) {
  return (
    <Container>
      <input type="checkbox" className="checkbox" id="checkbox" onClick={onToggleTheme} />
      <label htmlFor="checkbox">
        <div className="toggle-ball" />
      </label>
    </Container>
  );
}

ToggleThemeButton.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
};
