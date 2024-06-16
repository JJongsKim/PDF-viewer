import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/globalStyle';
import { theme } from './styles/theme';
import PdfUpload from './components/pdfUpload';

/*
  [과제 항목]
  1) 사용자가 PDF 파일을 업로드할 수 있어야 함
  2) 업로드된 PDF 파일을 웹 페이지에서 볼 수 있어야 함
  3) 뷰잉된 PDF파일에서 신구조문을 배열 형태로 파생하는 결과를 도출해야함 
  (첨부파일 중에 이중 배열 형태의 결과파일 있음)
*/

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PdfUpload />
    </ThemeProvider>
  );
}

export default App;
