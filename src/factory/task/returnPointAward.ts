import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.ReturnPointAward>;
export type IAttributes = task.IAttributes<taskName.ReturnPointAward>;

/**
 * ポイントインセンティブ返却タスクインターフェース
 */
export type ITask = task.ITask<taskName.ReturnPointAward>;
