"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seance = exports.SeanceDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class SeanceDoc extends mongoose_1.default.Document {
}
exports.SeanceDoc = SeanceDoc;
const seanceSchema = new mongoose_1.default.Schema({
    date: {
        type: Date
    },
    film: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Film'
    },
    cinema: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Cinema'
    },
    numeroSalle: {
        type: Number
    }
});
exports.Seance = mongoose_1.default.model("Seance", seanceSchema);
//# sourceMappingURL=seance.js.map