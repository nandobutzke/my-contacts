import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';
import useToastContainer from './useToastContainer';

export function ToastContainer() {
  const {
    messages,
    handleRemoveToast,
  } = useToastContainer();

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveToast}
        />
      ))}

    </Container>
  );
}
