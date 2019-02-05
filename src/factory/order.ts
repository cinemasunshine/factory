import * as cinerino from '@cinerino/factory';

import PaymentMethodType from './paymentMethodType';

export type TypeOf = cinerino.order.TypeOf;
export type IPaymentMethod<T extends PaymentMethodType> = cinerino.order.IPaymentMethod<T>;
export type IDiscount = cinerino.order.IDiscount;
export type ISeller = cinerino.order.ISeller;
export type ICustomer = cinerino.order.ICustomer;
export type ISortOrder = cinerino.order.ISortOrder;
export type ISearchConditions = cinerino.order.ISearchConditions;
export type IItemOffered = cinerino.order.IItemOffered;
export type ItemOfferedType = cinerino.order.ItemOfferedType;
export type IAcceptedOffer<T extends IItemOffered> = cinerino.order.IAcceptedOffer<T>;

/**
 * 注文照会キーインターフェース
 */
export interface IOrderInquiryKey {
    theaterCode: string;
    confirmationNumber: number;
    telephone: string;
}

/**
 * 注文インターフェース
 * @see https://schema.org/Order
 */
export type IOrder = cinerino.order.IOrder;
