import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *:focus {
        outline: 1;
        outline-color: ${({ theme }) => theme.colors.lines};
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
        background: ${({ theme }) => theme.colors.background};
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.backgroundLighter};
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.details};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.buttons};
    }
`;

export default GlobalStyle;
