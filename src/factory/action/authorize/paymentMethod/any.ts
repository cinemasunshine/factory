import * as cinerino from '@cinerino/factory';

import PaymentMethodType from '../../../paymentMethodType';

export type IAgent = cinerino.action.IParticipant;
export type IRecipient = cinerino.action.IParticipant;

export type IAnyPaymentMethod<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IAnyPaymentMethod<T>;
export type IObject<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IObject<T>;
export type IResult<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IResult<T>;
export type IPurpose = cinerino.action.authorize.paymentMethod.any.IPurpose;
export type IAttributes<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IAttributes<T>;
/**
 * 汎用決済方法承認アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = cinerino.action.authorize.paymentMethod.any.IAction<T>;
