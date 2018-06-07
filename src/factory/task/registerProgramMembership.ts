import { IAttributes as IRegisterProgramMembershipActionAttributes } from '../action/interact/register/programMembership';
import { IExtendId } from '../autoGenerated';
import * as TaskFactory from '../task';
import TaskName from '../taskName';

export type IData = IRegisterProgramMembershipActionAttributes;
export interface IAttributes extends TaskFactory.IAttributes {
    name: TaskName.RegisterProgramMembership;
    data: IData;
}
/**
 * 会員プログラム登録タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
