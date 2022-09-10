import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  useEffect(() => {
    fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`)
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
      })
      .catch((error) => console.log('error', error));
  }, [orderBy]);

  function handleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>

      <InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Pesquise pelo nome..."
          onChange={handleChangeSearch}
        />
      </InputSearchContainer>

      {filteredContacts && (
        <Header>
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
          <Link to="/new">Criar contato</Link>
        </Header>
      )}

      <ListContainer orderBy={orderBy}>
        <header>
          <button type="button" onClick={handleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Trash" />
              </button>
            </div>
          </Card>
        ))}

      </ListContainer>
    </Container>
  );
}
