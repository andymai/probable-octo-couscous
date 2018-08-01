import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Montserrat';
    src: url('/assets/web-fonts/Montserrat-Bold-webfont.woff') format('font-woff');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/assets/web-fonts/Montserrat-Light-webfont.woff') format('font-woff');
    font-weight: normal;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  body.fontLoaded {
    font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
