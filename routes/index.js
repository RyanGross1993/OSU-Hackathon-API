import express from 'express';
import swagger from './docs/swagger';
import hackathonRouter from './api/hackathonRoutes';

const router = express.Router();

router.use('/', swagger);
router.use('/hackathon', hackathonRouter);

module.exports = router;