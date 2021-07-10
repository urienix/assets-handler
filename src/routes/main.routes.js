import { Router } from 'express';
import pkg from '../../package.json'
import uploadRoutes from './upload.routes';

const router = Router();

router.use('/upload', uploadRoutes);

router.get('/', (req, res) => {
    res.status(200).send({
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        author: pkg.author,
        repository: pkg.repository.url
    })
});

export default router;