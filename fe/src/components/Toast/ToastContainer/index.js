import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';
import useToastContainer from './useToastContainer';

export function ToastContainer() {
  const {
    handleRemoveMessage,
    renderList,
  } = useToastContainer();

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveMessage}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
}
