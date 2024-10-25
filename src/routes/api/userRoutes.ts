import { Router } from 'express';
const router = Router();


// Import express and the controller methods

import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../../controllers/userController'



// Existing routes for user operations
router.get('/api/users', getUsers);
router.get('/api/users/:userId', getSingleUser);
router.post('/api/users', createUser);
router.put('/api/users/:userId', updateUser);
router.delete('/api/users/:userId', deleteUser);

// New routes for managing friends
router.post('/api/users/:userId/friends/:friendId', addFriend);
router.delete('/api/users/:userId/friends/:friendId', removeFriend);

export default router;

