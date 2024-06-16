import { useState } from 'react';

import * as S from './style';
import PdfViewer from '../pdfViewer';

const PdfUpload = () => {
  const [fileInfo, setFileInfo] = useState({
    file: new Blob(),
    name: '',
    url: '',
  });

  const { name, file, url } = fileInfo;

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadFile = e.target.files;

    if (uploadFile !== null) {
      console.log(e.target.files);

      setFileInfo({
        file: uploadFile[0],
        name: uploadFile[0].name,
        url: URL.createObjectURL(uploadFile[0]), // 브라우저에서 미리 볼 수 있는 URL로 변환
      });
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
      <S.PdfInputName placeholder="첨부파일" value={name} readOnly />
      {url !== '' && <PdfViewer file={file} />}
    </S.PdfInputWrap>
  );
};

export default PdfUpload;
