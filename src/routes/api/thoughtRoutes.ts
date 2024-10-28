import { Router } from 'express';
const router = Router();

import {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from '../../controllers/thoughtController.js';



// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);


router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

export default router;
