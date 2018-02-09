/**
 * placeOrder transaction factory
 * 注文取引ファクトリー
 * @namespace transaction.placeOrder
 */

import * as waiter from '@motionpicture/waiter-domain';

import { IAction as IAuthorizeAction, IAttributes as IAuthorizeActionAttributes } from '../action/authorize';
import { IAttributes as IOrderActionAttributes } from '../action/trade/order';
import { IExtendId } from '../autoGenerated';
import { IClientUser } from '../clientUser';
import * as OrderFactory from '../order';
import OrganizationType from '../organizationType';
import * as OwnershipInfoFactory from '../ownershipInfo';
import { IContact, IPerson } from '../person';
import PersonType from '../personType';
import { IReservation } from '../reservation';
import * as TransactionFactory from '../transaction';
import TransactionStatusType from '../transactionStatusType';
import TransactionTasksExportationStatus from '../transactionTasksExportationStatus';
import TransactionType from '../transactionType';

/**
 * customer contact interface
 * 購入者連作先インターフェース
 * @export
 * @interface
 * @memberof transaction.placeOrder
 */
export type ICustomerContact = IContact;

/**
 * seller interface
 * 販売者インターフェース
 * @export
 * @interface
 * @memberof transaction.placeOrder
 */
export interface ISeller {
    typeOf: OrganizationType | PersonType;
    id: string;
    name: string;
    url: string;
}

/**
 * agent interface
 * 購入者インターフェース
 * @export
 * @interface
 * @memberof transaction.placeOrder
 */
export type IAgent = IPerson;

/**
 * result interface
 * 取引結果インターフェース
 * @export
 * @interface
 * @memberof transaction.placeOrder
 */
export interface IResult {
    /**
     * 注文データ
     */
    order: OrderFactory.IOrder;
    /**
     * 購入者に与えられる所有権リスト
     */
    ownershipInfos: OwnershipInfoFactory.IOwnershipInfo<IReservation>[];
}

/**
 * error interface
 * エラーインターフェース
 * @export
 * @interface
 * @memberof transaction.placeOrder
 */
export type IError = any;

/**
 * object of a transaction interface
 * 取引対象物インターフェース
 * @export
 * @interface
 * @memberof transaction.placeOrder
 */
export interface IObject {
    // tslint:disable-next-line:no-suspicious-comment
    /**
     * WAITER許可証トークン
     * TODO v3.0.0で必須プロパティに変更
     */
    passportToken?: waiter.factory.passport.IEncodedPassport;
    // tslint:disable-next-line:no-suspicious-comment
    /**
     * WAITER許可証
     * TODO v3.0.0で必須プロパティに変更
     */
    passport?: waiter.factory.passport.IPassport;
    /**
     * user object of the client where a transaction is processing.
     */
    clientUser: IClientUser;
    /**
     * customer contact
     */
    customerContact?: ICustomerContact;
    /**
     * 認可アクションリスト
     */
    authorizeActions: IAuthorizeAction<IAuthorizeActionAttributes<any, any>>[];
}

export interface IPotentialActions {
    order: IOrderActionAttributes;
}

export type ITransaction = IExtendId<IAttributes>;

/**
 * place order transaction interface
 * 注文取引インターフェース
 * @export
 * @interface
 * @memberof transaction.placeOrder
 */
export interface IAttributes extends TransactionFactory.IAttributes<IAgent, IObject, IResult> {
    /**
     * 購入者
     */
    agent: IAgent;
    /**
     * 販売者
     */
    seller: ISeller;
    /**
     * 取引の結果発生するもの
     */
    result?: IResult;
    /**
     * 取引に関するエラー
     */
    error?: IError;
    /**
     * 取引の対象物
     * 座席仮予約、クレジットカードのオーソリなど、取引を構成する承認などが含まれます。
     */
    object: IObject;
    /**
     * 事後発生アクション
     */
    potentialActions?: IPotentialActions;
}

/**
 * create placeOrderTransaction object.
 * 注文取引オブジェクトを生成する。
 * @export
 * @function
 * @memberof transaction.placeOrder
 */
export function createAttributes(params: {
    status: TransactionStatusType;
    agent: IAgent
    seller: ISeller;
    result?: IResult;
    error?: IError;
    object: IObject;
    expires: Date;
    startDate?: Date;
    endDate?: Date;
    tasksExportedAt?: Date;
    tasksExportationStatus: TransactionTasksExportationStatus;
    potentialActions?: IPotentialActions;
}): IAttributes {
    return {
        ...TransactionFactory.createAttributes<IAgent, IObject, IResult>({
            typeOf: TransactionType.PlaceOrder,
            status: params.status,
            agent: params.agent,
            result: params.result,
            error: params.error,
            object: params.object,
            expires: params.expires,
            startDate: params.startDate,
            endDate: params.endDate,
            tasksExportedAt: params.tasksExportedAt,
            tasksExportationStatus: params.tasksExportationStatus,
            potentialActions: params.potentialActions
        }),
        ...{
            seller: params.seller,
            object: params.object
        }
    };
}
