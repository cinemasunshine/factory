import * as cinerino from '@cinerino/factory';

export import AccountGoodType = cinerino.ownershipInfo.AccountGoodType;
export import IAccount = cinerino.ownershipInfo.IAccount;
export import IGoodType = cinerino.ownershipInfo.IGoodType;
export import IGood = cinerino.ownershipInfo.IGood;
export import IOwner = cinerino.ownershipInfo.IOwner;
export import OwnershipInfoType = cinerino.ownershipInfo.OwnershipInfoType;
export import IOwnershipInfo = cinerino.ownershipInfo.IOwnershipInfo;
export import ISearchConditions = cinerino.ownershipInfo.ISearchConditions;

/**
 * 会員プログラム検索条件インターフェース
 * @deprecated 検索方法再検討中
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
