import * as cinerino from '@cinerino/factory';

import * as COA from '@motionpicture/coa-service';
import * as moment from 'moment';

import CreativeWorkType from '../creativeWorkType';
import { EventStatusType } from '../eventStatusType';
import { EventType } from '../eventType';
import OrganizationType from '../organizationType';
import * as MovieTheaterPlaceFactory from '../place/movieTheater';

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

/**
 * COAの作品抽出結果からFilmオブジェクトを作成する
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
export function createFromCOA(params: {
    filmFromCOA: COA.services.master.ITitleResult;
    movieTheater: MovieTheaterPlaceFactory.IPlace;
    eirinKubuns: COA.services.master.IKubunNameResult[];
    eizouKubuns: COA.services.master.IKubunNameResult[];
    joueihousikiKubuns: COA.services.master.IKubunNameResult[];
    jimakufukikaeKubuns: COA.services.master.IKubunNameResult[];
}): IEvent {
    const endDate = (moment(`${params.filmFromCOA.dateEnd} +09:00`, 'YYYYMMDD Z').isValid())
        ? moment(`${params.filmFromCOA.dateEnd} +09:00`, 'YYYYMMDD Z').toDate()
        : undefined;
    const startDate = (moment(`${params.filmFromCOA.dateBegin} +09:00`, 'YYYYMMDD Z').isValid())
        ? moment(`${params.filmFromCOA.dateBegin} +09:00`, 'YYYYMMDD Z').toDate()
        : undefined;
    // title_codeは劇場をまたいで共有、title_branch_numは劇場毎に管理
    const identifier = createIdentifier({
        theaterCode: params.movieTheater.branchCode,
        titleCode: params.filmFromCOA.titleCode,
        titleBranchNum: params.filmFromCOA.titleBranchNum
    });

    return {
        id: identifier,
        identifier: identifier,
        name: {
            ja: params.filmFromCOA.titleName,
            en: params.filmFromCOA.titleNameEng
        },
        kanaName: params.filmFromCOA.titleNameKana,
        alternativeHeadline: params.filmFromCOA.titleNameShort,
        location: {
            id: (params.movieTheater.id !== undefined) ? params.movieTheater.id : '',
            branchCode: params.movieTheater.branchCode,
            name: params.movieTheater.name,
            kanaName: params.movieTheater.kanaName,
            typeOf: params.movieTheater.typeOf
        },
        organizer: {
            typeOf: OrganizationType.MovieTheater,
            identifier: params.movieTheater.identifier,
            name: params.movieTheater.name
        },
        videoFormat: params.eizouKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnEizou)[0],
        soundFormat: [],
        workPerformed: {
            identifier: params.filmFromCOA.titleCode,
            name: params.filmFromCOA.titleNameOrig,
            duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
            contentRating: params.eirinKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnEirin)[0],
            typeOf: CreativeWorkType.Movie
        },
        duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
        endDate: endDate,
        startDate: startDate,
        coaInfo: {
            titleBranchNum: params.filmFromCOA.titleBranchNum,
            kbnJoueihousiki: params.joueihousikiKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnJoueihousiki)[0],
            kbnJimakufukikae: params.jimakufukikaeKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnJimakufukikae)[0],
            flgMvtkUse: params.filmFromCOA.flgMvtkUse,
            dateMvtkBegin: params.filmFromCOA.dateMvtkBegin
        },
        eventStatus: EventStatusType.EventScheduled,
        typeOf: EventType.ScreeningEventSeries
    };
}

/**
 * COA情報から上映イベント識別子を作成する
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
export function createIdentifier(params: {
    theaterCode: string;
    titleCode: string;
    titleBranchNum: string;
}) {
    return [
        params.theaterCode,
        params.titleCode,
        params.titleBranchNum
    ].join('');
}
