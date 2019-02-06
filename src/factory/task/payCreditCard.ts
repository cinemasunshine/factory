import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.PayCreditCard>;
export type IAttributes = task.IAttributes<taskName.PayCreditCard>;

/**
 * クレジットカード決済タスクインターフェース
 */
export type ITask = task.ITask<taskName.PayCreditCard>;
