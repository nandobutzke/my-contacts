import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import { ButtonContainer, Form } from './styles';
import useErrors from '../../hooks/useErrors';

export default function CategoryForm({ buttonLabel, onSubmit, category }) {
  const [name, setName] = useState(category.name ?? '');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setError, removeError, getMessageByFieldName } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório!' });
    } else {
      removeError('name');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
    });

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getMessageByFieldName('name')}>
        <Input
          error={getMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <ButtonContainer>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

CategoryForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  category: PropTypes.shape(),
};

CategoryForm.defaultProps = {
  category: {},
};