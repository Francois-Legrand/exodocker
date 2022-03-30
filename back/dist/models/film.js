"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Film = exports.FilmDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class FilmDoc extends mongoose_1.default.Document {
}
exports.FilmDoc = FilmDoc;
const filmSchema = new mongoose_1.default.Schema({
    nom: {
        type: String
    },
    duree: {
        //Exprimé en nombre de minutes
        type: Number
    },
    imgUrl: {
        type: String
    }
});
exports.Film = mongoose_1.default.model("Film", filmSchema);
//# sourceMappingURL=film.js.map