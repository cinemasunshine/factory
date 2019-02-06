import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.PayAccount>;
export type IAttributes = task.IAttributes<taskName.PayAccount>;

/**
 * 口座決済タスクインターフェース
 */
export type ITask = task.ITask<taskName.PayAccount>;
