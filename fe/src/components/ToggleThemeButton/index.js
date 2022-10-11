import { Container } from './styles';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function ToggleThemeButton() {
  return (
    <Container>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox">
        <div className="toggle-ball" />
      </label>
    </Container>
  );
}
