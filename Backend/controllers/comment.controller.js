import express from 'express';
import Comment from '../models/comment.model.js';
import Post from '../models/post.model.js';
import user from '../models/user.model.js' 

//addcomment
export const addComment = async (req, res) => {
    const newComment = new Comment({
        user: req.body.user,
        post :req.body.post,
        desc:req.body.desc,
    })

     try {
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (err) {
        console.error("Error Saving Comment:", err); // Log the error for debugging
        res.status(500).json(err);
    }
}

//getcomment
export const getComment = async (req, res) => {
     try {
        const comments = await Comment.find({ post: req.params.post }).populate("user", "username"); // Populate user info
        res.status(200).json(comments);
    } catch (err) {
        console.error("Error Fetching Comments:", err); // Log the error
        res.status(500).json(err);
    }
}

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        
        // If comment doesn't exist
        if (!comment) {
            return res.status(404).json("Comment not found");
        }

        // Check if the user is authorized to delete the comment
        if (comment.user !== comment.user._id) {
            return res.status(403).json("You can only delete your comment");
        }

        //"You can only delete your comment"

        // Delete the comment
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment has been deleted");
    } catch (err) {
        console.error("Error Deleting Comment:", err); // Log error for debugging
        res.status(500).json(err); // Send error response
    }
};

