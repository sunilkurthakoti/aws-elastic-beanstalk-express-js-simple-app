// 🌟 Welcome to Sunil's Express Party! 🌟

// 1. Import the Express framework 🚀
const express = require('express');

// 2. Create an Express application 🎉
const app = express();

// 3. Define the port for your app to run on 🌟
const port = 8080;

// 4. Home route 🏠
app.get('/', (req, res) => {
  res.send(`
    <h1>👋 Hello, World!</h1>
    <p>Welcome to Sunil's super cool Express app! 🚀</p>
    <p>Check out these pages:</p>
    <ul>
      <li><a href="/about">About Sunil</a></li>
      <li><a href="/fun-facts">Fun Facts</a></li>
    </ul>
  `);
});

// 5. About route 📚
app.get('/about', (req, res) => {
  res.send(`
    <h1>🌟 About Sunil 🌟</h1>
    <p>Hey there! I'm Sunil, your friendly coder and Express enthusiast. 🎉</p>
    <p>Fun fact: I love building awesome projects with Express.js!</p>
    <p><a href="/">Go back to Home</a></p>
  `);
});

// 6. Fun Facts route 🧠
app.get('/fun-facts', (req, res) => {
  const facts = [
    'Express.js is minimalist and unopinionated! 🧘',
    'It was released in 2010! 📜',
    'Over 20% of the top 10,000 websites use Express.js! 🌐',
    'You can use it to build APIs, web apps, and more! 🛠️',
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.send(`
    <h1>🤩 Fun Facts About Express.js 🤩</h1>
    <p>${randomFact}</p>
    <p>Powered by Sunil's Express server! 🚀</p>
    <p><a href="/">Go back to Home</a></p>
  `);
});

// 7. Catch-all for unknown routes 🤷‍♂️
app.use((req, res) => {
  res.status(404).send(`
    <h1>😢 404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist. 🚫</p>
    <p><a href="/">Go back to Sunil's Home</a></p>
  `);
});

// 8. Start the server and let the magic happen 🎶
app.listen(port, () => {
  console.log(`🎈 Sunil's App is running at: http://localhost:${port} 🎈`);
});
