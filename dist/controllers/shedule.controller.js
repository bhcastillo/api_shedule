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
exports.Shedule = void 0;
const database_1 = require("../database");
class Shedule {
    constructor() {
        this.orderSucess = [];
        this.clearShedule = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.startConnection();
            yield conn.query('TRUNCATE shedule');
            yield conn.query(`INSERT INTO shedule (id,day,hour,assigned) VALUES
    (1, 1, 1, 0),
    (2, 1, 2, 0),
    (3, 1, 3, 0),
    (4, 1, 4, 0),
    (5, 1, 5, 0),
    (6, 1, 6, 0),
    (7, 1, 7, 0),
    (8, 1, 8, 0),
    (9, 1, 9, 0),
    (10, 1, 10, 0),
    (11, 1, 11, 0),
    (12, 1, 12, 0),
    (13, 1, 13, 0),
    (14, 1, 14, 0),
    (15, 1, 15, 0),
    (16, 1, 16, 0),
    (17, 1, 17, 0),
    (18, 1, 18, 0),
    (19, 1, 19, 0),
    (20, 1, 20, 0),
    (21, 1, 21, 0),
    (22, 1, 22, 0),
    (23, 1, 23, 0),
    (24, 1, 24, 0),

    (25, 2, 1, 0),
    (26, 2, 2, 0),
    (27, 2, 3, 0),
    (28, 2, 4, 0),
    (29, 2, 5, 0),
    (30, 2, 6, 0),
    (31, 2, 7, 0),
    (32, 2, 8, 0),
    (33, 2, 9, 0),
    (34, 2, 10, 0),
    (35, 2, 11, 0),
    (36, 2, 12, 0),
    (37, 2, 13, 0),
    (38, 2, 14, 0),
    (39, 2, 15, 0),
    (40, 2, 16, 0),
    (41, 2, 17, 0),
    (42, 2, 18, 0),
    (43, 2, 19, 0),
    (44, 2, 20, 0),
    (45, 2, 21, 0),
    (46, 2, 22, 0),
    (47, 2, 23, 0),
    (48, 2, 24, 0),

    (49, 3, 1, 0),
    (50, 3, 2, 0),
    (51, 3, 3, 0),
    (52, 3, 4, 0),
    (53, 3, 5, 0),
    (54, 3, 6, 0),
    (55, 3, 7, 0),
    (56, 3, 8, 0),
    (57, 3, 9, 0),
    (58, 3, 10, 0),
    (59, 3, 11, 0),
    (60, 3, 12, 0),
    (61, 3, 13, 0),
    (62, 3, 14, 0),
    (63, 3, 15, 0),
    (64, 3, 16, 0),
    (65, 3, 17, 0),
    (66, 3, 18, 0),
    (67, 3, 19, 0),
    (68, 3, 20, 0),
    (69, 3, 21, 0),
    (70, 3, 22, 0),
    (71, 3, 23, 0),
    (72, 3, 24, 0),

    (73, 4, 1, 0),
    (74, 4, 2, 0),
    (75, 4, 3, 0),
    (76, 4, 4, 0),
    (77, 4, 5, 0),
    (78, 4, 6, 0),
    (79, 4, 7, 0),
    (80, 4, 8, 0),
    (81, 4, 9, 0),
    (82, 4, 10, 0),
    (83, 4, 11, 0),
    (84, 4, 12, 0),
    (85, 4, 13, 0),
    (86, 4, 14, 0),
    (87, 4, 15, 0),
    (88, 4, 16, 0),
    (89, 4, 17, 0),
    (90, 4, 18, 0),
    (91, 4, 19, 0),
    (92, 4, 20, 0),
    (93, 4, 21, 0),
    (94, 4, 22, 0),
    (95, 4, 23, 0),
    (96, 4, 24, 0),

    (97, 5, 1, 0),
    (98, 5, 2, 0),
    (99, 5, 3, 0),
    (100, 5, 4, 0),
    (101, 5, 5, 0),
    (102, 5, 6, 0),
    (103, 5, 7, 0),
    (104, 5, 8, 0),
    (105, 5, 9, 0),
    (106, 5, 10, 0),
    (107, 5, 11, 0),
    (108, 5, 12, 0),
    (109, 5, 13, 0),
    (110, 5, 14, 0),
    (111, 5, 15, 0),
    (112, 5, 16, 0),
    (113, 5, 17, 0),
    (114, 5, 18, 0),
    (115, 5, 19, 0),
    (116, 5, 20, 0),
    (117, 5, 21, 0),
    (118, 5, 22, 0),
    (119, 5, 23, 0),
    (120, 5, 24, 0),

    (121, 6, 1, 0),
    (122, 6, 2, 0),
    (123, 6, 3, 0),
    (124, 6, 4, 0),
    (125, 6, 5, 0),
    (126, 6, 6, 0),
    (127, 6, 7, 0),
    (128, 6, 8, 0),
    (129, 6, 9, 0),
    (130, 6, 10, 0),
    (131, 6, 11, 0),
    (132, 6, 12, 0),
    (133, 6, 13, 0),
    (134, 6, 14, 0),
    (135, 6, 15, 0),
    (136, 6, 16, 0),
    (137, 6, 17, 0),
    (138, 6, 18, 0),
    (139, 6, 19, 0),
    (140, 6, 20, 0),
    (141, 6, 21, 0),
    (142, 6, 22, 0),
    (143, 6, 23, 0),
    (144, 6, 24, 0),

    (145, 7, 1, 0),
    (146, 7, 2, 0),
    (147, 7, 3, 0),
    (148, 7, 4, 0),
    (149, 7, 5, 0),
    (150, 7, 6, 0),
    (151, 7, 7, 0),
    (152, 7, 8, 0),
    (153, 7, 9, 0),
    (154, 7, 10, 0),
    (155, 7, 11, 0),
    (156, 7, 12, 0),
    (157, 7, 13, 0),
    (158, 7, 14, 0),
    (159, 7, 15, 0),
    (160, 7, 16, 0),
    (161, 7, 17, 0),
    (162, 7, 18, 0),
    (163, 7, 19, 0),
    (164, 7, 20, 0),
    (165, 7, 21, 0),
    (166, 7, 22, 0),
    (167, 7, 23, 0),
    (168, 7, 24, 0);
`);
            res.status(200).json({ message: 'shedule reset' });
        });
        this.getShedule = (req, res) => __awaiter(this, void 0, void 0, function* () {
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
        this.generateShedule = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.startConnection();
            const getOrders = yield conn.query('Select * FROM _order');
            const getMark = yield conn.query('SELECT * FROM mark');
            const orders = [...getOrders[0]];
            const marks = [...getMark[0]];
            const getShedule = yield conn.query(`
      SELECT day, COUNT(assigned) AS hours 
      FROM shedule 
      WHERE (day < 6 AND hour >= 5 AND hour <= 20 OR 
            (day = 6 AND hour >= 8 AND hour < 12)) AND
            assigned = 0
      GROUP by day`);
            const shedule = [...getShedule[0]];
            let i = 0;
            this.orderSucess = [];
            orders.map((order) => {
                const mark = marks.find((e) => e.id === order.id_mark);
                this.resolveOrder(order, mark, shedule);
            });
            return res.status(200).json({ message: 'shedule generate', orders: this.agrupateForDay() });
        });
    }
    resolveOrder(order, mark, shedule) {
        const numberForAssigned = order.quantity * mark.construction_time;
        for (let dayCurrently = 1; dayCurrently <= 6; dayCurrently++) {
            if (numberForAssigned <= shedule[dayCurrently].hours) {
                this.orderSucess.push({ day: dayCurrently, id_mark: mark.id, name: mark.name, quantity: order.quantity });
                shedule[dayCurrently].hours = shedule[dayCurrently].hours - numberForAssigned;
                break;
            }
            if (shedule[dayCurrently].hours < mark.construction_time)
                continue;
            else {
                const limitQuantityDay = Math.round(shedule[dayCurrently].hours / mark.construction_time);
                if (!limitQuantityDay)
                    continue;
                this.orderSucess.push({ day: dayCurrently, id_mark: mark.id, name: mark.name, quantity: limitQuantityDay });
                shedule[dayCurrently].hours = shedule[dayCurrently].hours - limitQuantityDay;
                order.quantity = order.quantity - limitQuantityDay;
            }
        }
    }
    // async assingateShedule(orders: IOrder[], mark: IMark, hourForDay: any, limitQuantityDay?: number) {
    //   if (orders[0].quantity === 0) {
    //     orders.shift();
    //     return;
    //   }
    //   const data = { assigned: 1, id_order: orders[0].id }
    //   const conn = await startConnection();
    //   let index = 0;
    //   const quantityMax = limitQuantityDay ? limitQuantityDay : orders[0].quantity;
    //   for (let quantity = 0; quantity < quantityMax; quantity++) {
    //     for (let i = 0; i < mark.construction_time; i++) {
    //       await conn.query('UPDATE shedule SET ? WHERE id = ?', [data, hourForDay[index].id]).catch((err) => console.log("object"))
    //       index++;
    //     }
    //     orders[0].quantity--;
    //   }
    // }
    agrupateForDay() {
        let agrupateForDay = [[], [], [], [], [], []];
        let position = 0;
        this.orderSucess.map((order) => {
            position = order.day - 1;
            agrupateForDay[position].push({
                id_mark: order.id_mark,
                name: order.name,
                quantity: order.quantity
            });
            return order;
        });
        for (let i = position + 1; i < 6; i++) {
            agrupateForDay.pop();
        }
        return agrupateForDay;
    }
}
exports.Shedule = Shedule;
//# sourceMappingURL=shedule.controller.js.map