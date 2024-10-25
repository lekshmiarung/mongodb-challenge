import express from 'express';
import {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from '../../controllers/thoughtController'

const router = express.Router();

// Thought routes
router.get('/api/thoughts', getThoughts);
router.get('/api/thoughts/:thoughtId', getSingleThought);
router.post('/api/thoughts', createThought);
router.put('/api/thoughts/:thoughtId', updateThought);
router.delete('/api/thoughts/:thoughtId', deleteThought);

// Reaction routes within a thought
router.post('/api/thoughts/:thoughtId/reactions', addReaction);
router.delete('/api/thoughts/:thoughtId/reactions/:reactionId', removeReaction);

export default router;
