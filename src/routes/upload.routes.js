import { Router } from "express";
import imagesRoutes from './images.routes';

const router = Router();

router.use('/images', imagesRoutes);

export default router;