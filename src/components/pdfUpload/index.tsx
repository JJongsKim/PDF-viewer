import { useState } from 'react';

import * as S from './style';
import PdfViewer from '../pdfViewer';

const PdfUpload = () => {
  const [file, setFile] = useState('');
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setFile(e.target.files[0].name);
    }
  };

  return (
    <S.PdfInputWrap>
      <S.PdfInputLabel htmlFor="pdfUpload">🔗 PDF를 등록해주세요</S.PdfInputLabel>
      <S.PdfInput
        id="pdfUpload"
        type="file"
        accept=".pdf"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUploadFile(e)}
      />
      <S.PdfInputName placeholder="첨부파일" value={file} />
      {file !== '' && <PdfViewer />}
    </S.PdfInputWrap>
  );
};

export default PdfUpload;
