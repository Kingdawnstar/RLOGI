import express from 'express';
import verifyToken from '../verifyToken.js';
import { addComment, getComment, deleteComment } from '../controllers/comment.controller.js';

const router = express.Router()



// Add a comment
router.post("/", verifyToken, addComment);
router.get("/:post", getComment);
router.delete("/:id", verifyToken, deleteComment);



export default router