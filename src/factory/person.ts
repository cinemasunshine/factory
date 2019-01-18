import * as cinerino from '@cinerino/factory';

import { IProgramMembership } from './programMembership';

/**
 * プロフィールインターフェース
 */
export type IProfile = cinerino.person.IProfile;

/**
 * @alias
 * @deprecated Use IProfile instead.
 */
export type IContact = IProfile;

/**
 * 識別子インターフェース
 */
export type IIdentifier = cinerino.person.IIdentifier;

/**
 * 人物インターフェース
 */
export interface IPerson extends cinerino.person.IPerson {
    memberOf?: IProgramMembership;
}
