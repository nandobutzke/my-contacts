/* eslint-disable no-nested-ternary */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import InputSearch from '../../components/InputSearch';
import ListContainer from '../../components/ListContainer';
import CreateRecordHeader from '../../components/CreateRecordHeader';
import { Card } from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import CategoriesService from '../../services/CategoriesService';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('asc');

  const filteredCategories = useMemo(() => categories.filter((category) => (
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [categories, searchTerm]);

  const loadContacts = useCallback(async () => {
    try {
      const categoryData = await CategoriesService.listCategories(orderBy);

      setCategories(categoryData);
    } catch (error) {
      console.log(error);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <>
      <InputSearch
        searchTerm={searchTerm}
        handleChangeSearch={handleChangeSearch}
      />

      <CreateRecordHeader
        justifyContent={(
          false
            ? 'flex-end'
            : (categories.length > 0
              ? 'space-between'
              : 'center')
        )}
      >
        <strong>
          {filteredCategories.length}
          {filteredCategories.length > 1 || filteredCategories.length === 0 ? ' categorias' : ' categoria'}
        </strong>
        <Link to="/categories/new">Criar categoria</Link>
      </CreateRecordHeader>

      <ListContainer orderBy={orderBy}>
        <header>
          <button type="button" onClick={handleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {filteredCategories.map((category) => (
          <Card key={category.id}>
            <div className="info">
              <strong>{category.name}</strong>
              <span>
                {category.contacts_count}
                {category.contacts_count > 1 || category.contacts_count === 0 ? ' contatos' : ' contato'}
              </span>
            </div>
            <div className="actions">
              <Link to={`/categories/edit/${category.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Trash" />
              </button>
            </div>
          </Card>
        ))}
      </ListContainer>
    </>
  );
}
