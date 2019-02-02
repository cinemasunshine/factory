import * as cinerino from '@cinerino/factory';

import AccountType from '../../accountType';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';

export type IAgent = cinerino.action.trade.pay.IAgent;
export type IRecipient = cinerino.action.trade.pay.IRecipient;
export type IPurpose = IOrder;
export type TypeOfObject = cinerino.action.trade.pay.TypeOfObject;
export type ICommonPaymentMethod<T extends PaymentMethodType> = cinerino.action.trade.pay.ICommonPaymentMethod<T>;
export type IAccountPaymentMethod<T extends AccountType> = cinerino.action.trade.pay.IAccountPaymentMethod<T>;
export type ICreditCardPaymentMethod = cinerino.action.trade.pay.ICreditCardPaymentMethod;
export type IPaymentMethodObject<T> = cinerino.action.trade.pay.IPaymentMethodObject<T>;
export type IObject<T extends PaymentMethodType> = IPaymentMethodObject<T>[];
export type ICreditCardResult = cinerino.action.trade.pay.ICreditCardResult;
export type IResult<T> = cinerino.action.trade.pay.IResult<T>;

export interface IAttributes<T extends PaymentMethodType> extends ActionFactory.IAttributes<ActionType.PayAction, IObject<T>, IResult<T>> {
    purpose: IPurpose;
}

/**
 * 支払アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = ActionFactory.IAction<IAttributes<T>>;
