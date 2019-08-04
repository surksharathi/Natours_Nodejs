const Express = require('express');

const app = Express();
const port = 3000;

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Welcome to the node course world', app: 'Naturesh' });
});
app.listen(port, () => {
  console.log(`App is running on port ${port}.......`);
});
