import { styled } from 'styled-components';

const PdfInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PdfInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.blue};

  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const PdfInputName = styled.input`
  width: 500px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 6px;
  overflow: scroll;

  .scroll::-webkit-scrollbar {
    display: none;
  }

  border: 1px solid ${({ theme }) => theme.colors.light_gray};
  color: ${({ theme }) => theme.colors.gray};
`;

const PdfInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export { PdfInputWrap, PdfInputLabel, PdfInputName, PdfInput };
