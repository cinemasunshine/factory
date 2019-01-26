import * as cinerino from '@cinerino/factory';

import { IOffer } from './offer';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';

/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass: string;
}

export type IPaymentAccepted<T extends PaymentMethodType> = cinerino.organization.IPaymentAccepted<T>;
export type IPOS = cinerino.organization.IPOS;
export type IMakesOffer = IOffer;
export type IAreaServed = cinerino.organization.IAreaServed<cinerino.organizationType>;
export type IAttributes<T extends OrganizationType> = cinerino.organization.IAttributes<T>;
export type IOrganization<T extends IAttributes<OrganizationType>> = T & {
    id: string;
};

/**
 * 組織検索条件インターフェース
 */
export type ISearchConditions<T extends OrganizationType> = cinerino.organization.ISearchConditions<T>;
