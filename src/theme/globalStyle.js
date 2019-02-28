import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 16px
  }
  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
  }
  a:not([class]) {
    background-color: rgba(187,239,253,0.3);
    border-bottom: 1px solid rgba(0,0,0,0.2);
    color: #1a1a1a;

    &:hover {
      background-color: #bbeffd;
      border-bottom-color: #1a1a1a;
    }
  }
  ul {
    margin: 0 auto;
    list-style-type: none;
  }
`;

export default GlobalStyle;
