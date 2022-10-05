import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      await ContactsService.createContact({
        ...formData,
        category_id: formData.categoryId,
      });

      toast({
        type: 'success',
        text: 'O contato foi cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao criar o contato!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
