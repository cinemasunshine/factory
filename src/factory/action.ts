import * as cinerino from '@cinerino/factory';

import ActionType from './actionType';

export type IParticipant = cinerino.action.IParticipant;
export type IPurpose = cinerino.action.IPurpose;
export type IAttributes<T extends ActionType, TObject, TResult> = cinerino.action.IAttributes<T, TObject, TResult>;
/**
 * アクションインターフェース
 */
export type IAction<TAttributes extends IAttributes<ActionType, any, any>> = cinerino.action.IAction<TAttributes>;
export type ISortOrder = cinerino.action.ISortOrder;
