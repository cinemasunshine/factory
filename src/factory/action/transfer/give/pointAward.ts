import { IPecorinoTransaction, ObjectType as AuthorizePointAwardActionObjectType } from '../../../action/authorize/award/point';
import { IOrder } from '../../../order';
import * as GiveActionFactory from '../give';

export import ObjectType = AuthorizePointAwardActionObjectType;

/**
 * ポイント付与対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    /**
     * 付与対象のポイント取引
     * 基本的には、この取引を確定することで付与処理が実行される、という考え方です。
     */
    pecorinoTransaction: IPecorinoTransaction;
    /**
     * ポイントサービスエンドポイント
     */
    pecorinoEndpoint: string;
}
export type IResult = any;
/**
 * 目的は注文
 * 注文に対するインセンティブとしてポイントが付与される仕組み
 */
export type IPurpose = IOrder;
export type IPotentialActions = any;
export interface IAttributes extends GiveActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
    // toLocation: IToLocation;
}

/**
 * ポイント付与アクションインターフェース
 */
export type IAction = GiveActionFactory.IAction<IAttributes>;
