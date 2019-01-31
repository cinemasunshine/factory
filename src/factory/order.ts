import * as cinerino from '@cinerino/factory';

import { IEvent as IScreeningEvent } from './event/screeningEvent';
import PaymentMethodType from './paymentMethodType';
import { IProgramMembership } from './programMembership';
import * as EventReservationFactory from './reservation/event';
import { ReservationType } from './reservationType';

export type TypeOf = cinerino.order.TypeOf;
export type IPaymentMethod<T extends PaymentMethodType> = cinerino.order.IPaymentMethod<T>;
export type IDiscount = cinerino.order.IDiscount;
export type ISeller = cinerino.order.ISeller;
export type ICustomer = cinerino.order.ICustomer;
export type ISortOrder = cinerino.order.ISortOrder;
export type ISearchConditions = cinerino.order.ISearchConditions;

/**
 * 供給アイテムインターフェース
 */
export type IItemOffered = EventReservationFactory.IEventReservation<IScreeningEvent> | IProgramMembership;
export type ItemOfferedType = ReservationType;

/**
 * 注文照会キーインターフェース
 */
export interface IOrderInquiryKey {
    theaterCode: string;
    confirmationNumber: number;
    telephone: string;
}

/**
 * 受け入れられたオファーインターフェース
 */
export interface IAcceptedOffer<T extends IItemOffered> extends cinerino.order.IAcceptedOffer<any> {
    itemOffered: T;
    price: number;
}

export interface IOrderWithAnyItems extends cinerino.order.IOrder {
    acceptedOffers: IAcceptedOffer<any>[];
}

/**
 * 注文インターフェース
 * @see https://schema.org/Order
 */
export interface IOrder extends IOrderWithAnyItems {
    acceptedOffers: IAcceptedOffer<IItemOffered>[];
}
