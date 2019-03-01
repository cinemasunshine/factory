/**
 * @deprecated ムビチケは決済方法として解釈するように設計変更したので、こちらはもう拡張すべきでない
 */
import * as cinerino from '@cinerino/factory';

export type IAgent = cinerino.action.IParticipant;
export type IRecipient = cinerino.action.IParticipant;

export enum ObjectType {
    Mvtk = 'Mvtk'
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券OUTに変更
export interface IResult {
    price: number;
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券INに変更
export interface IObject {
    typeOf: ObjectType;
    price: number;
    seatInfoSyncIn: ISeatInfoSyncIn;
}

export interface ISeatInfoSyncIn {
    /**
     * 興行会社コード
     */
    kgygishCd: string;
    /**
     * 予約デバイス区分
     */
    yykDvcTyp: string;
    /**
     * 取消フラグ
     */
    trkshFlg: string;
    /**
     * 興行会社システム座席予約番号
     */
    kgygishSstmZskyykNo: string;
    /**
     * 興行会社ユーザー座席予約番号
     */
    kgygishUsrZskyykNo: string;
    /**
     * 上映日時
     */
    jeiDt: string;
    /**
     * 計上年月日
     */
    kijYmd: string;
    /**
     * サイトコード
     */
    stCd: string;
    /**
     * スクリーンコード
     */
    screnCd: string;
    /**
     * 購入管理番号情報
     */
    knyknrNoInfo: IKnyknrNoInfo[];
    /**
     * 座席情報（itemArray）
     */
    zskInfo: IZskInfo[];
    /**
     * 作品コード
     */
    skhnCd: string;
}

/**
 * 券種情報
 */
export interface IKnshInfo {
    knshTyp: string;
    miNum: number;
}

/**
 * 購入管理番号情報
 */
export interface IKnyknrNoInfo {
    knyknrNo: string;
    pinCd: string;
    knshInfo: IKnshInfo[];
}

/**
 * 座席情報
 */
export interface IZskInfo {
    zskCd: string;
}

export interface IPurpose {
    typeOf: cinerino.transactionType.PlaceOrder;
    id: string;
}

/**
 * ムビチケ着券情報
 */
export interface IAttributes extends cinerino.action.authorize.IAttributes<IObject, IResult> {
    typeOf: cinerino.actionType.AuthorizeAction;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}

export type IAction = cinerino.action.IAction<IAttributes>;
