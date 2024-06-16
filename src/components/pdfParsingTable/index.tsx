import * as S from './style';

const PdfParsingTable = () => {
  return (
    <S.ParsingPageWrap>
      <S.ParsingPageTitleWrap>
        <S.ParsingPageTitleLine />
        <S.ParsingPageTitle>신 • 구조문 대비</S.ParsingPageTitle>
      </S.ParsingPageTitleWrap>

      <S.ParsingResultBox>
        <S.ParsingResultTable>
          <S.TableTitle $bgColor={'#999999'}>현행</S.TableTitle>
          <S.TableTitle $bgColor={'#05A8BF'}>개정안</S.TableTitle>
        </S.ParsingResultTable>
      </S.ParsingResultBox>
    </S.ParsingPageWrap>
  );
};

export default PdfParsingTable;
