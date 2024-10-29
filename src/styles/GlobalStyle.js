import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #2E8B57; /* Cor verde para destacar o nome da empresa */
  }

  p {
    color: #666;
  }

  button {
    background-color: #2E8B57;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #27694b;
    }
  }
`;

export default GlobalStyle;
