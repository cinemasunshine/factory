import * as cinerino from '@cinerino/factory';

export type IAgent = cinerino.action.IParticipant;
export type IRecipient = cinerino.action.IParticipant;
export type IObject = any;
export type IResult = any;
export type IPotentialActions = any;
export type IPurpose = any;

export interface IAttributes<TObject, TResult> extends cinerino.action.IAttributes<cinerino.actionType.SendAction, TObject, TResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
    purpose?: IPurpose;
}
/**
 * 送信(配送)アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = cinerino.action.IAction<TAttributes>;
