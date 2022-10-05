import { useEffect, useState } from 'react';
import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  console.log('ToastContainer rendered');

  useEffect(() => {
    function handleAddToast(event) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Math.random(),
          type: event.detail.type,
          text: event.detail.text,
        },
      ]);
    }

    document.addEventListener('addtoast', handleAddToast);
    return () => {
      document.removeEventListener('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}

    </Container>
  );
}
