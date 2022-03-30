"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = exports.TicketDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class TicketDoc extends mongoose_1.default.Document {
}
exports.TicketDoc = TicketDoc;
const ticketSchema = new mongoose_1.default.Schema({
    seance: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Seance"
    }
});
exports.Ticket = mongoose_1.default.model("Ticket", ticketSchema);
//# sourceMappingURL=ticket.js.map