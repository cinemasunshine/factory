import * as cinerino from '@cinerino/factory';
import * as COA from '@motionpicture/coa-service';

import * as SeatReservationOfferFactory from '../../../offer/seatReservation';

export type IAgent = cinerino.action.IParticipant;
export type IRecipient = cinerino.action.IParticipant;
export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

export type IInstrument<T extends cinerino.service.webAPI.Identifier> = cinerino.service.webAPI.IService<T>;

export type IRequestBody = COA.services.reserve.IUpdTmpReserveSeatArgs;
export type IResponseBody<T extends cinerino.service.webAPI.Identifier> =
    T extends cinerino.service.webAPI.Identifier.COA ? COA.services.reserve.IUpdTmpReserveSeatResult :
    T extends cinerino.service.webAPI.Identifier.Chevre ? cinerino.chevre.transaction.reserve.ITransaction :
    cinerino.chevre.transaction.reserve.ITransaction;

/**
 * 認可アクション結果
 */
export interface IResult<T extends cinerino.service.webAPI.Identifier> {
    /**
     * オファー分の金額
     */
    price: number;
    priceCurrency: cinerino.priceCurrency;
    /**
     * オファーに対して必要な消費ポイント
     */
    point: number;
    /**
     * 外部リクエストエンドポイント
     */
    requestEndpoint?: string;
    /**
     * 外部サービスへのリクエスト
     */
    requestBody?: IRequestBody;
    /**
     * 外部サービスからのレスポンス
     */
    responseBody: IResponseBody<T>;
}

export type IAcceptedPaymentMethod = cinerino.paymentMethod.paymentCard.movieTicket.IMovieTicket;

export type IAcceptedOffer = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: cinerino.propertyValue.IPropertyValue<string>[];
} & SeatReservationOfferFactory.IOfferWithDetails;

export type IAcceptedOfferWithoutDetail = {
    paymentMethod?: IAcceptedPaymentMethod;
    additionalProperty: cinerino.propertyValue.IPropertyValue<string>[];
} & SeatReservationOfferFactory.IOffer;

export interface IObjectWithoutDetail {
    acceptedOffer: IAcceptedOfferWithoutDetail[];
    event: {
        id: string;
    };
}

/**
 * 認可アクション対象
 */
export interface IObject {
    typeOf: ObjectType;
    event?: cinerino.chevre.event.screeningEvent.IEvent;
    acceptedOffer: IAcceptedOffer[];
}

export interface IPurpose {
    typeOf: cinerino.transactionType.PlaceOrder;
    id: string;
}

/**
 * authorize action error interface
 */
export type IError = any;

/**
 * 座席予約認可アクションインターフェース
 */
export interface IAttributes<T extends cinerino.service.webAPI.Identifier>
    extends cinerino.action.authorize.IAttributes<IObject, IResult<T>> {
    typeOf: cinerino.actionType.AuthorizeAction;
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    purpose: IPurpose;
    instrument?: IInstrument<T>;
}

export type IAction<T extends cinerino.service.webAPI.Identifier> = cinerino.action.IAction<IAttributes<T>>;
