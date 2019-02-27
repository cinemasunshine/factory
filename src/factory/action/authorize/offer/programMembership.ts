import { actionType, order, priceCurrency, transactionType } from '@cinerino/factory';

import * as ActionFactory from '../../../action';
import { IProgramMembership } from '../../../programMembership';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;
/**
 * 承認アクション結果
 */
export interface IResult {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: priceCurrency;
}
/**
 * 承認アクション対象
 */
export type IObject = order.IAcceptedOffer<IProgramMembership>;

export interface IPurpose {
    typeOf: transactionType.PlaceOrder;
    id: string;
}

/**
 * authorize action error interface
 */
export type IError = any;
/**
 * 会員プログラムオファー承認アクションインターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: actionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
