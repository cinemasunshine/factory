import { task, taskName } from '@cinerino/factory';

export type IData = task.IData<taskName.TriggerWebhook>;
export type IAttributes = task.IAttributes<taskName.TriggerWebhook>;

/**
 * ウェブフックタスクインターフェース
 */
export type ITask = task.ITask<taskName.TriggerWebhook>;
