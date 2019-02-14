/**
 * factory
 */
import * as cinerino from '@cinerino/factory';

import * as ActionFactory from './factory/action';
import * as AuthorizeActionFactory from './factory/action/authorize';
import * as AuthorizePointAwardActionFactory from './factory/action/authorize/award/point';
import * as MvtkAuthorizeActionFactory from './factory/action/authorize/discount/mvtk';
import * as ProgramMembershipOfferAuthorizeActionFactory from './factory/action/authorize/offer/programMembership';
import * as SeatReservationOfferAuthorizeActionFactory from './factory/action/authorize/offer/seatReservation';
import * as AuthorizeAccountPaymentActionFactory from './factory/action/authorize/paymentMethod/account';
import * as AuthorizeAnyPaymentActionFactory from './factory/action/authorize/paymentMethod/any';
import * as CreditCardAuthorizeActionFactory from './factory/action/authorize/paymentMethod/creditCard';
import * as UseMvtkActionFactory from './factory/action/consume/use/mvtk';
import * as ConfirmReservationActionFactory from './factory/action/interact/confirm/reservation';
import * as RegisterActionFactory from './factory/action/interact/register';
import * as RegisterProgramMembershipActionFactory from './factory/action/interact/register/programMembership';
import * as UnRegisterActionFactory from './factory/action/interact/unRegister';
import * as UnRegisterProgramMembershipActionFactory from './factory/action/interact/unRegister/programMembership';
import * as OrderActionFactory from './factory/action/trade/order';
import * as PayActionFactory from './factory/action/trade/pay';
import * as RefundActionFactory from './factory/action/trade/refund';
import * as GiveActionFactory from './factory/action/transfer/give';
import * as GivePointAwardActionFactory from './factory/action/transfer/give/pointAward';
import * as PrintActionFactory from './factory/action/transfer/print';
import * as PrintTicketActionFactory from './factory/action/transfer/print/ticket';
import * as ReturnOrderActionFactory from './factory/action/transfer/return/order';
import * as ReturnPointAwardActionFactory from './factory/action/transfer/return/pointAward';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import * as SendOrderActionFactory from './factory/action/transfer/send/order';

import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import * as MovieCreativeWorkFactory from './factory/creativeWork/movie';
import * as ScreeningEventFactory from './factory/event/screeningEvent';
import * as ScreeningEventSeriesFactory from './factory/event/screeningEventSeries';
import IMultilingualString from './factory/multilingualString';
import * as SeatReservationOfferFactory from './factory/offer/seatReservation';
import * as OrganizationFactory from './factory/organization';
import * as OwnershipInfoFactory from './factory/ownershipInfo';
import * as CreditCardFactory from './factory/paymentMethod/paymentCard/creditCard';
import PaymentMethodType from './factory/paymentMethodType';
import * as PersonFactory from './factory/person';
import * as ProgramMembershipFactory from './factory/programMembership';
import * as PropertyValueFactory from './factory/propertyValue';
import * as QuantitativeValueFactory from './factory/quantitativeValue';
import * as EventReservationFactory from './factory/reservation/event';
import * as WebAPIServiceFactory from './factory/service/webAPI';
import SortType from './factory/sortType';
import { UnitCode } from './factory/unitCode';

import * as CancelAccountTaskFactory from './factory/task/cancelAccount';
import * as CancelCreditCardTaskFactory from './factory/task/cancelCreditCard';
import * as CancelPointAwardTaskFactory from './factory/task/cancelPointAward';
import * as CancelSeatReservationTaskFactory from './factory/task/cancelSeatReservation';
import * as ConfirmReservationTaskFactory from './factory/task/confirmReservation';
import * as GivePointAwardTaskFactory from './factory/task/givePointAward';
import * as ImportScreeningEventsTaskFactory from './factory/task/importScreeningEvents';
import * as PayAccountTaskFactory from './factory/task/payAccount';
import * as PayCreditCardTaskFactory from './factory/task/payCreditCard';
import * as PayMovieTicketTaskFactory from './factory/task/payMovieTicket';
import * as PlaceOrderTaskFactory from './factory/task/placeOrder';
import * as RefundAccountTaskFactory from './factory/task/refundAccount';
import * as RefundCreditCardTaskFactory from './factory/task/refundCreditCard';
import * as RefundMovieTicketTaskFactory from './factory/task/refundMovieTicket';
import * as RegisterProgramMembershipTaskFactory from './factory/task/registerProgramMembership';
import * as ReturnOrderTaskFactory from './factory/task/returnOrder';
import * as ReturnPointAwardTaskFactory from './factory/task/returnPointAward';
import * as SendEmailMessageTaskFactory from './factory/task/sendEmailMessage';
import * as SendOrderTaskFactory from './factory/task/sendOrder';
import * as TriggerWebhookTaskFactory from './factory/task/triggerWebhook';
import * as UnRegisterProgramMembershipTaskFactory from './factory/task/unRegisterProgramMembership';

