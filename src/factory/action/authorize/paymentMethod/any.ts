import * as cinerino from '@cinerino/factory';

export import IAgent = cinerino.action.IParticipant;
export import IRecipient = cinerino.action.IParticipant;
export import IAnyPaymentMethod = cinerino.action.authorize.paymentMethod.any.IAnyPaymentMethod;
export import IObject = cinerino.action.authorize.paymentMethod.any.IObject;
export import IResult = cinerino.action.authorize.paymentMethod.any.IResult;
export import IPurpose = cinerino.action.authorize.paymentMethod.any.IPurpose;
export import IAttributes = cinerino.action.authorize.paymentMethod.any.IAttributes;

/**
 * 汎用決済方法承認アクションインターフェース
 */
export import IAction = cinerino.action.authorize.paymentMethod.any.IAction;
