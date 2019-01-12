import express from 'express';
import SwaggerUI from 'swagger-ui-express';
import * as data from './swagger.json';

const router = express.Router();

router.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(data));

module.exports = router;