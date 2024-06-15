import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.text};
    background-color: #fbfbfb;
  }

  * {
    box-sizing: border-box;
    
    ::-webkit-scrollbar {
      display: none !important;
    }
  }

  a,
  a:hover,
  a:focus,
  a:link,
  a:visited,
  a:active {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    display: inline-block;
  }

  ul,
  li {
    list-style: none;
  }

  span,
  label {
    display: inline-block;
  }

  p {
    margin: 0;
    padding: 0;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
