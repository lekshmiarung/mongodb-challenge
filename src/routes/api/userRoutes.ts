import { Router } from 'express';
const router = Router();
import { getUsers, 
  getUserById ,
  createUser ,
  deleteUser,
  updateUser,
  addFriend,
 removeFriend
} from '../../controllers/userController.js';



// Set up GET all and POST at /api/users

// /api/users
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
 export default router;
