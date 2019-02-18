import { order, paymentMethodType } from '@cinerino/factory';

import * as ActionFactory from '../../../action';
import { IAttributes as IRefundActionAttributes } from '../../trade/refund';
import * as ReturnActionFactory from '../return';
import * as ReturnPointAwardActionFactory from './pointAward';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 返却対象は注文
 */
export type IObject = order.IOrder;
export type IResult = any;
export interface IPotentialActions {
    /**
     * クレジットカード返金アクション
     */
    refundCreditCard: IRefundActionAttributes<paymentMethodType.CreditCard>[];
    /**
     * 口座返金アクション
     */
    refundAccount: IRefundActionAttributes<paymentMethodType.Account>[];
    /**
     * ムビチケ着券取消アクション
     */
    refundMovieTicket: IRefundActionAttributes<paymentMethodType.MovieTicket>[];
    /**
     * ポイントインセンティブ返却アクション
     */
    returnPointAward: ReturnPointAwardActionFactory.IAttributes[];
}
export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 注文返品アクションインターフェース
 */
export type IAction = ReturnActionFactory.IAction<IAttributes>;
