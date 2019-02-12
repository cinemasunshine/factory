import * as cinerino from '@cinerino/factory';

export type IPendingTransaction<T extends cinerino.accountType> = cinerino.action.authorize.paymentMethod.account.IPendingTransaction<T>;
export type IAccount<T extends cinerino.accountType> = cinerino.action.authorize.paymentMethod.account.IAccount<T>;
export type ITokenizedAccount = cinerino.action.authorize.paymentMethod.account.ITokenizedAccount;
export type IFromAccount<T extends cinerino.accountType> = cinerino.action.authorize.paymentMethod.account.IFromAccount<T>;

export type IObject<T extends cinerino.accountType> = cinerino.action.authorize.paymentMethod.account.IObject<T>;
export type IResult<T extends cinerino.accountType> = cinerino.action.authorize.paymentMethod.account.IResult<T>;
export type IError = cinerino.action.authorize.paymentMethod.account.IError;

export type IAttributes<T extends cinerino.accountType> = cinerino.action.authorize.paymentMethod.account.IAttributes<T>;
/**
 * 口座決済方法承認アクションインターフェース
 */
export type IAction<T extends cinerino.accountType> = cinerino.action.authorize.paymentMethod.account.IAction<T>;
