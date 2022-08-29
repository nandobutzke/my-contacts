import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/mycontacts-logo.svg';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts-Logo" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
    </Container>
  );
}
