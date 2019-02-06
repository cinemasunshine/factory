import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.CancelCreditCard>;
export type IAttributes = task.IAttributes<taskName.CancelCreditCard>;

/**
 * クレジットカード承認解除タスクインターフェース
 */
export type ITask = task.ITask<taskName.CancelCreditCard>;
