import * as cinerino from '@cinerino/factory';

export import ProgramMembershipType = cinerino.programMembership.ProgramMembershipType;

/**
 * 会員プログラム特典インターフェース
 */
export enum Award {
    /**
     * ポイント口座決済
     */
    PecorinoPayment = 'PecorinoPayment'
}

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
export interface IProgramMembership extends cinerino.programMembership.IProgramMembership {
    /**
     * 特典リスト
     */
    award: Award[];
}
