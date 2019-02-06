import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.PayMovieTicket>;
export type IAttributes = task.IAttributes<taskName.PayMovieTicket>;

/**
 * ムビチケ決済タスクインターフェース
 */
export type ITask = task.ITask<taskName.PayMovieTicket>;
