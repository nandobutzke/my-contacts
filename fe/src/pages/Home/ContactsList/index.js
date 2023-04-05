import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import formatPhone from '../../../utils/formatPhone';
import { Container, Card } from './styles';

import arrow from '../../../assets/images/icons/arrow.svg';
import edit from '../../../assets/images/icons/edit.svg';
import trash from '../../../assets/images/icons/trash.svg';

export default function ContactsList({
  orderBy,
  filteredContacts,
  onOrderBy,
  onOpenDeleteModal,
}) {
  return (
    <Container orderBy={orderBy}>
      {filteredContacts.length > 0 && (
      <header>
        <button type="button" onClick={onOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </header>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && <small>{contact.category.name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{formatPhone(contact.phone)}</span>
          </div>

          <div className="actions">
            <Link to={`/contacts/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onOpenDeleteModal(contact)}>
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}

ContactsList.propTypes = {
  orderBy: PropTypes.string.isRequired,
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
  onOrderBy: PropTypes.func.isRequired,
  onOpenDeleteModal: PropTypes.func.isRequired,
};
