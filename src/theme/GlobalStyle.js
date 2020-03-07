import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *:focus {
        outline: 1;
        outline-color: #343943;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-y: scroll;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: 'Exo 2', sans-serif;
        background: #192532;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #1E2A37;
    }

    ::-webkit-scrollbar-thumb {
        background: #9E8588;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #E8C7C8;
    }
`;

export default GlobalStyle;
