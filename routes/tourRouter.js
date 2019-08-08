const Express = require('express');
const tourController = require('./../controller/tourController');
const router = Express.Router();

router.param('id', tourController.checkId);
router
  .route('/')
  .get(tourController.getAllTour)
  .post(tourController.checkBody, tourController.createNewTour);
router
  .route('/:id')
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour)
  .get(tourController.getoneTour);

module.exports = router;
