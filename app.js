import express from 'express';
import swaggerRoutes from './routes/docs/swagger';
import router from './routes/index';
const app = express();

app.use('/', router);
var port = 3000;

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}!`);
});