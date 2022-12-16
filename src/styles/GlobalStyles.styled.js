import { createGlobalStyle } from 'styled-components';

export const GlobalStyleComponent = createGlobalStyle`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
      text-decoration:none;
  }
`;