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
exports.createOrder = void 0;
const database_1 = require("../database");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let quantity = 0;
    const data = req.body;
    data.map((d) => quantity = d.quantity + quantity);
    if (quantity < 1)
        return res.status(400).json({ message: 'minimun 1 car' });
    if (quantity > 10)
        return res.status(400).json({ message: 'maximum 10 car' });
    const conn = yield database_1.startConnection();
    data.map((order) => __awaiter(void 0, void 0, void 0, function* () { return yield conn.query('INSERT INTO _order SET ?', [order]); }));
    return res.status(201).json({ message: 'Created order', data });
});
exports.createOrder = createOrder;
//# sourceMappingURL=orders.controller.js.map