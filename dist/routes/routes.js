"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mark_controller_1 = require("../controllers/mark.controller");
const shedule_controller_1 = require("../controllers/shedule.controller");
const router = express_1.Router();
router.get('/shedule', shedule_controller_1.getShedule);
router.get('/mark', mark_controller_1.notFound);
router.get('/mark/:id', mark_controller_1.getMark);
router.get('/marks', mark_controller_1.getMarks);
router.post('/mark', mark_controller_1.createMark);
router.put('/mark/:id', mark_controller_1.updateMark);
router.delete('/mark/:id', mark_controller_1.deleteMark);
exports.default = router;
//# sourceMappingURL=routes.js.map