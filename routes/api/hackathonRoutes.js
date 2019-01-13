import express from 'express';
import HackathonController from '../../controllers/HackathonController'

const hackathonRouter = express.Router();

hackathonRouter.get('/', HackathonController.getAllHackathons);

module.exports = hackathonRouter;