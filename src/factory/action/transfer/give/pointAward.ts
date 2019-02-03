import * as cinerino from '@cinerino/factory';

import { ObjectType as AuthorizePointAwardActionObjectType } from '../../../action/authorize/award/point';

export import ObjectType = AuthorizePointAwardActionObjectType;

export type IObject = cinerino.action.transfer.give.pointAward.IObject;
export type IResult = cinerino.action.transfer.give.pointAward.IResult;
export type IPurpose = cinerino.action.transfer.give.pointAward.IPurpose;
export type IPotentialActions = cinerino.action.transfer.give.pointAward.IPotentialActions;
export type IAttributes = cinerino.action.transfer.give.pointAward.IAttributes;

/**
 * ポイント付与アクションインターフェース
 */
export type IAction = cinerino.action.transfer.give.pointAward.IAction;
