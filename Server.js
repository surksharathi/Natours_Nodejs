const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection sucessfully');
  })
  .catch(error => {
    console.log('Error occur while connecting ');
    console.log(error);
  });
const app = require('./app');
console.log(process.env);
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}.......`);
});
