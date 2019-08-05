const Express = require('express');
const fs = require('fs');
const app = Express();
const port = 3000;

app.use(Express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'Success',
    result: tours.length,
    data: {
      tours
    }
  });
});

app.post('/api/v1/tours', (req, res) => {
  // console.log(tours);
  const newId = tours[tours.length - 1].id + 1;
  console.log(tours[tours.length - 1].id + 1);
  const newTours = Object.assign({ id: newId }, req.body);
  tours.push(newTours);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTours
        }
      });
    }
  );
  console.log('Done');
});
app.listen(port, () => {
  console.log(`App is running on port ${port}.......`);
});
