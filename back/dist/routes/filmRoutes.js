"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFilmRouting = void 0;
const filmController_1 = require("../controllers/filmController");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const setFilmRouting = (app) => {
    const endpoint = 'films';
    app.get(`/${endpoint}`, filmController_1.filmController.findAll);
    app.get(`/${endpoint}/:id`, filmController_1.filmController.findById);
    app.get(`/${endpoint}/cinemas/:id`, filmController_1.filmController.findDistinctByCinema);
    app.post(`/${endpoint}`, jsonParser, filmController_1.filmController.create);
    app.patch(`/${endpoint}/:id`, jsonParser, filmController_1.filmController.update);
    app.delete(`/${endpoint}/:id`, filmController_1.filmController.delete);
};
exports.setFilmRouting = setFilmRouting;
//# sourceMappingURL=filmRoutes.js.map