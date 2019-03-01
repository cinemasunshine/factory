/**
 * factory
 */
import * as cinerino from '@cinerino/factory';

import * as MvtkAuthorizeActionFactory from './factory/action/authorize/discount/mvtk';
import * as ProgramMembershipOfferAuthorizeActionFactory from './factory/action/authorize/offer/programMembership';
import * as SeatReservationOfferAuthorizeActionFactory from './factory/action/authorize/offer/seatReservation';
import * as UseMvtkActionFactory from './factory/action/consume/use/mvtk';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as OrderActionFactory from './factory/action/trade/order';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';

import * as SeatReservationOfferFactory from './factory/offer/seatReservation';
import * as PersonFactory from './factory/person';
import * as ProgramMembershipFactory from './factory/programMembership';

import * as RegisterProgramMembershipTaskFactory from './factory/task/registerProgramMembership';
import * as SendOrderTaskFactory from './factory/task/sendOrder';
import * as UnRegisterProgramMembershipTaskFactory from './factory/task/unRegisterProgramMembership';

import * as TaskFactory from './factory/task';

export import chevre = cinerino.chevre;
export import cognito = cinerino.cognito;
export import pecorino = cinerino.pecorino;
export import waiter = cinerino.waiter;
export import errors = cinerino.errors;
export import errorCode = cinerino.errorCode;

export import actionStatusType = cinerino.actionStatusType;
export import actionType = cinerino.actionType;
export namespace action {
    export import IAction = cinerino.action.IAction;
    export import IAttributes = cinerino.action.IAttributes;
    export import IParticipant = cinerino.action.IParticipant;
    export import IPurpose = cinerino.action.IPurpose;
    export import ISortOrder = cinerino.action.ISortOrder;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = cinerino.action.authorize.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = cinerino.action.authorize.IAttributes;
        export import award = cinerino.action.authorize.award;
        // tslint:disable-next-line:no-shadowed-variable
        export import paymentMethod = cinerino.action.authorize.paymentMethod;
        export namespace discount {
            export import mvtk = MvtkAuthorizeActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace offer {
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = ProgramMembershipOfferAuthorizeActionFactory;
            export import seatReservation = SeatReservationOfferAuthorizeActionFactory;
        }
    }

    export namespace interact {
        export import confirm = cinerino.action.interact.confirm;
        export namespace register {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = RegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = RegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = RegisterProgramMembershipActionFactory;
        }
        export namespace unRegister {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = UnRegisterActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = UnRegisterActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import programMembership = UnRegisterProgramMembershipActionFactory;
        }
    }

    export namespace trade {
        // tslint:disable-next-line:no-shadowed-variable
        export import order = OrderActionFactory;
        export import pay = cinerino.action.trade.pay;
        export import refund = cinerino.action.trade.refund;
    }

    export namespace transfer {
        export import give = cinerino.action.transfer.give;
        export import print = cinerino.action.transfer.print;
        export import returnAction = cinerino.action.transfer.returnAction;
        export namespace send {
            export import message = cinerino.action.transfer.send.message;
            // tslint:disable-next-line:no-shadowed-variable
            export import order = SendOrderActionFactory;
        }
    }

    export namespace consume {
        export namespace use {
            export import mvtk = UseMvtkActionFactory;
        }
    }
}

