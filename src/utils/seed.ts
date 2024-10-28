import connection from '../config/connection.js';
//import reactionSchema from '../models/Reaction.js';
import { User, Thought } from '../models/index.js';

import { randomUsers,
   generateRandomThought ,
  } from '../utils/data.js';

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db?.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck?.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db?.listCollections({ name: 'users' }).toArray();
  if (userCheck?.length) {
    await connection.dropCollection('users');
  }

  const users = randomUsers();
  const thoughts = [];
  for (let i=0; i<users.length; i++) {
    thoughts.push(generateRandomThought(users[i].id));

  }
  const friends = [];
  for (let i=0; i<users.length; i++) {
    friends.push(generateRandomThought(users[i].id));

  }
  


  // Insert the users and thoughts into the database
  console.log(users);
  console.log(thoughts);


  await User.insertMany(users);
  await Thought.insertMany(thoughts);


//insert the friends into the database
await User.insertMany(friends);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);

  console.table(thoughts);
  console.table(friends);
 
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
