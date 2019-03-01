import { action, actionType } from '@cinerino/factory';

export type IAgent = action.IParticipant;
export type IRecipient = action.IParticipant;
export type IObject = any;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes<TObject, TResult> extends action.IAttributes<actionType.RegisterAction, TObject, TResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 登録アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = action.IAction<TAttributes>;
