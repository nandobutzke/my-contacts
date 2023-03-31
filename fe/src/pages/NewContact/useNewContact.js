import { useRef } from 'react';

import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef();

  async function handleSubmit(formData) {
    try {
      await ContactsService.createContact(formData);

      contactFormRef.current.resetValues();

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

  return {
    contactFormRef,
    handleSubmit,
  };
}
