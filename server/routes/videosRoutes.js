const express = require('express');
const {upload} = require('../helpers/multerHelper');
const {fileUpload,
    getallFiles, fileDownload,
    updateLikes} = require('../controllers/videoController')
const router = express.Router();




router.post('/fileUpload', upload.single('file'), fileUpload);
router.get('/getAllFiles', getallFiles);
router.get('/fileDowload/:id', fileDownload);
router.patch('/updateLikes/:id',updateLikes);

module.exports = router;