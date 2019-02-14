/**
 * 座席予約承認アクションファクトリー
 */
import { actionType, priceCurrency } from '@cinerino/factory';
import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../../action';
import { IEvent as IScreeningEvent } from '../../../event/screeningEvent';
import { IOfferWithDetails as ISeatReservationOffer } from '../../../offer/seatReservation';
import { ITransaction } from '../../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

/**
 * 認可アクション結果
 */
export interface IResult {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: priceCurrency;
    /**
     * オファーに対して必要な消費ポイント
     */
    pecorinoAmount: number;
    /**
     * COAの仮予約パラメーター
     */
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    updTmpReserveSeatResult: COA.services.reserve.IUpdTmpReserveSeatResult;
}

/**
 * 認可アクション対象
 */
export interface IObject {
    typeOf: ObjectType;
    individualScreeningEvent: IScreeningEvent;
    offers: ISeatReservationOffer[];
}

export type IPurpose = ITransaction;

/**
 * authorize action error interface
 */
export type IError = any;

/**
 * 座席予約認可アクションインターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: actionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;
