import * as cinerino from '@cinerino/factory';

import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';
import PaymentMethodType from '../../../paymentMethodType';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IAnyPaymentMethod<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IAnyPaymentMethod<T>;
export type IObject<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IObject<T>;
export type IResult<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IResult<T>;
export type IPurpose = cinerino.action.authorize.paymentMethod.any.IPurpose;

export interface IAttributes<T extends PaymentMethodType> extends AuthorizeActionFactory.IAttributes<IObject<T>, IResult<T>> {
    typeOf: ActionType.AuthorizeAction;
    object: IObject<T>;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}
/**
 * 汎用決済方法承認アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
