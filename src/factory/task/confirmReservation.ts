import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.ConfirmReservation>;
export type IAttributes = task.IAttributes<taskName.ConfirmReservation>;

/**
 * 予約確定タスクインターフェース
 */
export type ITask = task.ITask<taskName.ConfirmReservation>;
