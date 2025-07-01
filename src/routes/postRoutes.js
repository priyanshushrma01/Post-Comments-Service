import express from 'express';
import { createPost, getPostWithComments } from '../controllers/postController.js';
const router = express.Router();

router.post('/', createPost);
router.get('/:id', getPostWithComments);

export default router;