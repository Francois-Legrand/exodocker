"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSalleRouting = void 0;
const salleController_1 = require("../controllers/salleController");
const setSalleRouting = (app) => {
    const endpoint = 'salles';
    app.get(`/${endpoint}`, salleController_1.salleController.findAll);
    app.get(`/${endpoint}/:id`, salleController_1.salleController.findById);
    app.post(`/${endpoint}`, salleController_1.salleController.create);
    app.patch(`/${endpoint}/:id`, salleController_1.salleController.update);
    app.delete(`/${endpoint}/:id`, salleController_1.salleController.delete);
};
exports.setSalleRouting = setSalleRouting;
//# sourceMappingURL=salleRoutes.js.map