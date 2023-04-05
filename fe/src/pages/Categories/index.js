/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import InputSearch from '../../components/InputSearch';

import CreateRecordHeader from '../../components/CreateRecordHeader';

import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import StatusError from '../../components/StatusError';
import EmptyList from '../../components/EmptyList';
import SearchNotFound from '../../components/SearchNotFound';
import CategoriesList from './CategoriesList';
import useCategories from './useCategories';

export default function Categories() {
  const {
    categories,
    searchTerm,
    orderBy,
    handleCloseDeleteCategoryModal,
    isLoading,
    hasError,
    isModalVisible,
    isLoadingDeleteAction,
    filteredCategories,
    handleChangeSearch,
    handleOrderBy,
    handleTryAgain,
    handleOpenDeleteCategoryModal,
    handleDeleteCategory,
  } = useCategories();

  const hasCategories = categories.length > 0;
  const isListEmpty = !hasError && (!hasCategories && !isLoading);
  const isSearchEmpty = !hasError && (hasCategories && filteredCategories.length < 1);

  return (
    <>
      <Loader isLoading={isLoading} />

      {hasCategories && (
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

      {isListEmpty && (
        <EmptyList>
          <p>
            Você ainda não tem nenhuma categoria cadastrada!
            Clique no botão <strong>”Criar categoria”</strong> à cima para cadastrar
            a primeira!
          </p>
        </EmptyList>
      )}

      {isSearchEmpty && (
        <SearchNotFound searchTerm={searchTerm} />
      )}

      {hasCategories && (
        <>
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
