const Videos = require('../models/videos');


const fileUpload = async (req, res, next) => {
    try{
        const file = new Videos({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            title: req.title,
            tags: req.tags,

        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const getallFiles = async (req, res, next) => {
    console.log("ujuuuuum")
    try{
        const files = await Videos.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const updateLikes  = async (req, res, next) => {
    try{
        const updateFile = await videos.findOneAndUpdate(
            {
                _id: req.params.id,
            }, { 
                $set: { likes: req.body.likes } 
            }
        )
        res.status(200).send(updateFile);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    fileUpload,
    getallFiles,
    updateLikes
}