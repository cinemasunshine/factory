import * as cinerino from '@cinerino/factory';

export type IAttributes<T extends cinerino.chevre.eventType> = cinerino.chevre.event.IAttributes<T>;
/**
 * イベントインターフェース
 */
export type IEvent<T extends cinerino.chevre.eventType> = cinerino.chevre.event.IEvent<T>;
