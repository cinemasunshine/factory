"use strict";
/**
 * 座席予約承認資産移動ファクトリー
 *
 * @namespace factory/task/settleSeatReservation
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TaskFactory = require("../task");
const taskName_1 = require("../taskName");
function create(args) {
    return TaskFactory.create(Object.assign({}, args, { name: taskName_1.default.SettleSeatReservation }));
}
exports.create = create;
