"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCinemaRouting = void 0;
const cinemaController_1 = require("../controllers/cinemaController");
const setCinemaRouting = (app) => {
    const endpoint = 'cinemas';
    app.get(`/${endpoint}`, cinemaController_1.cinemaController.findAll);
    app.get(`/${endpoint}/:id`, cinemaController_1.cinemaController.findById);
    app.post(`/${endpoint}`, cinemaController_1.cinemaController.create);
    app.patch(`/${endpoint}/:id`, cinemaController_1.cinemaController.update);
    app.delete(`/${endpoint}/:id`, cinemaController_1.cinemaController.delete);
};
exports.setCinemaRouting = setCinemaRouting;
//# sourceMappingURL=cinemaRoutes.js.map