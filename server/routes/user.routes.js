const UserController = require('../controllers/user.controller');

module.exports = (app) => {
	app.post("/register", UserController.register);
	app.post("/login", UserController.login);
	app.get("/logout", UserController.logout);
}

