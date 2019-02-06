import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.CancelSeatReservation>;
export type IAttributes = task.IAttributes<taskName.CancelSeatReservation>;

/**
 * 座席予約承認解除タスクインターフェース
 */
export type ITask = task.ITask<taskName.CancelSeatReservation>;
