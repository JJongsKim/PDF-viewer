import { styled } from 'styled-components';

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PreviewLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  font-size: 0.9rem;
  font-weight: 600;
`;

const PreviewBox = styled.figure`
  display: flex;
  align-items: center;
  width: 500px;
  height: 710px;
  border: 1px solid ${({ theme }) => theme.colors.light_gray};
`;

const PageMovingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px 0;

  button {
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.light_gray};
  }
`;

export { PreviewWrap, PreviewLabel, PreviewBox, PageMovingWrap };
