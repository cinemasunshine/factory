import * as cinerino from '@cinerino/factory';

import { IAttributes as IRegisterProgramMembershipTaskAttributes } from '../../../task/registerProgramMembership';
import * as SendActionFactory from '../send';

export type IAgent = cinerino.action.IParticipant;
export type IRecipient = cinerino.action.IParticipant;
export type IObject = cinerino.order.IOrder;
export type IResult = any;
export interface IPotentialActions {
    /**
     * 注文配送を通知するEメール送信アクション
     */
    sendEmailMessage?: cinerino.action.transfer.send.message.email.IAttributes;
    /**
     * 会員プログラムの注文の場合、次回のプログラム更新タスク作成アクションがここに追加されます。
     */
    registerProgramMembership?: IRegisterProgramMembershipTaskAttributes[];
}
export interface IAttributes extends SendActionFactory.IAttributes<IObject, IResult> {
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}
/**
 * 注文配送アクションインターフェース
 */
export type IAction = SendActionFactory.IAction<IAttributes>;
