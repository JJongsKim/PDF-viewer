import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">프로젝트</div>
    </ThemeProvider>
  );
}

export default App;
