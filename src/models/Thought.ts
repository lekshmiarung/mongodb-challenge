import {Schema, model, Document } from 'mongoose';
import  Reaction  from './Reaction.js';


// Thought Interface
export interface IThought extends Document {
  thoughtText: string;
  createdAt: Date | string;
  username: string;
  // reactions` (These are like replies)
  // * Array of nested documents created with the `reactionSchema`
  reactions :typeof Reaction [];
  // `reactionCount` (Number of replies)
  reactionCount: number;
}


// Thought Schema
const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
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
      getters: true,
    },
    id: false,
  }
);

// Virtual for reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model<IThought>('Thought', thoughtSchema);
export default Thought;
   
