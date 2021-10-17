const Videos = require('../models/videos');


const fileUpload = async (req, res, next) => {
    try{
        const file = new Videos({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            tags: req.tags
        });
        console.log(file)
        await file.save();
        res.status(201).send('File Uploaded Successfully');

    }catch(error) {
        res.status(400).send(error.message);
    }
}

const getallFiles = async (req, res, next) => {
    try{
        const files = await Videos.find();
        res.status(200).send(files);
        
    }catch(error) {
        res.status(400).send(error.message);
    } 
}

const fileDownload = async (req, res, next) => {
    try {

        const file = await Videos.findById(req.params.id).exec();
        const fileDowload = process.cwd() + `${file.filePath}`;
        
        if (fileDowload.match("Error") ){
            res.status(200).send('File Download Successfully').download(fileDowload);
        } else {
            res.status(400).send('There are problems downloading the file');
        }
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateLikes  = async (req, res, next) => {
    try{
        const updateFile = await Videos.findOneAndUpdate(
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
    fileDownload,
    updateLikes
}