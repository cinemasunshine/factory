import { actionType } from '@cinerino/factory';

import * as ActionFactory from '../../action';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<actionType.ReturnAction, TObject, TResult> {
    recipient: ActionFactory.IParticipant;
}
/**
 * 返却アクションインたーフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
