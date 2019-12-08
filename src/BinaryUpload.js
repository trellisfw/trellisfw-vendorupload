/** @jsx jsx */

// import { state } from 'cerebral';
import { connect } from '@cerebral/react';
import { jsx } from '@emotion/core';

import FileSelect from './components/FileSelect';
import FtSelect from './components/FtSelect';
import UploadReview from './components/UploadReview';
// import { sequences } from 'cerebral';

const BinaryUpload = connect(
  {},
  () => {
    return (
      <div>
        <FileSelect />
        <FtSelect />
        <UploadReview />
      </div>
    );
  }
);

export default BinaryUpload;
