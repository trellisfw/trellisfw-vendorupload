// TODO:
// 1. expected documents
//    - if not present, show drop window for doc
//    a. insurance form
//    b. letter of gaurantee
//    c. location
//        - audit information
//
// 2. expiration date
//    - if not known ask with red-bordered textbox
//    - pdfjs

export default {
  title: 'Binary Upload',
  fileUpload: {
    file: null,
    is_loaded: false,
    uuid: '',
  },
  supportedFt: [
    "PDF",
    "JPG",
    "PNG"
  ]
}
