// 1.  need to define 
// 2.  byte range that skips fails
// 3.  non-skips should pass
// 4.  header to represent byte range to upload
// 4.5 loop through byte range and put
// 4.6 setting for max file size

// - webdriver.io

import { state, props } from 'cerebral';
import uuid from 'uuid';

export const setFile = [
  // set file values in state
  ({ store, get }) => {
    store.set(state`fileUpload.file_name`, get(props`file_name`));
    store.set(state`fileUpload.is_loaded`, true);
    store.set(state`fileUpload.uuid`, uuid.v4());
    console.log(get(state`fileUpload`));
  },

  // upload file to server
  // TODO change to sending file to oada
  async ({ get, http }) => {
    try {
      var formData = new FormData();
      formData.append('file', document.getElementById('file').files[0]);

      /* const _req = */
      await http.post('http://localhost:8000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch(e) {
      console.error(e);
    }
  }
];

