// Expanded quote library — 50 curated quotes
const QUOTES = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    mood: "motivation"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    mood: "motivation"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    mood: "joy"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    mood: "motivation"
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    mood: "wisdom"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates",
    mood: "reflection"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    mood: "wisdom"
  },
  {
    text: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.",
    author: "Ambrose Redmoon",
    mood: "motivation"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    mood: "wisdom"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    mood: "motivation"
  },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    mood: "motivation"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    mood: "motivation"
  },
  {
    text: "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African Proverb",
    mood: "wisdom"
  },
  {
    text: "Nothing in life is to be feared, it is only to be understood.",
    author: "Marie Curie",
    mood: "wisdom"
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    mood: "reflection"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    mood: "motivation"
  },
  {
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
    mood: "joy"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    mood: "motivation"
  },
  {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
    mood: "wisdom"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    mood: "motivation"
  },
  {
    text: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
    mood: "reflection"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    mood: "motivation"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    mood: "reflection"
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey",
    mood: "joy"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    mood: "reflection"
  },
  {
    text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
    mood: "joy"
  },
  {
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
    mood: "joy"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    mood: "motivation"
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
    mood: "motivation"
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    mood: "wisdom"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
    mood: "motivation"
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    mood: "wisdom"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    mood: "motivation"
  },
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
    mood: "motivation"
  },
  {
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    mood: "motivation"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    mood: "motivation"
  },
  {
    text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
    mood: "reflection"
  },
  {
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    mood: "reflection"
  },
  {
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    mood: "motivation"
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    mood: "wisdom"
  },
  {
    text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
    author: "Fyodor Dostoevsky",
    mood: "reflection"
  },
  {
    text: "Walk as if you are kissing the Earth with your feet.",
    author: "Thich Nhat Hanh",
    mood: "calm"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    mood: "joy"
  },
  {
    text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    author: "Albert Camus",
    mood: "reflection"
  },
  {
    text: "Let us all hope that the dark clouds of racial prejudice will soon pass away and that in some not too distant tomorrow the radiant stars of love and brotherhood will shine over our great nation.",
    author: "Mary McLeod Bethune",
    mood: "reflection"
  },
  {
    text: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    author: "Jane Goodall",
    mood: "motivation"
  },
  {
    text: "The present is theirs; the future, for which I really worked, is mine.",
    author: "Nikola Tesla",
    mood: "motivation"
  },
  {
    text: "Life is an unfoldment, and the further we travel the more truth we can comprehend.",
    author: "Hypatia",
    mood: "wisdom"
  },
  {
    text: "If you surrender to the air, you can ride it.",
    author: "Toni Morrison",
    mood: "reflection"
  },
  {
    text: "The only thing that makes life possible is permanent, intolerable uncertainty.",
    author: "Ursula K. Le Guin",
    mood: "reflection"
  }
];
