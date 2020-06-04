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

    body {
        padding: 0;
        margin: 0;
        background: ${({ theme }) => theme.colors.background};
        font-family: 'Exo 2', sans-serif;
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
