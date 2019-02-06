import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.ImportScreeningEvents>;
export type IAttributes = task.IAttributes<taskName.ImportScreeningEvents>;

/**
 * 上映イベント在庫仕入れタスクインターフェース
 */
export type ITask = task.ITask<taskName.ImportScreeningEvents>;
