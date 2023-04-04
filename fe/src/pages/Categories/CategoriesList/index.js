import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Card, Container } from './styles';

import arrow from '../../../assets/images/icons/arrow.svg';
import edit from '../../../assets/images/icons/edit.svg';
import trash from '../../../assets/images/icons/trash.svg';

export default function CategoriesList({
  orderBy,
  filteredCategories,
  onOrderBy,
  onOpenDeleteCategoryModal,
}) {
  return (
    <Container orderBy={orderBy}>
      {filteredCategories.length > 0 && (
      <header>
        <button type="button" onClick={onOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </header>
      )}

      {filteredCategories.map((category) => (
        <Card key={category.id}>
          <div className="info">
            <strong>{category.name}</strong>
            <span>
              {category.contacts_count}
              {category.contacts_count === 1 ? ' contato' : ' contatos'}
            </span>
          </div>
          <div className="actions">
            <Link to={`/categories/edit/${category.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onOpenDeleteCategoryModal(category.id)}>
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

CategoriesList.propTypes = {
  orderBy: PropTypes.string.isRequired,
  filteredCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    contacts_count: PropTypes.number,
  })).isRequired,
  onOrderBy: PropTypes.func.isRequired,
  onOpenDeleteCategoryModal: PropTypes.func.isRequired,
};
