const path = require('path')
const crypto = require('crypto');
const multer = require('multer');

const multerConfig = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'public', 'images'),
    filename: (req, file, callback) => {
      const hash = crypto.randomBytes(8).toString('hex');
      const nomeArquivo = `${hash}-${file.originalname}`;

      callback(null, nomeArquivo);
    }
  })
};

module.exports = multerConfig;
