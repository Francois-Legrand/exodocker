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
exports.seanceController = void 0;
const cinema_1 = require("../models/cinema");
const film_1 = require("../models/film");
const seance_1 = require("../models/seance");
class SeanceController {
    constructor() {
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.find().populate("film").populate({ path: 'cinema', populate: { path: 'salles' } }))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.findById(req.params.id).populate("film").populate({ path: 'cinema', populate: { path: 'salles' } }))
                .end();
            next();
        });
        this.findByFilmAndCinemaId = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let cinema = yield cinema_1.Cinema.findById(req.params.idcinema);
            let film = yield film_1.Film.findById(req.params.idfilm);
            res.status(200)
                .send(yield seance_1.Seance.find({ cinema: cinema._id, film: film._id }).populate("film").populate({ path: 'cinema', populate: { path: 'salles' } }))
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield seance_1.Seance.create(req.body))
                .end();
            next();
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.findByIdAndUpdate(req.params.id, req.body))
                .end();
            next();
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield seance_1.Seance.findByIdAndRemove(req.params.id))
                .end();
            next();
        });
    }
}
exports.seanceController = Object.freeze(new SeanceController());
//# sourceMappingURL=seanceController.js.map