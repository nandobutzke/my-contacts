import { Container } from './styles';

import logo from '../../assets/images/mycontacts-logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts-Logo" />
    </Container>
  );
}
