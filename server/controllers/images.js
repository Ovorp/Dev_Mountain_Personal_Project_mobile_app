const { uploadToS3, getFromS3, deleteFromS3 } = require('./s3');
const fs = require('fs');
const util = require('util');

const unlinkImageFile = util.promisify(fs.unlink);

async function uploadImage(req, res) {
  const imageFile = req.file;
  console.log(req.body);
  const result = await uploadToS3(imageFile).catch((err) =>
    console.log(err, '!!!UploadImage!!!')
  );
  await unlinkImageFile(imageFile.path);
  console.log(result);
  const description = req.body.description;
  res.status(200).json({
    imagePath: result.key,
    imageLocation: result.Location,
    imageDescription: description,
  });
}

function getImage(req, res) {
  const key = req.params.key;
  const readStream = getFromS3(key);

  readStream.pipe(res.status(200));
}

function deleteImage(req, res) {
  const key = req.params.key;
  deleteFromS3(key);
  res.send('the image should have been deleted');
}

module.exports = { uploadImage, getImage, deleteImage };