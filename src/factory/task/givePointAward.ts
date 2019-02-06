import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.GivePointAward>;
export type IAttributes = task.IAttributes<taskName.GivePointAward>;

/**
 * ポイントインセンティブ付与タスクインターフェース
 */
export type ITask = task.ITask<taskName.GivePointAward>;
