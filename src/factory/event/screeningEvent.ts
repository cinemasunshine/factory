import * as cinerino from '@cinerino/factory';

import * as COA from '@motionpicture/coa-service';
import * as moment from 'moment';

import * as ScreeningEventSeriesFactory from '../event/screeningEventSeries';
import { EventStatusType } from '../eventStatusType';
import { EventType } from '../eventType';
import * as MovieTheaterPlaceFactory from '../place/movieTheater';

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

/**
 * COAデータから上映イベントを作成する
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
export function createFromCOA(params: {
    performanceFromCOA: COA.services.master.IScheduleResult;
    screenRoom: MovieTheaterPlaceFactory.IScreeningRoom;
    superEvent: ScreeningEventSeriesFactory.IEvent;
    serviceKubuns: COA.services.master.IKubunNameResult[];
    acousticKubuns: COA.services.master.IKubunNameResult[];
}): IEvent {
    const identifier = createIdentifierFromCOA({
        theaterCode: params.superEvent.location.branchCode,
        titleCode: params.superEvent.workPerformed.identifier,
        titleBranchNum: params.performanceFromCOA.titleBranchNum,
        dateJouei: params.performanceFromCOA.dateJouei,
        screenCode: params.performanceFromCOA.screenCode,
        timeBegin: params.performanceFromCOA.timeBegin
    });

    // COA情報を整形して開始日時と終了日時を作成('2500'のような日またぎの時刻入力に対応)
    let timeEnd = params.performanceFromCOA.timeEnd;
    let addDay = 0;
    try {
        const DAY = 2400;
        addDay += Math.floor(Number(timeEnd) / DAY);
        // tslint:disable-next-line:no-magic-numbers
        timeEnd = `0000${Number(timeEnd) % DAY}`.slice(-4);
    } catch (error) {
        // no op
    }

    const endDate = moment(`${params.performanceFromCOA.dateJouei} ${timeEnd} +09:00`, 'YYYYMMDD HHmm Z').add(addDay, 'days')
        .toDate();
    const startDate = moment(`${params.performanceFromCOA.dateJouei} ${params.performanceFromCOA.timeBegin} +09:00`, 'YYYYMMDD HHmm Z')
        .toDate();

    return {
        typeOf: EventType.ScreeningEvent,
        id: identifier,
        identifier: identifier,
        name: params.superEvent.name,
        eventStatus: EventStatusType.EventScheduled,
        workPerformed: params.superEvent.workPerformed,
        location: {
            typeOf: params.screenRoom.typeOf,
            branchCode: params.screenRoom.branchCode,
            name: params.screenRoom.name
        },
        endDate: endDate,
        startDate: startDate,
        superEvent: params.superEvent,
        coaInfo: {
            theaterCode: params.superEvent.location.branchCode,
            dateJouei: params.performanceFromCOA.dateJouei,
            titleCode: params.performanceFromCOA.titleCode,
            titleBranchNum: params.performanceFromCOA.titleBranchNum,
            timeBegin: params.performanceFromCOA.timeBegin,
            timeEnd: params.performanceFromCOA.timeEnd,
            screenCode: params.performanceFromCOA.screenCode,
            trailerTime: params.performanceFromCOA.trailerTime,
            kbnService: params.serviceKubuns.filter((kubun) => kubun.kubunCode === params.performanceFromCOA.kbnService)[0],
            kbnAcoustic: params.acousticKubuns.filter((kubun) => kubun.kubunCode === params.performanceFromCOA.kbnAcoustic)[0],
            nameServiceDay: params.performanceFromCOA.nameServiceDay,
            availableNum: params.performanceFromCOA.availableNum,
            rsvStartDate: params.performanceFromCOA.rsvStartDate,
            rsvEndDate: params.performanceFromCOA.rsvEndDate,
            flgEarlyBooking: params.performanceFromCOA.flgEarlyBooking
        },
        offers: <any>{},
        checkInCount: 0,
        attendeeCount: 0
    };
}

/**
 * COA情報から上映イベント識別子を作成する
 */
export function createIdentifierFromCOA(params: {
    theaterCode: string;
    titleCode: string;
    titleBranchNum: string;
    dateJouei: string;
    screenCode: string;
    timeBegin: string;
}): string {
    return [
        ScreeningEventSeriesFactory.createIdentifier(params),
        params.dateJouei,
        params.screenCode,
        params.timeBegin
    ].join('');
}
