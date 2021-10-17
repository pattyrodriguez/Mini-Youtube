const express = require('express');
const {upload} = require('../helpers/multerHelper');
const {fileUpload,
    getallFiles,
    updateLikes} = require('../controllers/videoController')
const router = express.Router();




router.post('/fileUpload', upload.single('file'), fileUpload);
router.get('/getAllFiles', getallFiles);
router.patch('/updateLikes/:id',updateLikes);

module.exports = router;