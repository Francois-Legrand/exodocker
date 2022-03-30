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
exports.filmController = void 0;
const cinema_1 = require("../models/cinema");
const film_1 = require("../models/film");
const seance_1 = require("../models/seance");
class FilmController {
    constructor() {
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield film_1.Film.find())
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield film_1.Film.findById(req.params.id))
                .end();
            next();
        });
        this.findDistinctByCinema = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let cinema = yield cinema_1.Cinema.findById(req.params.id);
            let filmIds = yield seance_1.Seance.find({ cinema: cinema }).distinct("film").populate("film");
            let films = yield film_1.Film.find({ _id: { $in: filmIds } });
            res.status(200)
                .send(films)
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield film_1.Film.create(req.body))
                .end();
            next();
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield film_1.Film.findByIdAndUpdate(req.params.id, req.body))
                .end();
            next();
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield film_1.Film.findByIdAndRemove(req.params.id))
                .end();
            next();
        });
    }
}
exports.filmController = Object.freeze(new FilmController());
//# sourceMappingURL=filmController.js.map