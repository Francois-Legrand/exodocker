"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cinema = exports.CinemaDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class CinemaDoc extends mongoose_1.default.Document {
}
exports.CinemaDoc = CinemaDoc;
const cinemaSchema = new mongoose_1.default.Schema({
    nom: {
        type: String
    },
    salles: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Salle'
        }]
});
exports.Cinema = mongoose_1.default.model("Cinema", cinemaSchema);
//# sourceMappingURL=cinema.js.map