import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "../src/styles/global";
import { theme } from "../src/styles/theme";


addDecorator(sb => <><GlobalStyle />{sb()}</>);

addDecorator((sb) => <ThemeProvider theme={theme}>{sb()}</ThemeProvider>);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen'
}