export import accountType = cinerino.accountType;
export import encodingFormat = cinerino.encodingFormat;
export import paymentMethod = cinerino.paymentMethod;
export import clientUser = cinerino.clientUser;
export namespace creativeWork {
    export import message = cinerino.creativeWork.message;
    export import movie = cinerino.chevre.creativeWork.movie;
}
export import creativeWorkType = cinerino.creativeWorkType;
export import event = cinerino.chevre.event;
export import eventStatusType = chevre.eventStatusType;
export import eventType = chevre.eventType;
export import invoice = cinerino.invoice;
export import monetaryAmount = cinerino.monetaryAmount;
export import multilingualString = cinerino.multilingualString;
export namespace offer {
    export import OfferType = cinerino.offer.OfferType;
    export import IOffer = cinerino.offer.IOffer;
    export import seatReservation = SeatReservationOfferFactory;
}
export import order = cinerino.order;
export import orderStatus = cinerino.orderStatus;
export import organizationType = cinerino.organizationType;
export import ownershipInfo = cinerino.ownershipInfo;
export import priceCurrency = cinerino.priceCurrency;
export import place = cinerino.chevre.place;
export import paymentMethodType = cinerino.paymentMethodType;
export import paymentStatusType = cinerino.paymentStatusType;
export import person = PersonFactory;
export import personType = cinerino.personType;
export import placeType = chevre.placeType;
export import programMembership = ProgramMembershipFactory;
export import propertyValue = cinerino.propertyValue;
export import quantitativeValue = cinerino.quantitativeValue;
export import reservation = cinerino.chevre.reservation;
export import reservationStatusType = chevre.reservationStatusType;
export import reservationType = chevre.reservationType;
export import service = cinerino.service;
export import seller = cinerino.seller;
export namespace task {
    export type IData<T extends taskName | string> =
        T extends taskName.CancelAccount ? cinerino.task.IData<taskName.CancelAccount> :
        T extends taskName.CancelCreditCard ? cinerino.task.IData<taskName.CancelCreditCard> :
        T extends taskName.CancelPointAward ? cinerino.task.IData<taskName.CancelPointAward> :
        T extends taskName.CancelSeatReservation ? cinerino.task.IData<taskName.CancelSeatReservation> :
        T extends taskName.ConfirmReservation ? cinerino.task.IData<taskName.ConfirmReservation> :
        T extends taskName.GivePointAward ? cinerino.task.IData<taskName.GivePointAward> :
        T extends taskName.ImportScreeningEvents ? cinerino.task.IData<taskName.ImportScreeningEvents> :
        T extends taskName.PlaceOrder ? cinerino.task.IData<taskName.PlaceOrder> :
        T extends taskName.RefundAccount ? cinerino.task.IData<taskName.RefundAccount> :
        T extends taskName.RefundCreditCard ? cinerino.task.IData<taskName.RefundCreditCard> :
        T extends taskName.RefundMovieTicket ? cinerino.task.IData<taskName.RefundMovieTicket> :
        T extends taskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IData :
        T extends taskName.ReturnOrder ? cinerino.task.IData<taskName.ReturnOrder> :
        T extends taskName.ReturnPointAward ? cinerino.task.IData<taskName.ReturnPointAward> :
        T extends taskName.SendEmailMessage ? cinerino.task.IData<taskName.SendEmailMessage> :
        T extends taskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends taskName.PayAccount ? cinerino.task.IData<taskName.PayAccount> :
        T extends taskName.PayCreditCard ? cinerino.task.IData<taskName.PayCreditCard> :
        T extends taskName.PayMovieTicket ? cinerino.task.IData<taskName.PayMovieTicket> :
        T extends taskName.TriggerWebhook ? cinerino.task.IData<taskName.TriggerWebhook> :
        T extends taskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IData :
        TaskFactory.IData;
    export type IAttributes<T extends taskName | string> =
        T extends taskName.CancelAccount ? cinerino.task.IAttributes<taskName.CancelAccount> :
        T extends taskName.CancelCreditCard ? cinerino.task.IAttributes<taskName.CancelCreditCard> :
        T extends taskName.CancelPointAward ? cinerino.task.IAttributes<taskName.CancelPointAward> :
        T extends taskName.CancelSeatReservation ? cinerino.task.IAttributes<taskName.CancelSeatReservation> :
        T extends taskName.ConfirmReservation ? cinerino.task.IAttributes<taskName.ConfirmReservation> :
        T extends taskName.GivePointAward ? cinerino.task.IAttributes<taskName.GivePointAward> :
        T extends taskName.ImportScreeningEvents ? cinerino.task.IAttributes<taskName.ImportScreeningEvents> :
        T extends taskName.PlaceOrder ? cinerino.task.IAttributes<taskName.PlaceOrder> :
        T extends taskName.RefundAccount ? cinerino.task.IAttributes<taskName.RefundAccount> :
        T extends taskName.RefundCreditCard ? cinerino.task.IAttributes<taskName.RefundCreditCard> :
        T extends taskName.RefundMovieTicket ? cinerino.task.IAttributes<taskName.RefundMovieTicket> :
        T extends taskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IAttributes :
        T extends taskName.ReturnOrder ? cinerino.task.IAttributes<taskName.ReturnOrder> :
        T extends taskName.ReturnPointAward ? cinerino.task.IAttributes<taskName.ReturnPointAward> :
        T extends taskName.SendEmailMessage ? cinerino.task.IAttributes<taskName.SendEmailMessage> :
        T extends taskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends taskName.PayAccount ? cinerino.task.IAttributes<taskName.PayAccount> :
        T extends taskName.PayCreditCard ? cinerino.task.IAttributes<taskName.PayCreditCard> :
        T extends taskName.PayMovieTicket ? cinerino.task.IAttributes<taskName.PayMovieTicket> :
        T extends taskName.TriggerWebhook ? cinerino.task.IAttributes<taskName.TriggerWebhook> :
        T extends taskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IAttributes :
        TaskFactory.IAttributes;
    export type ITask<T extends taskName | string> =
        T extends taskName.CancelAccount ? cinerino.task.ITask<taskName.CancelAccount> :
        T extends taskName.CancelCreditCard ? cinerino.task.ITask<taskName.CancelCreditCard> :
        T extends taskName.CancelPointAward ? cinerino.task.ITask<taskName.CancelPointAward> :
        T extends taskName.CancelSeatReservation ? cinerino.task.ITask<taskName.CancelSeatReservation> :
        T extends taskName.ConfirmReservation ? cinerino.task.ITask<taskName.ConfirmReservation> :
        T extends taskName.GivePointAward ? cinerino.task.ITask<taskName.GivePointAward> :
        T extends taskName.ImportScreeningEvents ? cinerino.task.ITask<taskName.ImportScreeningEvents> :
        T extends taskName.PlaceOrder ? cinerino.task.ITask<taskName.PlaceOrder> :
        T extends taskName.RefundAccount ? cinerino.task.ITask<taskName.RefundAccount> :
        T extends taskName.RefundCreditCard ? cinerino.task.ITask<taskName.RefundCreditCard> :
        T extends taskName.RefundMovieTicket ? cinerino.task.ITask<taskName.RefundMovieTicket> :
        T extends taskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.ITask :
        T extends taskName.ReturnOrder ? cinerino.task.ITask<taskName.ReturnOrder> :
        T extends taskName.ReturnPointAward ? cinerino.task.ITask<taskName.ReturnPointAward> :
        T extends taskName.SendEmailMessage ? cinerino.task.ITask<taskName.SendEmailMessage> :
        T extends taskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends taskName.PayAccount ? cinerino.task.ITask<taskName.PayAccount> :
        T extends taskName.PayCreditCard ? cinerino.task.ITask<taskName.PayCreditCard> :
        T extends taskName.PayMovieTicket ? cinerino.task.ITask<taskName.PayMovieTicket> :
        T extends taskName.TriggerWebhook ? cinerino.task.ITask<taskName.TriggerWebhook> :
        T extends taskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.ITask :
        TaskFactory.ITask;
    export type ISearchConditions<T extends taskName | string> = TaskFactory.ISearchConditions<T>;
    export type IExecutionResult = TaskFactory.IExecutionResult;
}
export import sortType = cinerino.sortType;
export import taskName = cinerino.taskName;
export import taskStatus = cinerino.taskStatus;
export import transaction = cinerino.transaction;
export import transactionStatusType = cinerino.transactionStatusType;
export import transactionTasksExportationStatus = cinerino.transactionTasksExportationStatus;
export import transactionType = cinerino.transactionType;
export import unitCode = cinerino.unitCode;
