import * as cinerino from '@cinerino/factory';

import { IReservation } from '../reservation';

export declare type IReservationFor = cinerino.chevre.reservation.event.IReservationFor;

/**
 * イベント予約インターフェース
 */
export interface IEventReservation<T extends IReservationFor> extends IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}
