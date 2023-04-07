import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';
import useToastContainer from './useToastContainer';

export function ToastContainer() {
  const {
    handleRemoveMessage,
    handleAnimationEnd,
    renderList,
  } = useToastContainer();

  return (
    <Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveMessage}
          isLeaving={isLeaving}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
