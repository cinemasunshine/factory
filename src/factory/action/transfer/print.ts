/**
 * 印刷アクションファクトリー
 * @namespace action.transfer.print
 */

import * as ActionFactory from '../../action';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<TObject, TResult> {
    result?: IResult;
    object: IObject;
}

export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
}): IAttributes<IObject, IResult> {
    return {
        typeOf: ActionFactory.ActionType.PrintAction,
        result: params.result,
        object: params.object,
        agent: params.agent
    };
}
