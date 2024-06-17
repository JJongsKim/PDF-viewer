import { styled } from 'styled-components';

const ParsingPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ParsingPageTitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ParsingPageTitleLine = styled.div`
  width: 4px;
  height: 25px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const ParsingPageTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const ParsingResultBox = styled.div`
  width: 500px;
  height: 710px;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors.light_gray};
  border-radius: 6px;
  overflow: scroll;
`;

const ParsingResultTable = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 8px 0;
  place-items: center;
  width: 100%;
`;

const TableTitle = styled.div<{
  $bgColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96%;
  height: 28px;
  border-radius: 4px;
  background-color: ${props => props.$bgColor};
  font-weight: 700;
  font-size: 0.9rem;
  color: white;
`;

export {
  ParsingPageWrap,
  ParsingPageTitleWrap,
  ParsingPageTitleLine,
  ParsingPageTitle,
  ParsingResultBox,
  ParsingResultTable,
  TableTitle,
};
