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
exports.notFound = exports.deleteMark = exports.updateMark = exports.createMark = exports.getMarks = exports.getMark = void 0;
const database_1 = require("../database");
const getMark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const conn = yield database_1.startConnection();
    const query = yield conn.query('SELECT * FROM mark WHERE id = ?', [id]);
    return res.json(query[0]);
});
exports.getMark = getMark;
const getMarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield database_1.startConnection();
    const query = yield conn.query('SELECT * FROM mark');
    return res.json(query[0]);
});
exports.getMarks = getMarks;
const createMark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const conn = yield database_1.startConnection();
    const query = yield conn.query('INSERT INTO mark SET ?', [data]);
    return res.json({ message: 'mark created', data });
});
exports.createMark = createMark;
const updateMark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    const conn = yield database_1.startConnection();
    const query = yield conn.query('UPDATE mark SET ? WHERE id = ?', [data, id]);
    return res.json({ message: 'mark update', data });
});
exports.updateMark = updateMark;
const deleteMark = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const conn = yield database_1.startConnection();
    const query = yield conn.query('DELETE FROM mark WHERE id = ?', [id]);
    return res.json({ message: `Delete mark with id = ${id}` });
});
exports.deleteMark = deleteMark;
const notFound = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json({ message: 'id no provided' });
});
exports.notFound = notFound;
//# sourceMappingURL=mark.controller.js.map