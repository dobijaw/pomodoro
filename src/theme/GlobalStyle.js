import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *:focus {
        outline: 1;
        outline-color: ${({ theme }) => theme.colors.background40};
    }

    html {
        font-size: 62.5%;
    }

    body {
        height: 400vh;
        overflow-y: scroll;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: 'Exo 2', sans-serif;
        background: ${({ theme }) => theme.colors.background};
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.background20};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.secondary};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.primary};
    }
`;

export default GlobalStyle;
