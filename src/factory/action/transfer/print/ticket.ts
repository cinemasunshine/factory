/**
 * チケット印刷アクションファクトリー
 * @namespace action.transfer.print.ticket
 */

import * as ActionFactory from '../../../action';
import * as PrintActionFactory from '../print';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export interface ISearchConditions {
    agentId: string;
    ticketToken: string;
}

export interface ITicket {
    ticketToken: string;
}

export interface IObject extends ITicket {
    typeOf: string;
}

export type IResult = any;

export interface IAttributes extends PrintActionFactory.IAttributes<IObject, IResult> {
    result?: IResult;
    object: IObject;
}

export type IAction = PrintActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionFactory.ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
}): IAttributes {
    return PrintActionFactory.createAttributes(params);
}
