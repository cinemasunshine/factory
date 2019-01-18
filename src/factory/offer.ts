import * as cinerino from '@cinerino/factory';

export type OfferType = cinerino.offer.OfferType;

/**
 * offer interface
 * An offer to transfer some rights to an item or to provide a service
 * — for example, an offer to sell tickets to an event, to rent the DVD of a movie,
 * to stream a TV show over the internet, to repair a motorcycle, or to loan a book.
 */
export interface IOffer extends cinerino.offer.IOffer {
    // typeOf: OfferType;
    /**
     * オファー識別子
     */
    identifier?: string;
    price: number;
}
