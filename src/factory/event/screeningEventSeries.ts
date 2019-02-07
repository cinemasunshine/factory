import * as cinerino from '@cinerino/factory';

/**
 * 上映作品インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface IWorkPerformed extends cinerino.chevre.event.screeningEventSeries.IWorkPerformed {
}

// tslint:disable-next-line:no-empty-interface
export interface IOrganizer extends cinerino.chevre.event.screeningEventSeries.IOrganizer {
    // typeOf: OrganizationType | PersonType;
}

export type ICOAInfo = cinerino.chevre.event.screeningEventSeries.ICOAInfo;

/**
 * 上映イベントインターフェース(COAの劇場作品に相当)
 */
// tslint:disable-next-line:no-empty-interface
export interface IEvent extends cinerino.chevre.event.screeningEventSeries.IEvent {
}
