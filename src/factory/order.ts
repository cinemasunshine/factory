import * as cinerino from '@cinerino/factory';

export import TypeOf = cinerino.order.TypeOf;
export import IPaymentMethod = cinerino.order.IPaymentMethod;
export import IDiscount = cinerino.order.IDiscount;
export import ISeller = cinerino.order.ISeller;
export import ICustomer = cinerino.order.ICustomer;
export import ISortOrder = cinerino.order.ISortOrder;
export import ISearchConditions = cinerino.order.ISearchConditions;
export import IItemOffered = cinerino.order.IItemOffered;
export import ItemOfferedType = cinerino.order.ItemOfferedType;
export import IAcceptedOffer = cinerino.order.IAcceptedOffer;

/**
 * 注文インターフェース
 * @see https://schema.org/Order
 */
export import IOrder = cinerino.order.IOrder;

/**
 * 注文照会キーインターフェース
 */
export interface IOrderInquiryKey {
    theaterCode: string;
    confirmationNumber: number;
    telephone: string;
}
