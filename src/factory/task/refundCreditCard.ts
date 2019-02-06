import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.RefundCreditCard>;
export type IAttributes = task.IAttributes<taskName.RefundCreditCard>;

/**
 * クレジットカード返金タスクインターフェース
 */
export type ITask = task.ITask<taskName.RefundCreditCard>;
