import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';

import * as S from './style';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

interface PdfViewerProps {
  file: Blob; // 멀티미디어 데이터용 타입
}

// 공식문서 예제
pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`;

const PdfViewer = ({ file }: PdfViewerProps) => {
  const navigate = useNavigate();

  const [currentPdf, setCurrentPdf] = useState<PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewBoxRef = useRef<HTMLDivElement>(null);

  const getNextPage = () => {
    if (currentPdf && currentPage < currentPdf.numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPreviousPage = () => {
    if (currentPdf && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 📌 페이지별 PDF 렌더링
  const renderPage = useCallback(
    async (currentPage: number, pdf: PDFDocumentProxy | null) => {
      try {
        if (pdf) {
          const page = await pdf.getPage(currentPage);

          if (canvasRef.current && previewBoxRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            if (context) {
              const previewBoxWidth = previewBoxRef.current.clientWidth;
              const viewport = page.getViewport({
                scale: previewBoxWidth / page.getViewport({ scale: 1 }).width,
              });

              canvas.width = viewport.width;
              canvas.height = viewport.height;

              const renderContext = {
                canvasContext: context,
                viewport: viewport,
              };

              await page.render(renderContext).promise;
            }
          }
        }
      } catch (error) {
        console.error('PDF 미리보기 에러입니다:::', error);
      }
    },
    [currentPdf],
  );

  // 📌 props로 건네받는 file의 값이 달라질 때, 새로운 PDF Reader를 currentPdf에 저장
  useEffect(() => {
    setCurrentPage(1); // 파일 변경 시 초기화

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = async () => {
      if (reader.result) {
        const loading = pdfjsLib.getDocument(reader.result);
        loading.promise // pdfjs는 기본적으로 promise 사용
          .then(pdf => {
            setCurrentPdf(pdf);
          })
          .catch(error => {
            console.error('PDF 불러오기 실패:::', error);
          });
      }
    };
  }, [file]);

  // 📌 PDF 정보, 페이지, renderPage 함수에 따라 renderPage 실행
  useEffect(() => {
    renderPage(currentPage, currentPdf);
  }, [currentPdf, currentPage, renderPage]);

  return (
    <S.PreviewWrap>
      <S.PreviewLabel>
        <p>미리보기</p>
        <S.PageMovingWrap>
          <button type="button" onClick={getPreviousPage}>
            이전 페이지
          </button>
          <p>{currentPage}</p>
          <button type="button" onClick={getNextPage}>
            다음 페이지
          </button>
        </S.PageMovingWrap>
      </S.PreviewLabel>

      <S.PreviewBox ref={previewBoxRef}>
        <canvas ref={canvasRef} />
      </S.PreviewBox>

      <S.ParsingButton type="button" onClick={() => navigate('/result')}>
        PDF 파싱하기
      </S.ParsingButton>
    </S.PreviewWrap>
  );
};

export default PdfViewer;
