/**
 * @alias ScreeningEventのエイリアス
 */
import * as ScreeningEventFactory from './screeningEvent';

export type ISortOrder = ScreeningEventFactory.ISortOrder;
export type ISearchConditions = ScreeningEventFactory.ISearchConditions;
export type IItemAvailability = ScreeningEventFactory.IItemAvailability;
// tslint:disable-next-line:no-single-line-block-comment
export/* istanbul ignore next */const createItemAvailability = ScreeningEventFactory.createItemAvailability;
export type IOffer = ScreeningEventFactory.IOffer;
export type IEventWithOffer = ScreeningEventFactory.IEventWithOffer;
export type IEvent = ScreeningEventFactory.IEvent;
// tslint:disable-next-line:no-single-line-block-comment
export/* istanbul ignore next */const createFromCOA = ScreeningEventFactory.createFromCOA;
// tslint:disable-next-line:no-single-line-block-comment
export/* istanbul ignore next */const createIdentifierFromCOA = ScreeningEventFactory.createIdentifierFromCOA;
