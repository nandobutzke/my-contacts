import PageHeader from '../../components/PageHeader';

import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const response = await ContactsService.createContact({
        ...formData,
        category_id: formData.categoryId,
      });

      console.log(response);
    } catch {
      alert('Esse e-mail já está sendo usado');
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
