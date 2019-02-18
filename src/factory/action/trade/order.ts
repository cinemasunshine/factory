import * as cinerino from '@cinerino/factory';

import * as ActionFactory from '../../action';
import { IAttributes as IConfirmReservationActionAttributes } from '../interact/confirm/reservation';
import { IAttributes as IGivePointAwardActionAttributes } from '../transfer/give/pointAward';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';
import { IAttributes as IPayActionAttributes } from './pay';

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
    confirmReservation?: IConfirmReservationActionAttributes<cinerino.service.webAPI.Identifier>[];
    /**
     * クレジットカード決済アクション
     */
    payCreditCard?: IPayActionAttributes<cinerino.paymentMethodType.CreditCard>[];
    /**
     * 口座決済実行アクションリスト
     */
    payAccount?: IPayActionAttributes<cinerino.paymentMethodType.Account>[];
    /**
     * ムビチケ決済アクション
     */
    payMovieTicket?: IPayActionAttributes<cinerino.paymentMethodType.MovieTicket>[];
    /**
     * ポイント付与アクション
     * 現時点で複数口座にポイントを付与することはないが、可能性もこめてリストで持っておく
     */
    givePointAward?: IGivePointAwardActionAttributes[];
}

export interface IAttributes extends ActionFactory.IAttributes<cinerino.actionType.OrderAction, IObject, IResult> {
    potentialActions?: IPotentialActions;
}

/**
 * 注文アクションインターフェース
 */
export type IAction = ActionFactory.IAction<IAttributes>;
