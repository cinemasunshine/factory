import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.CancelAccount>;
export type IAttributes = task.IAttributes<taskName.CancelAccount>;

/**
 * 口座承認アクション取消タスクインターフェース
 */
export type ITask = task.ITask<taskName.CancelAccount>;
