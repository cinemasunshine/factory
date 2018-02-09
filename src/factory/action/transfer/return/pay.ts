/**
 * 返金アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import * as PayActionFactory from '../../../action/trade/pay';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は支払アクション
 * 分析利便性のためにorderNumberを追加
 */
export type IObject = PayActionFactory.IAction & {
    orderNumber: string;
};

export type IResult = any;

export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    result?: IResult;
    object: IObject;
}

export type IAction = ReturnActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
}): IAttributes {
    return ReturnActionFactory.createAttributes(params);
}
