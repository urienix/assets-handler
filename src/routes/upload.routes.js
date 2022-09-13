import { Router } from "express";
import imagesRoutes from './images.routes';
import videosRoutes from './videos.routes';

const router = Router();

router.use('/images', imagesRoutes);
router.use('/videos', videosRoutes);

export default router;