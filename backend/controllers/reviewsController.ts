import { Database, Statement } from 'sqlite';
import { Review } from '../reviews';

class ReviewController {
  constructor(private db: Database) {}

  async createReview(review: Review): Promise<Review> {
    const {name, stars, comment, picture} = review;
    const sql = 'INSERT INTO reviews (username, stars, comment, picture) VALUES (?, ?, ?, ?)';

    const result = await this.db.run(sql, [name, stars, comment, picture]);
    if (result.lastID) {
      const createdReview = await this.getReviewById(result.lastID);
      return createdReview!;
    } else {
      throw new Error('Failed to create task');
    }
  }

  async getReviewById(id: number): Promise<Review | undefined> {
    const sql = 'SELECT * FROM reviews WHERE id = ?';
    const row = await this.db.get(sql, [id]);
    return row as Review | undefined;
  }

  async getAllReviews(): Promise<Review[]> {
    const sql = 'SELECT * FROM reviews';
    const rows = await this.db.all(sql);
    return rows as Review[];
  }
  // async updateTask(id: number, updatedTask: Task): Promise<Task | undefined> {
  //   const { title, description } = updatedTask;
  //   const sql = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';

  //   const result = await this.db.run(sql, [title, description, id]);
  //   if (result.changes > 0) {
  //     return updatedTask;
  //   } else {
  //     throw new Error('Task not found or update failed');
  //   }
  // }

  // async deleteTask(id: number): Promise<void> {
  //   const sql = 'DELETE FROM tasks WHERE id = ?';
  //   const result = await this.db.run(sql, [id]);
  //   if (result.changes === 0) {
  //     throw new Error('Task not found or deletion failed');
  //   }
  // }
}

export default ReviewController;
