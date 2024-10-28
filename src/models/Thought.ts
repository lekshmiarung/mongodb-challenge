import { Schema, model}  from 'mongoose';
import Reaction from './Reaction.js';



const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);







// Virtual to calculate the reaction count
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

export const Thought = model('Thought', ThoughtSchema);
export default Thought;
