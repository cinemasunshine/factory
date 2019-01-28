import { chevre } from '@cinerino/factory';
import { ICOATicketInfoWithDetails } from './offer/seatReservation';

export type TicketType = chevre.reservation.TicketType;
export type IUnderName = chevre.reservation.IUnderName;
export type ISeat = chevre.reservation.ISeat;

/**
 * 予約チケットインターフェース
 */
export interface ITicket extends chevre.reservation.ITicket<any> {
    totalPrice: number;
    /**
     * COA券種情報
     */
    coaTicketInfo: ICOATicketInfoWithDetails;
}

/**
 * 予約インターフェース
 */
export interface IReservation extends chevre.reservation.IReservation<any> {
    price: number;
    reservedTicket: ITicket;
}
