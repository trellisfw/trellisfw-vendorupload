
/*
 * TODO:
 * send chunks
 * node 11.15
 */
/** @jsx jsx */

// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import { Container } from '@cerebral/react';
import { jsx, css, Global } from '@emotion/core';

import cerebral from './cerebral';
import BinaryUpload from './BinaryUpload';

ReactDOM.render(
  <Container app={cerebral}>
    <Global
      styles={css`
        * {
          --black: #000000;
          --bg-dark: #272822;
          --bg-light: #efede8;

          --button-fwd: #f27100;
          --button-bck: #ffffff;

          --text-dark: #333333;
          --text-light: #f3f3f3;
          --text-bright: #f92672;
        }

        html {
          background: var(--bg-light);
          color: var(--text-dark);
          height: 100%;
          width: 100%;
        }

        body {
          height: 100%;
          width: 100%;
        }
      `}
    />
    <h1
      css={css`
        color: var(--text-dark);
        text-align: center;
      `}
    > Oada Binary Upload </h1>
    <BinaryUpload />
  </Container>,
  document.getElementById('root')
);

