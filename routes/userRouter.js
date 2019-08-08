const Express = require('express');
const userController = require('./../controller/userController');
const router = Express.Router();

router
  .route('/')
  .get(userController.getAllUser)
  .post(userController.createNewUser);
router
  .route('/:id')
  .get(userController.getoneUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = router;
