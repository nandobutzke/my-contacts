import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './styles';

export default function PageHeader({ title }) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <button type="button" onClick={handleGoBack}>
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </button>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
