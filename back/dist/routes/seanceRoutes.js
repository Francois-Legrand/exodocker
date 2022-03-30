"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSeanceRouting = void 0;
const seanceController_1 = require("../controllers/seanceController");
const setSeanceRouting = (app) => {
    const endpoint = 'seances';
    app.get(`/${endpoint}`, seanceController_1.seanceController.findAll);
    app.get(`/${endpoint}/:id`, seanceController_1.seanceController.findById);
    app.get(`/${endpoint}/films/:idfilm/cinemas/:idcinema`, seanceController_1.seanceController.findByFilmAndCinemaId);
    app.post(`/${endpoint}`, seanceController_1.seanceController.create);
    app.patch(`/${endpoint}/:id`, seanceController_1.seanceController.update);
    app.delete(`/${endpoint}/:id`, seanceController_1.seanceController.delete);
};
exports.setSeanceRouting = setSeanceRouting;
//# sourceMappingURL=seanceRoutes.js.map