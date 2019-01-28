import * as cinerino from '@cinerino/factory';

export type IAttributes<TObject, TResult> = cinerino.action.authorize.IAttributes<TObject, TResult>;
/**
 * 承認アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<any, any>> = cinerino.action.authorize.IAction<TAttributes>;
