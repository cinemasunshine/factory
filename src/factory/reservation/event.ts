import * as cinerino from '@cinerino/factory';

export declare type IReservationFor = cinerino.chevre.reservation.event.IReservationFor;

/**
 * イベント予約インターフェース
 */
export type IReservation<T extends IReservationFor> = cinerino.chevre.reservation.event.IReservation<T>;
