import { Request, Response } from 'express';
import User from '../models/User';
import Thought from '../models/Thought';

// Get all users
export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Unable to retrieve users" });
  }
};
// Get a single user by _id, populate thoughts and friends
export const getSingleUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('thoughts')
      .populate('friends')
      .select('-__v');

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Unable to retrieve user" });
  }
};

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Unable to create user" });
  }
};

// Update a user by _id
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ message: "Unable to update user" });
  }
};

// Delete a user by _id and associated thoughts
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      res.status(404).json({ message: 'No user with that ID' });
      return;
    }

    // Delete all thoughts associated with the user
    const deletedThoughts = await Thought.deleteMany({ username: user.username });
    res.status(200).json({
      message: 'User and associated thoughts deleted successfully!',
      deletedThoughtsCount: deletedThoughts.deletedCount,
    });
  } catch (err) {
    console.error("Error deleting user and thoughts:", err);
    res.status(500).json({ message: "Unable to delete user and associated thoughts" });
  }
};
// Add a friend to the user's friend list
export const addFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, friendId } = req.params;

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { friends: friendId } }, // $addToSet prevents duplicates
      { new: true }
    ).populate('friends');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'Friend added successfully', user });
  } catch (err) {
    console.error("Error adding friend:", err);
    res.status(500).json({ message: 'Unable to add friend' });
  }
};

// Remove a friend from the user's friend list
export const removeFriend = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, friendId } = req.params;

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { friends: friendId } }, // $pull removes friendId from friends array
      { new: true }
    ).populate('friends');

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json({ message: 'Friend removed successfully', user });
  } catch (err) {
    console.error("Error removing friend:", err);
    res.status(500).json({ message: 'Unable to remove friend' });
  }
};

