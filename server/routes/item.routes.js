const itemController = require('../controllers/item.controller');  //Import the code from Code Block 1

const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/healthcheck', itemController.healthcheck);
    app.get('/', authenticate, itemController.getAllItems);
    app.post('/', itemController.addNewItem);
    app.get('/:_id', authenticate, itemController.getItemById);
}
