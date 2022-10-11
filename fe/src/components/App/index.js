import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import defaultTheme from '../../assets/styles/themes/default';

import GlobalStyle from '../../assets/styles/global';
import { Container } from './styles';
import { Header } from '../Header';

import Routes from '../../Routes';
import { ToastContainer } from '../Toast/ToastContainer';
import NavBar from '../NavBar';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <ToastContainer />

          <NavBar />
          <Header />
          <Routes />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
