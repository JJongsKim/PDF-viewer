import { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

import * as S from './style';

interface PdfViewerProps {
  file: Blob; // 멀티미디어 데이터용 타입
}

// 공식문서 예제
pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`;

const PdfViewer = ({ file }: PdfViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let canceled = false;

    const loadPdf = async () => {
      try {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);

        reader.onload = async () => {
          if (reader.result && !canceled) {
            const loading = pdfjsLib.getDocument(reader.result);
            const pdf = await loading.promise;
            const page = await pdf.getPage(1);

            if (canvasRef.current && previewBoxRef.current && !canceled) {
              const canvas = canvasRef.current;
              const context = canvas.getContext('2d');

              if (context) {
                const previewBoxWidth = previewBoxRef.current.clientWidth;
                const viewport = page.getViewport({
                  scale: previewBoxWidth / page.getViewport({ scale: 1 }).width,
                });

                canvas.width = viewport.width;
                canvas.height = viewport.height;
                context.clearRect(0, 0, canvas.width, canvas.height);

                const renderContext = {
                  canvasContext: context,
                  viewport: viewport,
                };

                await page.render(renderContext).promise;
              }
            }
          }
        };
      } catch (error) {
        console.error('PDF 미리보기 에러입니다:::', error);
      }
    };
    loadPdf();

    return () => {
      canceled = true;
    };
  }, [file]);

  return (
    <S.PreviewWrap>
      <S.PreviewLabel>미리보기</S.PreviewLabel>
      <S.PreviewBox ref={previewBoxRef}>
        <canvas ref={canvasRef} />
      </S.PreviewBox>
    </S.PreviewWrap>
  );
};

export default PdfViewer;
