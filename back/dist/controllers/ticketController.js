"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketController = void 0;
const ticket_1 = require("../models/ticket");
class TicketController {
    constructor() {
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield ticket_1.Ticket.find()
                .populate({ path: 'seance', populate: { path: 'cinema', populate: { path: "salles" } } })
                .populate({ path: 'seance', populate: { path: 'film' } }))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield ticket_1.Ticket.findById(req.params.id)
                .populate({ path: 'seance', populate: { path: 'cinema', populate: { path: "salles" } } })
                .populate({ path: 'seance', populate: { path: 'film' } }))
                .end();
            next();
        });
        this.findByIdAndImpress = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let ticket = yield ticket_1.Ticket.findById(req.params.id)
                .populate({ path: 'seance', populate: { path: 'cinema', populate: { path: "salles" } } })
                .populate({ path: 'seance', populate: { path: 'film' } });
            let texte = "Commande : " + ticket._id + "\n" +
                "Cinema : " + ticket.seance.cinema.nom + "\n" +
                "Film : " + ticket.seance.film.nom + "\n" +
                "Date début : " + ticket.seance.date.toLocaleString() + "\n" +
                "Date fin : " + (new Date(ticket.seance.date.getTime() + (ticket.seance.film.duree * 60000)).toLocaleString()) + "\n" +
                "Salle : " + ticket.seance.numeroSalle;
            res.status(200)
                .send(texte)
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield ticket_1.Ticket.create(req.body))
                .end();
            next();
        });
    }
}
exports.ticketController = Object.freeze(new TicketController());
//# sourceMappingURL=ticketController.js.map