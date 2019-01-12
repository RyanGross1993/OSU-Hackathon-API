import express from 'express';
import swagger from './docs/swagger';

const router = express.Router();

router.use('/', swagger);

module.exports = router;