import express, { Request, Response, Router } from 'express';
import { Database } from 'sqlite';
import ReviewController from './controllers/reviewsController';

class ReviewRouter {
  private router: Router;
  private reviewController: ReviewController;
  
constructor(private db: Database) {
    this.router = express.Router();
    this.reviewController = new ReviewController(db);
    this.initializeRoutes();
}

  private initializeRoutes(): void {
    this.router.post('/reviews', async (req: Request, res: Response) => {
      try {
        const review = req.body; // Make sure to validate and sanitize input
        const createdReview = await this.reviewController.createReview(review);
        res.status(201).json(createdReview);
      } catch (error: Error | any) {
        console.error('Error creating review:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
      }
    });

    this.router.get('/reviews', async (req: Request, res: Response) => {
      try {
        const reviews = await this.reviewController.getAllReviews();
        res.json(reviews);
      } catch (error : Error | any) {
        console.error('Error fetching reviews:', error.message);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
      }
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default ReviewRouter;
