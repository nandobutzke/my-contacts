import {
  useCallback,
  useEffect, useImperativeHandle, useState,
} from 'react';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';
import CategoriesService from '../../services/CategoriesService';
import useSafeAsyncState from '../../hooks/useSafeAsyncState';

export default function useContactForm(ref, onSubmit) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useSafeAsyncState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    errors, setError, removeError, getMessageByFieldName,
  } = useErrors();

  const loadCategories = useCallback(async (signal) => {
    try {
      const categoriesList = await CategoriesService.listCategories(signal);

      setCategories(categoriesList);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
    } finally {
      setIsLoadingCategories(false);
    }
  }, [setCategories, setIsLoadingCategories]);

  useEffect(() => {
    const controller = new AbortController();

    loadCategories(controller.signal);

    return () => {
      controller.abort();
      console.log(controller.signal);
      console.log('aborted');
    };
  }, [loadCategories]);

  useImperativeHandle(ref, () => ({
    setFieldValues: (contact) => {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(formatPhone(contact.phone ?? ''));
      setCategoryId(contact.category.id ?? '');
    },
    resetValues: () => {
      setName('');
      setEmail('');
      setPhone('');
      setCategoryId('');
    },
  }), []);

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      email,
      phone: phone.replace(/\D/g, ''),
      categoryId,
    });

    setIsSubmitting(false);
  }

  return {
    handleSubmit,
    getMessageByFieldName,
    name,
    handleNameChange,
    isSubmitting,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
  };
}
