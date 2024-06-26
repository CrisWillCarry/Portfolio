import express from 'express';
import cors from 'cors';
import ReviewRouter from './ReviewRouter';
import { initDatabase } from './database/db';

const app = express();
const port = process.env.API_PORT || 8080;

const startServer = async () => {
  try {
    // Await the initDatabase() function to get the actual Database instance
    const db = await initDatabase();

    app.use(cors(
      { origin: `${process.env.FRONT_END_URI}`,
        methods: 'GET,POST,DELETE'}
    ));

    app.use(express.json());

    const reviewRouter = new ReviewRouter(db);
    app.use('/', reviewRouter.getRouter());

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error : Error | any) {
    console.error('Error starting the server:', error.message);
  }
};

startServer();
