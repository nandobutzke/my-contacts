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

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
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

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyList>
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar
                o seu primeiro!
              </p>
            </EmptyList>
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFound searchTerm={searchTerm} />
          )}

          {/* <ListContainer orderBy={orderBy}>
            {filteredContacts.length > 0 && (
            <header>
              <button type="button" onClick={handleOrderBy}>
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
                  <button type="button" onClick={() => handleOpenDeleteModal(contact)}>
                    <img src={trash} alt="Trash" />
                  </button>
                </div>
              </Card>
            ))}

          </ListContainer> */}

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
