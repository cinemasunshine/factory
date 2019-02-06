import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.ReturnOrder>;
export type IAttributes = task.IAttributes<taskName.ReturnOrder>;

/**
 * 注文返品タスクインターフェース
 */
export type ITask = task.ITask<taskName.ReturnOrder>;
