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
exports.getShedule = void 0;
const database_1 = require("../database");
const getShedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield database_1.startConnection();
    const getShedule = yield conn.query(`SELECT * FROM shedule
                      WHERE day < 6 AND  
	                          hour >= 6 AND
                              hour <= 20 OR
                              (day = 6 AND 
                               hour >= 8 AND
                               hour < 12)`);
    return res.json(getShedule[0]);
});
exports.getShedule = getShedule;
//# sourceMappingURL=index.controller.js.map