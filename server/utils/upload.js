import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        if (match.indexOf(file.mimetype) === -1)
            cb(new Error("Only .png, .jpg and .jpeg files are allowed!"));
    
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,  `${uniqueSuffix} ${file.originalname}`)
    }
})

export default multer({ storage });