/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import InputSearch from '../../components/InputSearch';

import CreateRecordHeader from '../../components/CreateRecordHeader';

import CategoriesService from '../../services/CategoriesService';
import Modal from '../../components/Modal';
import toast from '../../utils/toast';
import Loader from '../../components/Loader';
import StatusError from '../../components/StatusError';
import EmptyList from '../../components/EmptyList';
import SearchNotFound from '../../components/SearchNotFound';
import CategoriesList from './CategoriesList';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('asc');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [categoryBeingDeteleted, setCategoryBeingDeleted] = useState({});
  const [isLoadingDeleteAction, setIsLoadingDeleteAction] = useState(true);

  const filteredCategories = useMemo(() => categories.filter((category) => (
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [categories, searchTerm]);

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);

      const categoryData = await CategoriesService.listCategories(orderBy);

      setCategories(categoryData);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  function handleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  function handleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleTryAgain() {
    loadCategories();
  }

  async function handleOpenDeleteCategoryModal(id) {
    setIsModalVisible(true);

    const categoryData = await CategoriesService.getCategoryById(id);

    setIsLoadingDeleteAction(false);
    setCategoryBeingDeleted(categoryData);
  }

  function handleCloseDeleteCategoryModal() {
    setIsModalVisible(false);
    setCategoryBeingDeleted(null);
  }

  async function handleDeleteCategory() {
    try {
      setIsLoadingDeleteAction(true);

      await CategoriesService.deleteCategory(categoryBeingDeteleted.id);

      handleCloseDeleteCategoryModal();

      toast({
        type: 'success',
        text: 'A categoria foi deletada com sucesso!',
      });

      setCategories((prevState) => prevState.filter((category) => (
        category.id !== categoryBeingDeteleted.id
      )));
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao tentar excluir a categoria!',
      });
    } finally {
      setIsLoadingDeleteAction(false);
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      {categories.length > 0 && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearch}
        />
      )}

      <CreateRecordHeader
        hasError={hasError}
        qtyOfRecords={categories.length}
        qtyOfFilteredRecords={filteredCategories.length}
        recordLink="/categories"
        recordType="categoria"
      />

      {hasError && (
        <StatusError onTryAgain={handleTryAgain}>
          Ocorreu um erro ao obter as suas categorias!
        </StatusError>
      )}

      {!hasError && (
        <>
          {(categories.length < 1 && !isLoading) && (
            <EmptyList>
              <p>
                Você ainda não tem nenhuma categoria cadastrada!
                Clique no botão <strong>”Criar categoria”</strong> à cima para cadastrar
                a primeira!
              </p>
            </EmptyList>
          )}

          {(categories.length > 0 && filteredCategories.length < 1) && (
            <SearchNotFound searchTerm={searchTerm} />
          )}

          {/* <ListContainer orderBy={orderBy}>
            {filteredCategories.length > 0 && (
              <header>
                <button type="button" onClick={handleOrderBy}>
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
                  <button type="button" onClick={() => handleOpenDeleteCategoryModal(category.id)}>
                    <img src={trash} alt="Trash" />
                  </button>
                </div>
              </Card>
            ))}
          </ListContainer> */}

          <CategoriesList
            orderBy={orderBy}
            filteredCategories={filteredCategories}
            onOrderBy={handleOrderBy}
            onOpenDeleteCategoryModal={handleOpenDeleteCategoryModal}
          />

          <Modal
            danger
            visible={isModalVisible}
            isLoading={isLoadingDeleteAction}
            title="Tem certeza que deseja remover a categoria ”Teste”?"
            onCancel={handleCloseDeleteCategoryModal}
            onConfirm={handleDeleteCategory}
          >
            Esta ação não poderá ser desfeita!
          </Modal>
        </>
      )}
    </>
  );
}
