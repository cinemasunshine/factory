import * as cinerino from '@cinerino/factory';

import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';

export type IGMOInfo = cinerino.seller.IGMOInfo;
export type IPaymentAccepted<T extends PaymentMethodType> = cinerino.seller.IPaymentAccepted<T>;
export type IPOS = cinerino.seller.IPOS;
export type IMakesOffer = cinerino.seller.IMakesOffer;
export type IAreaServed = cinerino.seller.IAreaServed;
export type IAttributes<T extends OrganizationType> = cinerino.seller.IAttributes<T>;
export type IOrganization<T extends IAttributes<OrganizationType>> = cinerino.seller.IOrganization<T>;

/**
 * 組織検索条件インターフェース
 */
export type ISearchConditions = cinerino.seller.ISearchConditions;
