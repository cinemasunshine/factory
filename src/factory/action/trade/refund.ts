import * as cinerino from '@cinerino/factory';

import PaymentMethodType from '../../paymentMethodType';

export type IAgent = cinerino.action.trade.refund.IAgent;
export type IRecipient = cinerino.action.trade.refund.IRecipient;
export type IObject<T extends PaymentMethodType> = cinerino.action.trade.refund.IObject<T>;
export type IResult = cinerino.action.trade.refund.IResult;
export type IPotentialActions = cinerino.action.trade.refund.IPotentialActions;
export type IPurpose = cinerino.action.trade.refund.IPurpose;
export type IAttributes<T extends PaymentMethodType> = cinerino.action.trade.refund.IAttributes<T>;

/**
 * 返金アクションインターフェース
 */
export type IAction<T extends PaymentMethodType> = cinerino.action.trade.refund.IAction<T>;
