import * as cinerino from '@cinerino/factory';

export type ICreditCard = cinerino.action.authorize.paymentMethod.creditCard.ICreditCard;
export type IObject = cinerino.action.authorize.paymentMethod.creditCard.IObject;
export type IResult = cinerino.action.authorize.paymentMethod.creditCard.IResult & {
    /**
     * @alias amount
     * 現時点で取引成立条件を満たしているかどうか確認時に利用しているが、そのうち廃止予定
     */
    price: number;
};
export type IError = cinerino.action.authorize.paymentMethod.creditCard.IError;
export type IAttributes = cinerino.action.authorize.paymentMethod.creditCard.IAttributes;
/**
 * クレジットカード決済方法承認アクションインターフェース
 */
export type IAction = cinerino.action.authorize.paymentMethod.creditCard.IAction;
