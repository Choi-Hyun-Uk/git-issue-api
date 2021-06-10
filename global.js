import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    }
    ol,
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    h1, h2, h3, h4 {
        font-size: 100%;
        font-weight: normal;
    }
    * {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
