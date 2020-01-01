/** @jsx jsx */

import { state, sequences } from 'cerebral';
import { connect } from '@cerebral/react';
import { jsx, css } from '@emotion/core';

import ReactDropzone from 'react-dropzone';

const FileSelect = connect(
  {
    // file_name: state`file.file_name`,
    is_loaded: state`file.is_loaded`,
    setFile: sequences`setFile`,
  },
  (
    {
      // file_name,
      is_loaded,
      setFile,
    }
  ) => {
    return (
      <div
        className="Select"
        css={css`
          height: 30%;
          width: 98%;

          display: grid;
          grid-template-columns: 1fr 3fr 4fr 4fr 4fr 3fr 1fr;
          grid-template-rows: 1fr 3fr 1fr;
          border-top: thin solid grey;
          border-bottom: thin solid grey;
        `}
      >

        <p
          css={css`
            grid-column-start: 2;
            grid-column-end: 7;
          `}
        >1. Select File</p>

        {!is_loaded &&
          <ReactDropzone
            accept={"application/pdf,image/*"}
            onDrop={(_files) => {
              // console.log(files);
              setFile();
            }}
          >

            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <section
                  css={css`
                    background: white;
                    grid-column-start: 4;
                    grid-row-start: 2;
                    place-self: start / center;
                    height: 100%;
                    width: 100%;
                  `}
                >

                  <div
                    css={css`
                      display: grid;
                      height: 100%;
                      width: 100%;
                      border-style: dashed;
                      border-color: grey;
                      align-content: center;
                      justify-content: center;
                    `}
                    { ...getRootProps() }
                  >
                <input { ...getInputProps()} id='rdz-input' />

                    {
                      isDragActive ?
                        <p
                          css={css`
                            text-align: center;
                          `}
                        > Release to drop files here </p> :
                        <p
                          css={css`
                            text-align: center;
                          `}
                        > Drag and drop, or click to select file </p>
                    }
                  </div>
                </section>
              )
            }}
          </ReactDropzone>
        }

      </div>
    );
  }
);

export default FileSelect;

