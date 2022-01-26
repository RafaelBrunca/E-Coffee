//importando multer e path
const multer = require("multer"); 
const path = require("path");

//Definindo local a salvar as Imagens dos produtos e nome das imagens.
const storageImages = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/images/uploads/imagemDoProduto");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname+"-"+Date.now()+"-"+path.extname(file.originalname));
    }
});

const uploadImage = multer({storage:storageImages});

module.exports = {
    uploadImage
};