import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/themes/default';

import GlobalStyle from './assets/styles/global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>MyContacts</h1>
    </ThemeProvider>
  );
}

export default App;
