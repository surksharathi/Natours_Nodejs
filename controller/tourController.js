const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkId = (req, res, next, val) => {
  console.log(`checkid middleware runing and id is ${val}`);
  const id = req.params.id * 1;

  if (id > tours.length) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid Id '
    });
  }
  next();
};
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'fail',
      message: 'Name and price of tour are required '
    });
  }
};
//2) Handle Function of Tours
exports.getoneTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find(el => el.id === id);

  res.status(200).json({
    status: 'Success',
    data: {
      tour
    }
  });
};

exports.getAllTour = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'Success',
    requested: req.requestTime,
    result: tours.length,
    data: {
      tours
    }
  });
};

exports.createNewTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
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
};

exports.deleteTour = (req, res) => {
  // convert string id into integer;
  res.status(204).json({
    status: 'Success',
    data: null
  });
};

exports.updateTour = (req, res) => {
  // convert string id into integer;
  const id = req.params.id * 1;

  res.status(200).json({
    status: 'Success',
    data: '<updated Tour....>'
  });
};
