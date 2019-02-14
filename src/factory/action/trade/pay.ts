import * as cinerino from '@cinerino/factory';

import PaymentMethodType from '../../paymentMethodType';

export type IAgent = cinerino.action.trade.pay.IAgent;
export type IRecipient = cinerino.action.trade.pay.IRecipient;
export type IPurpose = cinerino.action.trade.pay.IPurpose;
export type TypeOfObject = cinerino.action.trade.pay.TypeOfObject;
export type ICommonPaymentMethod<T extends PaymentMethodType> = cinerino.action.trade.pay.ICommonPaymentMethod<T>;
export type IAccountPaymentMethod<T extends cinerino.accountType> = cinerino.action.trade.pay.IAccountPaymentMethod<T>;
export type ICreditCardPaymentMethod = cinerino.action.trade.pay.ICreditCardPaymentMethod;
export type IPaymentMethodObject<T> = cinerino.action.trade.pay.IPaymentMethodObject<T>;
export type IObject<T extends PaymentMethodType> = IPaymentMethodObject<T>[];
export type ICreditCardResult = cinerino.action.trade.pay.ICreditCardResult;
export type IResult<T> = cinerino.action.trade.pay.IResult<T>;
export type IAttributes<T extends PaymentMethodType> = cinerino.action.trade.pay.IAttributes<T>;

/**
 * 支払アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = cinerino.action.trade.pay.IAction<T>;
