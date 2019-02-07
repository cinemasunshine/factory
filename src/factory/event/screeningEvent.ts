import * as cinerino from '@cinerino/factory';

/**
 * ソート条件インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface ISortOrder extends cinerino.chevre.event.screeningEvent.ISortOrder {
}

/**
 * 上映イベントの検索条件インターフェース
 */
// tslint:disable-next-line:no-empty-interface
export interface ISearchConditions extends cinerino.chevre.event.screeningEvent.ISearchConditions {
}

export type ICOAInfo = cinerino.chevre.event.screeningEvent.ICOAInfo;
export type IOffer4cinemasunshine = cinerino.chevre.event.screeningEvent.IOffer4cinemasunshine;

/**
 * 上映イベントインターフェース(COAのスケジュールに相当)
 */
// tslint:disable-next-line:no-empty-interface
export interface IEvent extends cinerino.chevre.event.screeningEvent.IEvent {
    // export interface IEvent extends EventFactory.IEvent<EventType.ScreeningEvent> {
}
