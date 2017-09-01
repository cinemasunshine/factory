"use strict";
/**
 * mvtk authorization factory
 * ムビチケ着券情報ファクトリー
 * @namespace factory/authorization/mvtk
 */
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("underscore");
const argument_1 = require("../../error/argument");
const authorizationGroup_1 = require("../authorizationGroup");
function create(args) {
    if (!_.isNumber(args.price))
        throw new argument_1.default('price', 'price should be number');
    if (args.price <= 0)
        throw new argument_1.default('price', 'price should be greater than 0');
    return {
        id: args.id,
        group: authorizationGroup_1.default.MVTK,
        price: args.price,
        result: args.result,
        object: args.object
    };
}
exports.create = create;
