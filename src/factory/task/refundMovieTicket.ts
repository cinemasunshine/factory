import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.RefundMovieTicket>;
export type IAttributes = task.IAttributes<taskName.RefundMovieTicket>;

/**
 * ムビチケ着券取消タスクインターフェース
 */
export type ITask = task.ITask<taskName.RefundMovieTicket>;
