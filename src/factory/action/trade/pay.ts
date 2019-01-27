import * as cinerino from '@cinerino/factory';
import * as GMO from '@motionpicture/gmo-service';

import AccountType from '../../accountType';
import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import PriceCurrency from '../../priceCurrency';

export type IAgent = cinerino.action.trade.pay.IAgent;
export type IRecipient = cinerino.action.trade.pay.IRecipient;
export type IPurpose = IOrder;
export type TypeOfObject = cinerino.action.trade.pay.TypeOfObject;

export type ICommonPaymentMethod<T extends PaymentMethodType> = cinerino.action.trade.pay.ICommonPaymentMethod<T>;
export type IAccountPaymentMethod<T extends AccountType> = cinerino.action.trade.pay.IAccountPaymentMethod<T>;

/**
 * クレジットカード決済の場合のオブジェクトインターフェース
 */
export interface ICreditCardPaymentMethod extends ICommonPaymentMethod<PaymentMethodType.CreditCard> {
    price: number;
    priceCurrency: PriceCurrency;
    entryTranArgs?: GMO.services.credit.IEntryTranArgs;
    execTranArgs?: GMO.services.credit.IExecTranArgs;
}

/**
 * 決済対象の決済方法インターフェース
 */
export type IPaymentMethodObject<T> =
    T extends PaymentMethodType.Account ? IAccountPaymentMethod<AccountType> :
    T extends PaymentMethodType.CreditCard ? ICreditCardPaymentMethod :
    never;

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
