import * as cinerino from '@cinerino/factory';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import PaymentMethodType from '../../paymentMethodType';
import { IAttributes as IUseMvtkActionAttributes } from '../consume/use/mvtk';
import { IAttributes as IPayActionAttributes } from '../trade/pay';
import { IAttributes as IGivePecorinoAwardActionAttributes } from '../transfer/give/pecorinoAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';

export type IAgent = cinerino.action.trade.order.IAgent;
export type IRecipient = cinerino.action.trade.order.IRecipient;
export type IObject = IOrder;
export type IResult = cinerino.action.trade.order.IResult;
export interface IPotentialActions {
    /**
     * 注文配送アクション
     */
    sendOrder: ISendOrderActionAttributes;
    /**
     * クレジットカード決済アクション
     */
    payCreditCard?: IPayActionAttributes<PaymentMethodType.CreditCard>;
    /**
     * 口座決済実行アクションリスト
     */
    payAccount: IPayActionAttributes<PaymentMethodType.Account>[];
    /**
     * ムビチケ使用アクション
     */
    useMvtk?: IUseMvtkActionAttributes;
    /**
     * Pecorino付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePecorinoAward: IGivePecorinoAwardActionAttributes[];
}
export interface IAttributes extends ActionFactory.IAttributes<ActionType.OrderAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
}
/**
 * 注文アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
