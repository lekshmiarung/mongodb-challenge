import { faker } from '@faker-js/faker';



const users = [
  { id: "1", username: "John Doe", email: "john@example.com", friends:[], thoughts: [] },
  { id: "2", username: "John James", email: "james@example.com",friends:[], thoughts: [] },
  { id: "3", username: "Jack", email: "jack@example.com", friends:[], thoughts: [] },
  { id: "4", username: "Smith", email: "smith@example.com", friends:[], thoughts: [] },
  { id: "5", username: "Liza", email: "liza@example.com" ,  friends:[]},
];

const thoughts= [
  { thoughtText: "This is a thought!", username: "John Doe" },
  { thoughtText: "This is another thought!", username: "John James" },
  { thoughtText: "This is a third thought!", username: "Jack" },
  { thoughtText: "This is a fourth thought!", username: "Smith" },
  { thoughtText: "This is a fifth thought!", username: "Liza" },
];

const reactions = [
  { reactionBody: "😆", username:'john Doe'},
  {  reactionBody: "❤️",  username:'john James'},
  {reactionBody: "🚀",   username:'jaaack'},
];

  
const getRandomArrayElement = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

//get a random user
const randomUsers = () => {
  return users;
}









//Function to generate random thoughts that we can add to the database. Includes reaction data.
const generateRandomThought = (userId: string) => {
  // Get a random user
  const user = users.find((user) => user.id === userId);
  // Create a new thought
  const thought = {
    id: String(thoughts.length + 1),
    thoughtText: faker.lorem.sentence(),
    username: user?.username,
    createdAt: faker.date.recent(),
  };
  thoughts.push(thought as any);

// Create the reactions that will be added to each thought
  // Add reactions to the thought
  const reactionCount = Math.floor(Math.random() * 4);
  for (let i = 0; i < reactionCount; i++) {
    const reaction = {
      id: String(reactions.length + 1),
      reactionBody: getRandomArrayElement(["😆", "❤️", "🚀", "💯"]),
      thoughtId: thought.id,
      username: getRandomArrayElement(users).username,
    };
    reactions.push(reaction);
  }
  return thought;
};

// Generate random thoughts
for (let i = 0; i < 5; i++) {
  generateRandomThought(getRandomArrayElement(users).id);
}


export { getRandomArrayElement, randomUsers, generateRandomThought };


