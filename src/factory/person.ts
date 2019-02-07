import * as cinerino from '@cinerino/factory';

import { IProgramMembership } from './programMembership';

export type IProfile = cinerino.person.IProfile;
export type IIdentifier = cinerino.person.IIdentifier;

/**
 * 人物インターフェース
 */
export interface IPerson extends cinerino.person.IPerson {
    memberOf?: IProgramMembership;
}
