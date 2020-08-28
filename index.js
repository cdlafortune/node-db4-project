const server = require('./server.js');
const recipes = require('./api/recipe-router');

const PORT = process.env.PORT || 5000;

server.use('/recipes', recipes);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: 'Something went wrong.'
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});