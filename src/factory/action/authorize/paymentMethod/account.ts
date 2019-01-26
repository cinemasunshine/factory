import * as cinerino from '@cinerino/factory';

import AccountType from '../../../accountType';

export type IPendingTransaction<T extends AccountType> = cinerino.action.authorize.paymentMethod.account.IPendingTransaction<T>;
export type IAccount<T extends AccountType> = cinerino.action.authorize.paymentMethod.account.IAccount<T>;
export type ITokenizedAccount = cinerino.action.authorize.paymentMethod.account.ITokenizedAccount;
export type IFromAccount<T extends AccountType> = cinerino.action.authorize.paymentMethod.account.IFromAccount<T>;

export type IObject<T extends AccountType> = cinerino.action.authorize.paymentMethod.account.IObject<T>;
export type IResult<T extends AccountType> = cinerino.action.authorize.paymentMethod.account.IResult<T> & {
    /**
     * 現時点で取引成立条件を満たしているかどうか確認時に利用しているが、そのうち廃止予定
     */
    price: number;
};
export type IError = cinerino.action.authorize.paymentMethod.account.IError;

export type IAttributes<T extends AccountType> = cinerino.action.authorize.paymentMethod.account.IAttributes<T>;
/**
 * 口座決済方法承認アクションインターフェース
 */
export type IAction<T extends AccountType> = cinerino.action.authorize.paymentMethod.account.IAction<T>;
