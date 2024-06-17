import { useLocation } from 'react-router-dom';

import PdfParsingTable from '../components/pdfParsingTable';

const ResultPage = () => {
  const location = useLocation();
  console.log(location);

  return <PdfParsingTable />;
};

export default ResultPage;
