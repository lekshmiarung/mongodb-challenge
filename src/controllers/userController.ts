import { Request, Response } from 'express';
import { User } from '../models/index.js';



// Get all users, populating thoughts and friends
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().populate('thoughts').populate('friends');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', details: error });
  } return;
};

// Get a single user by ID, populating thoughts and friends
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId).populate('thoughts').populate('friends');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user', details: error });
  } return;

};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user', details: error });
  }
};

// Update a user by ID
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update user', details: error });
  } return;
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user', details: error });
  } return;
};



// Add a friend to the user's friend list
export const addFriend = async (req: Request, res: Response) => {
  const { userId, friendId } = req.params;
  try {

    // Add the friend to the user's friends array only if it's not already there
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } },
      { new: true }
    ).populate('friends', 'username email');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Friend added successfully', user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error adding friend', error });
  } return;
};

// Remove a friend from the user's friend list
export const removeFriend = async (req: Request, res: Response) => {
  const { userId, friendId } = req.params;

  try {
    // Remove the friend from the user's friends array
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } },
      { new: true }
    ).populate('friends', 'username email');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Friend removed successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error removing friend', error });
  } return;
};


// //how to add a friend to a user's friend list
// //how to remove a friend from a user's friend list
// //in insomnia
// //how to add a friend to a user's friend list
// //http://localhost:3001/api/users/60f3b9b3b3b3b3b3b3b3b3b/friends/60f3b9b3b3b3b3b3b3b3b3b
// post request
// //how to remove a friend from a user's friend list
// //http://localhost:3001/api/users/60f3b9b3b3b3b3b3b3b3b3b/friends/60f3b9b3b3b3b3b3b3b3b3b
// //json body for adding a friend
// //json body for removing a friend
// //{
// //  "username": "John Doe",
// //  "email": "
// }