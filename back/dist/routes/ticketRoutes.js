"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTicketRouting = void 0;
const ticketController_1 = require("../controllers/ticketController");
const setTicketRouting = (app) => {
    const endpoint = 'tickets';
    app.get(`/${endpoint}`, ticketController_1.ticketController.findAll);
    app.get(`/${endpoint}/:id`, ticketController_1.ticketController.findById);
    app.get(`/${endpoint}/:id/impression`, ticketController_1.ticketController.findByIdAndImpress);
    app.post(`/${endpoint}`, ticketController_1.ticketController.create);
};
exports.setTicketRouting = setTicketRouting;
//# sourceMappingURL=ticketRoutes.js.map