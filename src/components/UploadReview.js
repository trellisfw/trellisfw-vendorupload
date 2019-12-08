/** @jsx jsx */

import { /*state,*/ sequences } from 'cerebral';
import { connect } from '@cerebral/react';
import { jsx, css } from '@emotion/core';

const UploadReview = connect(
  {
    uploadF: sequences`uploadF`
  },
  ({ uploadF }) => {
    return (
      <div
        css={css`
          display: grid;
          grid-template-columns: 5fr 15fr 20fr 20fr 20fr 15fr 5fr;
          grid-template-rows: 10fr 30fr 10fr;
          border-bottom: thin solid var(--button-fwd);
        `}
      >
        <p
          css={css`
            grid-column-start: 2;
            grid-column-end: 7;
          `}
        >3. Review File and Submit</p>
        <div
          css={css`
            grid-column-start: 4;
            grid-row-start: 3;
            align-self: center;

            display: grid;
            grid-template-columns: 50fr 50fr;
          `}
        >
          <button
            css={css`
              background: var(--button-bck);
              grid-column-start: 1;
            `}
          >Return</button>
          <button
            css={css`
              background: var(--button-fwd);
              grid-column-start: 2;
            `}
            onClick={() => {
              uploadF();
            }}
          >Submit</button>
        </div>
      </div>
    );
  }
);

export default UploadReview;
