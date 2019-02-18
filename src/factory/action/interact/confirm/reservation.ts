import { chevre, service } from '@cinerino/factory';
import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../../action';
import * as ConfirmActionFactory from '../confirm';

export type IAgent = ActionFactory.IParticipant;

export type IObject4COA = COA.services.reserve.IUpdReserveArgs;

export type IObject4Chevre = chevre.transaction.reserve.IConfirmParams & {
    typeOf: chevre.transactionType.Reserve;
};

export type IObject<T extends service.webAPI.Identifier> =
    T extends service.webAPI.Identifier.COA ? IObject4COA :
    IObject4Chevre;

// tslint:disable-next-line:no-empty-interface
export interface IResult {
}

// tslint:disable-next-line:no-empty-interface
export interface IPotentialActions {
}

export type IInstrument<T extends service.webAPI.Identifier> = service.webAPI.IService<T>;

export interface IAttributes<T extends service.webAPI.Identifier> extends ConfirmActionFactory.IAttributes<IObject<T>, IResult> {
    agent: IAgent;
    potentialActions?: IPotentialActions;
    instrument?: IInstrument<T>;
}

/**
 * 予約確定アクションインターフェース
 */
export type IAction<T extends service.webAPI.Identifier> = ConfirmActionFactory.IAction<IAttributes<T>>;
