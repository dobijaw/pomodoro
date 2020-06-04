import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      background20: string;
      background40: string;
      background60: string;
      primary: string;
      secondary: string;
      copy: string;
    };
  }
}
