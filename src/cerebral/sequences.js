// 1.  need to define 
// 2.  byte range that skips fails
// 3.  non-skips should pass
// 4.  header to represent byte range to upload
// 4.5 loop through byte range and put
// 4.6 setting for max file size

// - webdriver.io

import { state } from 'cerebral';
import uuid from 'uuid';

// TODO Make this a configurable variable
// const SLICE_SIZE = 4096;

export const setFile = [
  // set file values in state
  ({ store }) => {
    // store.set(state`fileUpload.file_name`, get(props`file_name`));
    store.set(state`fileUpload.is_loaded`, true);
    store.set(state`fileUpload.uuid`, uuid.v4());
    // console.log("File to Upload");
    // console.log(files);
  }
]

export const uploadF = [
  // upload file to server
  // TODO change to sending file to oada
  async ({ get, http }) => {
    try {

      console.log("upload file");
      const file = document.getElementById('rdz-input').files[0];
      console.log(file)

      let form_data = new FormData();
      form_data.append("file", file);
      await http.post('http://localhost/resources', form_data, {
        header: {
          'Content-Type': 'multipart/form-data',
          // XXX This is for development ONLY
          'Authorization': 'Bearer def',
        }
      });

    } catch(e) {
      console.error(e);
    }
  }
];

