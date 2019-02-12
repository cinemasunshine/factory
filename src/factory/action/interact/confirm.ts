import { actionType } from '@cinerino/factory';

import * as ActionFactory from '../../action';
import { IOrder } from '../../order';

export type IAgent = ActionFactory.IParticipant;
export type IObject = any;
export type IPurpose = IOrder;
export type IResult = any;
// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}
export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<actionType.ConfirmAction, TObject, TResult> {
    potentialActions?: IPotentialActions;
    purpose: IPurpose;
}
/**
 * 確定アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;
