import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.RefundAccount>;
export type IAttributes = task.IAttributes<taskName.RefundAccount>;

/**
 * 口座返金タスクインターフェース
 */
export type ITask = task.ITask<taskName.RefundAccount>;
