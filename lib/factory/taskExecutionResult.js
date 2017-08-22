"use strict";
/**
 * タスク実行結果ファクトリー
 *
 * @namespace factory/taskExecutionResult
 */
Object.defineProperty(exports, "__esModule", { value: true });
const objectId_1 = require("./objectId");
function create(args) {
    // todo validation
    return {
        id: (args.id === undefined) ? objectId_1.default().toString() : args.id,
        executedAt: args.executedAt,
        error: args.error
    };
}
exports.create = create;
