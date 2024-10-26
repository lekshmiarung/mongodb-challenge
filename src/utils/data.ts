const names = [
  'John',
  'Jane',
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Frank',
  'Grace',
  'Heidi'
];


// create thought text

const ThoughtDescription = [
  'This is a thought about a decision tracker',
  'This is a thought about finding my phone',
  'This is a thought about learning piano',
  'This is a thought about a starbase defender',
  'This is a thought about a tower defense',
  'This is a thought about a monopoly money manager',
  'This is a thought about movie trailers',
  'This is a thought about hello world',
  'This is a thought about a stupid social media app',
  'This is a thought about notes',
  'This is a thought about messages',
  'This is a thought about email',
  'This is a thought about a compass',
  'This is a thought about Firefox',
  'This is a thought about a running app',
  'This is a thought about a cooking app',
  'This is a thought about poker',
  'This is a thought about deliveries',
];


const possibleReactions = [
  '👍',
  '👎',
  '❤️',
  '😂',
  '😯',
  '😢',
  '😡',
];

  

// Get a random item given an array
const getRandomArrItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random applications that we can add to the database. Includes application tags.
const getRandomThoughts = (int: number) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(ThoughtDescription),
      buildSuccess: Math.random() < 0.5,
      tags: [...Array(Math.floor(Math.random() * 3) + 1)].map(() =>
        getRandomArrItem(ThoughtDescription)
      ),
    });
  }
  return results;
};

//create a function to generate random reactions
const getReactions = (int: number) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
export { getRandomName, getRandomThoughts, getReactions };
