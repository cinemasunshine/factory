import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.PlaceOrder>;
export type IAttributes = task.IAttributes<taskName.PlaceOrder>;

/**
 * 注文タスクインターフェース
 */
export type ITask = task.ITask<taskName.PlaceOrder>;
