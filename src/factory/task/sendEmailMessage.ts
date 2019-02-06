import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.SendEmailMessage>;
export type IAttributes = task.IAttributes<taskName.SendEmailMessage>;

/**
 * Eメール送信タスクインターフェース
 */
export type ITask = task.ITask<taskName.SendEmailMessage>;
