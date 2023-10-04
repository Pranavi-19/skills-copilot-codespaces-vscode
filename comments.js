// Create web server
// ------------------------------

// Import express
const express = require('express');
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/commentController');

// Import auth middleware
const auth = require('../middleware/auth');

// Create comment
// POST - /api/comments
router.post('/', auth, commentController.createComment);

// Get comments
// GET - /api/comments
router.get('/', commentController.getComments);

// Update comment
// PUT - /api/comments/:id
router.put('/:id', auth, commentController.updateComment);

// Delete comment
// DELETE - /api/comments/:id
router.delete('/:id', auth, commentController.deleteComment);

module.exports = router;