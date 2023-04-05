/* eslint-disable react/jsx-one-expression-per-line */
import {
  Container,
} from './styles';

import Loader from '../../components/Loader';

import Modal from '../../components/Modal';
import InputSearch from '../../components/InputSearch';
import CreateRecordHeader from '../../components/CreateRecordHeader';
import useHome from './useHome';
import StatusError from '../../components/StatusError';
import EmptyList from '../../components/EmptyList';
import SearchNotFound from '../../components/SearchNotFound';
import ContactsList from './ContactsList';

export default function Home() {
  const {
    isLoading,
    isDeleteModalVisible,
    contactBeingDeleted,
    isLoadingDelete,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    handleOpenDeleteModal,
    contacts,
    searchTerm,
    handleChangeSearch,
    hasError,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleOrderBy,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!hasContacts && !isLoading);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearch}
        />
      )}

      <CreateRecordHeader
        hasError={hasError}
        qtyOfRecords={contacts.length}
        qtyOfFilteredRecords={filteredContacts.length}
        recordLink="/contacts"
        recordType="contato"
      />

      {hasError && (
        <StatusError onTryAgain={handleTryAgain}>
          Ocorreu um erro ao obter os seus contatos!
        </StatusError>
      )}

      {isListEmpty && (
        <EmptyList>
          <p>
            Você ainda não tem nenhum contato cadastrado!
            Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar
            o seu primeiro!
          </p>
        </EmptyList>
      )}

      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            orderBy={orderBy}
            filteredContacts={filteredContacts}
            onOrderBy={handleOrderBy}
            onOpenDeleteModal={handleOpenDeleteModal}
          />

          <Modal
            danger
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja remover o contato ”${contactBeingDeleted?.name}”?`}
            isLoading={isLoadingDelete}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            Essa ação não poderá ser desfeita!
          </Modal>
        </>
      )}
    </Container>
  );
}
