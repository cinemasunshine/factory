import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.CancelPointAward>;
export type IAttributes = task.IAttributes<taskName.CancelPointAward>;

/**
 * ポイントインセンティブ承認アクション取消タスクインターフェース
 */
export type ITask = task.ITask<taskName.CancelPointAward>;
