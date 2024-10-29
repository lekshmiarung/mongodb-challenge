
import mongoose, { Schema, Document } from 'mongoose';

// Define the User interface for TypeScript
interface IUser extends Document {
  username: string;
  email: string;
  thoughts: mongoose.Types.ObjectId[];  // Array of ObjectIds referencing Thought
  friends: mongoose.Types.ObjectId[]; 
    // Array of ObjectIds referencing User
    friendCount: number;  // Virtual that retrieves the length of the user's friends array
}

// User Schema definition
const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match a valid email address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'  // References the Thought model
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'  // Self-reference to User model menas that a user can be friends with other users
    }
  ]
},
{
  toJSON: {
    virtuals: true,
  },
  id: false
});

// Virtual to calculate friend count
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Export the User model
export const User = mongoose.model<IUser>('User', UserSchema);
 

export default User;
