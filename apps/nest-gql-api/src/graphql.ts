
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Invoice {
    id?: Nullable<string>;
    currency?: Nullable<string>;
    amount?: Nullable<string>;
}

export interface IQuery {
    getInvoice(id?: Nullable<string>): Nullable<Invoice> | Promise<Nullable<Invoice>>;
}

export interface ISubscription {
    invoiceRequested(): Nullable<SubscriptionPayload> | Promise<Nullable<SubscriptionPayload>>;
}

export interface SubscriptionPayload {
    invoiceId?: Nullable<string>;
    tag?: Nullable<string>;
}

type Nullable<T> = T | null;
