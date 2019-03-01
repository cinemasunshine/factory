import * as cinerino from '@cinerino/factory';

import { IProgramMembership } from '../../../programMembership';

export type IAgent = cinerino.action.IParticipant;
export type IRecipient = cinerino.action.IParticipant;
/**
 * 承認アクション結果
 */
export interface IResult {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: cinerino.priceCurrency;
}
/**
 * 承認アクション対象
 */
export type IObject = cinerino.order.IAcceptedOffer<IProgramMembership>;

export interface IPurpose {
    typeOf: cinerino.transactionType.PlaceOrder;
    id: string;
}

/**
 * authorize action error interface
 */
export type IError = any;
/**
 * 会員プログラムオファー承認アクションインターフェース
 */
export interface IAttributes extends cinerino.action.authorize.IAttributes<IObject, IResult> {
    typeOf: cinerino.actionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}

export type IAction = cinerino.action.IAction<IAttributes>;
