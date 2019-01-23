/**
 * @alias ScreeningEventのエイリアス
 */
import * as ScreeningEventFactory from './screeningEvent';

export type ISortOrder = ScreeningEventFactory.ISortOrder;
export type ISearchConditions = ScreeningEventFactory.ISearchConditions;
export type IItemAvailability = ScreeningEventFactory.IItemAvailability;
export const createItemAvailability = ScreeningEventFactory.createItemAvailability;
export type IOffer = ScreeningEventFactory.IOffer;
export type IEventWithOffer = ScreeningEventFactory.IEventWithOffer;
export type IEvent = ScreeningEventFactory.IEvent;
export const createFromCOA = ScreeningEventFactory.createFromCOA;
export const createIdentifierFromCOA = ScreeningEventFactory.createIdentifierFromCOA;
