/** @jsx jsx */

// import { state } from 'cerebral';
import { connect } from '@cerebral/react';
import { jsx, css } from '@emotion/core';

import Navigation from './components/Navigation';

import FileSelect from './components/FileSelect';
import FtSelect from './components/FtSelect';
import UploadReview from './components/UploadReview';
// import { sequences } from 'cerebral';

const BinaryUpload = connect(
  {},
  () => {
    return (
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: 1fr;
          grid-column-gap: 1em;
          grid-template-areas:
            "navigation upload";
        `}
      >

        <Navigation 
          css={css`
            grid-area: navigation;
          `}
        />

        <div css={css`
          grid-area: upload;
        `}>
          <FileSelect css={css`
            width: 100%;
            height: 100%;
          `} />

          <FtSelect  css={css`
            width: 100%;
            height: 100%;
          `} />

          <UploadReview  css={css`
            width: 100%;
            height: 100%;
          `} />
        </div>
      </div>
    );
  }
);

export default BinaryUpload;
