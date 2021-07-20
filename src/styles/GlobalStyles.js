import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #F9F9F9;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    font-family: 'Poppins', sans-serif;
  }
`;