import * as TaskFactory from './factory/task';
import * as TransactionFactory from './factory/transaction';
import * as PlaceOrderTransactionFactory from './factory/transaction/placeOrder';
import * as ReturnOrderTransactionFactory from './factory/transaction/returnOrder';

export import chevre = cinerino.chevre;
export import cognito = cinerino.cognito;
export import pecorino = cinerino.pecorino;
export import waiter = cinerino.waiter;
export import errors = cinerino.errors;
export import errorCode = cinerino.errorCode;

export import actionStatusType = cinerino.actionStatusType;
export import actionType = cinerino.actionType;
export namespace action {
    export import ISortOrder = ActionFactory.ISortOrder;
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;

    export namespace authorize {
        // tslint:disable-next-line:no-shadowed-variable
        export import IAction = AuthorizeActionFactory.IAction;
        // tslint:disable-next-line:no-shadowed-variable
        export import IAttributes = AuthorizeActionFactory.IAttributes;
        export namespace award {
            // tslint:disable-next-line:no-shadowed-variable
            export import point = AuthorizePointAwardActionFactory;
        }
        // tslint:disable-next-line:no-shadowed-variable
        export namespace paymentMethod {
            export import account = AuthorizeAccountPaymentActionFactory;
            export import any = AuthorizeAnyPaymentActionFactory;
            export import creditCard = CreditCardAuthorizeActionFactory;
            /**
             * @alias account
             * @deprecated Use account
             */
            // tslint:disable-next-line:no-shadowed-variable
            export import pecorino = account;
        }
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
        export namespace confirm {
            // tslint:disable-next-line:no-shadowed-variable
            export import reservation = ConfirmReservationActionFactory;
        }
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
        export import pay = PayActionFactory;
        export import refund = RefundActionFactory;
    }

    export namespace transfer {
        export namespace give {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = GiveActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = GiveActionFactory.IAttributes;
            // tslint:disable-next-line:no-shadowed-variable
            export import pointAward = GivePointAwardActionFactory;
        }

