import * as cinerino from '@cinerino/factory';

import * as OrganizationFactory from './organization';
import { IPerson } from './person';

export import AccountGoodType = cinerino.ownershipInfo.AccountGoodType;
export type IAccount<T extends cinerino.accountType> = cinerino.ownershipInfo.IAccount<T>;
export type IGoodType = cinerino.ownershipInfo.IGoodType;
export type IGood<T extends IGoodType> = cinerino.ownershipInfo.IGood<T>;

/**
 * 所有者インターフェース
 */
export type IOwner = OrganizationFactory.IOrganization<OrganizationFactory.IAttributes<cinerino.organizationType>> | IPerson;
export type OwnershipInfoType = cinerino.ownershipInfo.OwnershipInfoType;
export type IOwnershipInfo<T extends cinerino.ownershipInfo.IGood<cinerino.ownershipInfo.IGoodType>>
    = cinerino.ownershipInfo.IOwnershipInfo<T>;
export type ISearchConditions<T extends cinerino.ownershipInfo.IGoodType> = cinerino.ownershipInfo.ISearchConditions<T>;

export interface ISearchConditions4cinemasunshine<T extends IGoodType> {
    /**
     * 所有権識別子
     */
    identifier?: string;
    /**
     * 所有対象物のタイプ
     */
    goodType: T;
    /**
     * 所有者ID
     */
    ownedBy?: string;
    /**
     * いつの時点での所有か
     */
    ownedAt?: Date;
}

/**
 * 会員プログラム検索条件インターフェース
 */
export interface ISearchProgramMembershipConditions {
    /**
     * 劇場ID
     */
    theaterIds: string[];
    /**
     * 登録日MIN
     */
    createdAtFrom: Date;
    /**
     * 登録日MAX
     */
    createdAtTo: Date;
}
