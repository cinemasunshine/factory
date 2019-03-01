import { action, actionType } from '@cinerino/factory';

export type IAgent = action.IParticipant;
export type IRecipient = action.IParticipant;

export type IObject = any;
export type IResult = any;
export type IPurpose = any;

export interface IAttributes<TObject, TResult> extends action.IAttributes<actionType.UseAction, TObject, TResult> {
    agent: IAgent;
    purpose?: IPurpose;
}
/**
 * 使用アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = action.IAction<TAttributes>;