        export namespace print {
            // tslint:disable-next-line:no-shadowed-variable
            export import IAction = PrintActionFactory.IAction;
            // tslint:disable-next-line:no-shadowed-variable
            export import IAttributes = PrintActionFactory.IAttributes;
            export import IRecipient = PrintActionFactory.IRecipient;
            export import ticket = PrintTicketActionFactory;
        }

        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        export namespace returnAction {
            // tslint:disable-next-line:no-shadowed-variable
            export import order = ReturnOrderActionFactory;
            export import pointAward = ReturnPointAwardActionFactory;
        }

        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
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
export namespace paymentMethod {
    export type ISearchConditions<T extends PaymentMethodType> =
        T extends PaymentMethodType.CreditCard ? CreditCardFactory.ISearchConditions :
        // T extends PaymentMethodType.MovieTicket ? MovieTicketFactory.ISearchConditions :
        never;
    export namespace paymentCard {
        export import creditCard = CreditCardFactory;
        // export import movieTicket = MovieTicketFactory;
    }
}
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
    export import movie = MovieCreativeWorkFactory;
}
export import creativeWorkType = cinerino.creativeWorkType;
export namespace event {
    export import screeningEvent = ScreeningEventFactory;
    export import screeningEventSeries = ScreeningEventSeriesFactory;
}
export import eventStatusType = chevre.eventStatusType;
export import eventType = chevre.eventType;
export import invoice = cinerino.invoice;
export import monetaryAmount = cinerino.monetaryAmount;
export type multilingualString = IMultilingualString;
export namespace offer {
    export import OfferType = cinerino.offer.OfferType;
    export import IOffer = cinerino.offer.IOffer;
    export import seatReservation = SeatReservationOfferFactory;
}
export import order = cinerino.order;
export import orderStatus = cinerino.orderStatus;
export import organizationType = cinerino.organizationType;
export import ownershipInfo = OwnershipInfoFactory;
export import priceCurrency = cinerino.priceCurrency;
export namespace place {
    export import movieTheater = chevre.place.movieTheater;
}
export import paymentMethodType = PaymentMethodType;
export import paymentStatusType = cinerino.paymentStatusType;
export import person = PersonFactory;
export import personType = cinerino.personType;
export import placeType = chevre.placeType;
export import programMembership = ProgramMembershipFactory;
export import propertyValue = PropertyValueFactory;
export import quantitativeValue = QuantitativeValueFactory;
export namespace reservation {
    export import IReservation = chevre.reservation.IReservation;
    export import ISeat = chevre.reservation.ISeat;
    export import ITicket = chevre.reservation.ITicket;
    export import IUnderName = chevre.reservation.IUnderName;
    export import TicketType = chevre.reservation.TicketType;
    // tslint:disable-next-line:no-shadowed-variable
    export import event = EventReservationFactory;
}
export import reservationStatusType = chevre.reservationStatusType;
export import reservationType = chevre.reservationType;
export namespace service {
    export import webAPI = WebAPIServiceFactory;
}
export import seller = OrganizationFactory;
export namespace task {
    export type IData<T extends taskName | string> =
        T extends taskName.CancelAccount ? CancelAccountTaskFactory.IData :
        T extends taskName.CancelCreditCard ? CancelCreditCardTaskFactory.IData :
        T extends taskName.CancelPointAward ? CancelPointAwardTaskFactory.IData :
        T extends taskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IData :
        T extends taskName.ConfirmReservation ? ConfirmReservationTaskFactory.IData :
        T extends taskName.GivePointAward ? GivePointAwardTaskFactory.IData :
        T extends taskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.IData :
        T extends taskName.PlaceOrder ? PlaceOrderTaskFactory.IData :
        T extends taskName.RefundAccount ? RefundAccountTaskFactory.IData :
        T extends taskName.RefundCreditCard ? RefundCreditCardTaskFactory.IData :
        T extends taskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.IData :
        T extends taskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IData :
        T extends taskName.ReturnOrder ? ReturnOrderTaskFactory.IData :
        T extends taskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IData :
        T extends taskName.SendEmailMessage ? SendEmailMessageTaskFactory.IData :
        T extends taskName.SendOrder ? SendOrderTaskFactory.IData :
        T extends taskName.PayAccount ? PayAccountTaskFactory.IData :
        T extends taskName.PayCreditCard ? PayCreditCardTaskFactory.IData :
        T extends taskName.PayMovieTicket ? PayMovieTicketTaskFactory.IData :
        T extends taskName.TriggerWebhook ? TriggerWebhookTaskFactory.IData :
        T extends taskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IData :
        TaskFactory.IData;
    export type IAttributes<T extends taskName | string> =
        T extends taskName.CancelAccount ? CancelAccountTaskFactory.IAttributes :
        T extends taskName.CancelCreditCard ? CancelCreditCardTaskFactory.IAttributes :
        T extends taskName.CancelPointAward ? CancelPointAwardTaskFactory.IAttributes :
        T extends taskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.IAttributes :
        T extends taskName.ConfirmReservation ? ConfirmReservationTaskFactory.IAttributes :
        T extends taskName.GivePointAward ? GivePointAwardTaskFactory.IAttributes :
        T extends taskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.IAttributes :
        T extends taskName.PlaceOrder ? PlaceOrderTaskFactory.IAttributes :
        T extends taskName.RefundAccount ? RefundAccountTaskFactory.IAttributes :
        T extends taskName.RefundCreditCard ? RefundCreditCardTaskFactory.IAttributes :
        T extends taskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.IAttributes :
        T extends taskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.IAttributes :
        T extends taskName.ReturnOrder ? ReturnOrderTaskFactory.IAttributes :
        T extends taskName.ReturnPointAward ? ReturnPointAwardTaskFactory.IAttributes :
        T extends taskName.SendEmailMessage ? SendEmailMessageTaskFactory.IAttributes :
        T extends taskName.SendOrder ? SendOrderTaskFactory.IAttributes :
        T extends taskName.PayAccount ? PayAccountTaskFactory.IAttributes :
        T extends taskName.PayCreditCard ? PayCreditCardTaskFactory.IAttributes :
        T extends taskName.PayMovieTicket ? PayMovieTicketTaskFactory.IAttributes :
        T extends taskName.TriggerWebhook ? TriggerWebhookTaskFactory.IAttributes :
        T extends taskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.IAttributes :
        TaskFactory.IAttributes;
    export type ITask<T extends taskName | string> =
        T extends taskName.CancelAccount ? CancelAccountTaskFactory.ITask :
        T extends taskName.CancelCreditCard ? CancelCreditCardTaskFactory.ITask :
        T extends taskName.CancelPointAward ? CancelPointAwardTaskFactory.ITask :
        T extends taskName.CancelSeatReservation ? CancelSeatReservationTaskFactory.ITask :
        T extends taskName.ConfirmReservation ? ConfirmReservationTaskFactory.ITask :
        T extends taskName.GivePointAward ? GivePointAwardTaskFactory.ITask :
        T extends taskName.ImportScreeningEvents ? ImportScreeningEventsTaskFactory.ITask :
        T extends taskName.PlaceOrder ? PlaceOrderTaskFactory.ITask :
        T extends taskName.RefundAccount ? RefundAccountTaskFactory.ITask :
        T extends taskName.RefundCreditCard ? RefundCreditCardTaskFactory.ITask :
        T extends taskName.RefundMovieTicket ? RefundMovieTicketTaskFactory.ITask :
        T extends taskName.RegisterProgramMembership ? RegisterProgramMembershipTaskFactory.ITask :
        T extends taskName.ReturnOrder ? ReturnOrderTaskFactory.ITask :
        T extends taskName.ReturnPointAward ? ReturnPointAwardTaskFactory.ITask :
        T extends taskName.SendEmailMessage ? SendEmailMessageTaskFactory.ITask :
        T extends taskName.SendOrder ? SendOrderTaskFactory.ITask :
        T extends taskName.PayAccount ? PayAccountTaskFactory.ITask :
        T extends taskName.PayCreditCard ? PayCreditCardTaskFactory.ITask :
        T extends taskName.PayMovieTicket ? PayMovieTicketTaskFactory.ITask :
        T extends taskName.TriggerWebhook ? TriggerWebhookTaskFactory.ITask :
        T extends taskName.UnRegisterProgramMembership ? UnRegisterProgramMembershipTaskFactory.ITask :
        TaskFactory.ITask;
    export type ISearchConditions<T extends taskName | string> = TaskFactory.ISearchConditions<T>;
    export type IExecutionResult = TaskFactory.IExecutionResult;
}
export import sortType = SortType;
export import taskName = cinerino.taskName;
export import taskStatus = cinerino.taskStatus;
export namespace transaction {
    export type ISortOrder = TransactionFactory.ISortOrder;
    export type ISearchConditions<T extends transactionType> =
        T extends transactionType.PlaceOrder ? PlaceOrderTransactionFactory.ISearchConditions :
        T extends transactionType.ReturnOrder ? ReturnOrderTransactionFactory.ISearchConditions :
        never;
    export type IStartParams<T extends transactionType> =
        T extends transactionType.PlaceOrder ? PlaceOrderTransactionFactory.IStartParams :
        T extends transactionType.ReturnOrder ? ReturnOrderTransactionFactory.IStartParams :
        never;
    export type IResult<T extends transactionType> =
        T extends transactionType.PlaceOrder ? PlaceOrderTransactionFactory.IResult :
        T extends transactionType.ReturnOrder ? ReturnOrderTransactionFactory.IResult :
        never;
    export type IPotentialActions<T extends transactionType> =
        T extends transactionType.PlaceOrder ? PlaceOrderTransactionFactory.IPotentialActions :
        T extends transactionType.ReturnOrder ? ReturnOrderTransactionFactory.IPotentialActions :
        never;
    export type IAttributes<T extends transactionType> =
        T extends transactionType.PlaceOrder ? PlaceOrderTransactionFactory.IAttributes :
        T extends transactionType.ReturnOrder ? ReturnOrderTransactionFactory.IAttributes :
        never;
    export type ITransaction<T extends transactionType> =
        T extends transactionType.PlaceOrder ? PlaceOrderTransactionFactory.ITransaction :
        T extends transactionType.ReturnOrder ? ReturnOrderTransactionFactory.ITransaction :
        never;
    export import placeOrder = PlaceOrderTransactionFactory;
    export import returnOrder = ReturnOrderTransactionFactory;
}
export import transactionStatusType = cinerino.transactionStatusType;
export import transactionTasksExportationStatus = cinerino.transactionTasksExportationStatus;
export import transactionType = cinerino.transactionType;
export import unitCode = UnitCode;
