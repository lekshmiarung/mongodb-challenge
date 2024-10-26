import { Request, Response } from 'express';
import { Thought,User } from '../models/index.js';

// Get all thoughts
export const getThoughts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single thought by its _id
export const getSingleThought = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new thought and associate it with a user

export const createApplication = async (req: Request, res: Response) => {
  try {
    const application = await Thought.create(req.body);//it creates a new application by 
    //using the Application model and the request body
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { applications: application._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        message: 'Application created, but found no user with that ID',
      })
    }

    res.json('Created the application 🎉');
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
}
    

  

// Update a thought by its _id
export const updateThought = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      {_id:req.params.thoughtId}, 
      {$set:req.body},
       { new: true });
    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a thought by its _id
export const deleteThought = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
      return;
    }

    await User.updateMany({ thoughts: thought._id }, { $pull: { thoughts: thought._id } });

    res.json({ message: 'Thought deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a reaction to a thought
export const addReaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove a reaction by reactionId from a thought
export const removeReaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
      return;
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};
