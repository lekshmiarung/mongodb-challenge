 import { Schema, model, Document, ObjectId } from 'mongoose';



// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)
 interface IUser extends Document {
    username: string;
    email: string;
    thoughts: ObjectId[];
    friends: ObjectId[];
}
  //SCHEMA
  const userSchema = new Schema<IUser>({
      username: {
          type: String,
          required: true,
          unique: true,
          trim: true
      },
      email: {
          type: String,
          required: true,
          unique: true,
          match: [/.+@.+\..+/, 'Please enter a valid email address']
      },
      thoughts: [
          {
              type: Schema.Types.ObjectId,
              ref: 'Thought'
          }
      ],
      friends: [
          {
              type: Schema.Types.ObjectId,
              ref: 'User'
          }
      ]
  },
  {
      toJSON: {
          virtuals: true
      },
      id: false
  }
  );


 //// Virtuals for friend count
  userSchema.virtual('friendCount').get(function() {
      return this.friends.length;
  });
  
  // create the User model using the UserSchema
  const User = model<IUser>('User', userSchema);

  export default User;
