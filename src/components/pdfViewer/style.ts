import { styled } from 'styled-components';

const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PreviewLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 5px 0;
`;

const PreviewBox = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 710px;
  border: 1px solid ${({ theme }) => theme.colors.light_gray};
`;

export { PreviewWrap, PreviewLabel, PreviewBox };
