import express, { Router } from 'express';
import {bookList, bookAdding, bookUpdate, bookDelete} from '../controllers/bookController.js' 


const router: Router = express.Router();

router.route('/books/:id').get(bookList);
router.route('/books').post(bookAdding);
router.route('/books/:bookId').put(bookUpdate);
router.route('/books/:bookId').delete(bookDelete);

export default router;