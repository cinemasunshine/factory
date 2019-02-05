import { chevre } from '@cinerino/factory';

export type TicketType = chevre.reservation.TicketType;
export type IUnderName = chevre.reservation.IUnderName;
export type ISeat = chevre.reservation.ISeat;
export interface ITicket extends chevre.reservation.ITicket<any> {
}

/**
 * 予約インターフェース
 */
export interface IReservation extends chevre.reservation.IReservation<any> {
}
