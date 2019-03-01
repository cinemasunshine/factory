import * as cinerino from '@cinerino/factory';

import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';

export import IAgent = cinerino.action.trade.order.IAgent;
export import IRecipient = cinerino.action.trade.order.IRecipient;
export import IObject = cinerino.order.IOrder;
export import IResult = cinerino.action.trade.order.IResult;

export interface IPotentialActions {
    /**
     * 注文配送アクション
     */
    sendOrder?: ISendOrderActionAttributes;
    /**
     * 予約確定アクション
     */
    confirmReservation?: cinerino.action.interact.confirm.reservation.IAttributes<cinerino.service.webAPI.Identifier>[];
    /**
     * クレジットカード決済アクション
     */
    payCreditCard?: cinerino.action.trade.pay.IAttributes<cinerino.paymentMethodType.CreditCard>[];
    /**
     * 口座決済実行アクションリスト
     */
    payAccount?: cinerino.action.trade.pay.IAttributes<cinerino.paymentMethodType.Account>[];
    /**
     * ムビチケ決済アクション
     */
    payMovieTicket?: cinerino.action.trade.pay.IAttributes<cinerino.paymentMethodType.MovieTicket>[];
    /**
     * ポイント付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePointAward?: cinerino.action.transfer.give.pointAward.IAttributes[];
}

export interface IAttributes extends cinerino.action.IAttributes<cinerino.actionType.OrderAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * 注文アクションインターフェース
 */
export type IAction = cinerino.action.IAction<IAttributes>;
