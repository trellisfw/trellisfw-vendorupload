/** @jsx jsx */

// import List  from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import { Form, Radio } from 'semantic-ui-react';

import { connect } from '@cerebral/react';
import { jsx, css } from '@emotion/core';
import { state } from 'cerebral';

// const SUPPORTED_FT = [
//   "PDF",
//   "JPEG",
//   "PNG",
// ];

const FtSelect = connect(
  {
    supportedFt: state`supportedFt`
  },
  (
    supportedFt
  ) => {
    return (
      <div
        css={css`
          height: 30vh;
          width: 98vw;

          display: grid;
          grid-template-columns: 5fr 15fr 20fr 20fr 20fr 15fr 5fr;
          grid-template-rows: 10fr 30fr 10fr;

          border-bottom: thin solid grey;
        `}
      >

        <p
          css={css`
            grid-column-start: 2;
            grid-column-end: 7;
          `}
        >2. Select File Type</p>

        <Form
          css={css`
            overflow: auto;
            // background: white;

            grid-column-start: 4;
          `}
        >

          {supportedFt.supportedFt.map((ft) => {
            return (
              <Form.Field>
                <Radio
                  label={ft}
                  name='radioGroup'
                />
              </Form.Field>
            );
          })}
        </Form>
      </div>
    );
  }
);

export default FtSelect;
