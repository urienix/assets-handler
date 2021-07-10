import { Router } from 'express';
import multer from 'multer';
import path from 'path';

const router = Router();

//MULTER CONFIG: to get file images to temp server storage
const multerConfig = {

    //specify diskStorage (another option is memory)
    storage: multer.diskStorage({

        //specify destination
        destination: function (req, file, next) {
            next(null, path.join(__dirname, '../public/images'));
        },

        //specify the filename to be unique
        filename: function (req, file, next) {
            //get the file mimetype ie 'image/jpeg' split and prefer the second value ie'jpeg'
            const ext = file.mimetype.split('/')[1];
            //set the file fieldname to a unique name containing the original name, current datetime and the extension.
            next(null, file.fieldname + '-' + Date.now() + '.' + ext);
        }
    }),

    // filter out and prevent non-image files.
    fileFilter: function (req, file, next) {
        if (!file) {
            next();
        }

        // only permit image mimetypes
        const image = file.mimetype.startsWith('image/');
        if (image) {
            req.uploaded = {
                ok: true,
                message: 'Imagen subida exitosamente'
            }
            next(null, true);
        } else {
            //TODO: A better message response to user on failure.
            req.uploaded = {
                ok: false,
                message: 'Imagen no soportada'
            }
            return next();
        }
    }
};

router.post('/', multer(multerConfig).single('image'), (req, res) => {
    if (req.uploaded.ok) {
        res.status(200).send({
            ok: req.uploaded.ok,
            message: req.uploaded.message,
            host: `${process.env.HOST}:${process.env.PORT}`,
            url: `/images/${req.file.filename}`
        });
    } else {
        res.status(400).send({
            ok: req.uploaded.ok,
            message: req.uploaded.message
        });
    }
})


export default router;