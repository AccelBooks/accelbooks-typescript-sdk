/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Company } from "./api/resources/company/client/Client";
import { Export } from "./api/resources/export/client/Client";
import { Chat } from "./api/resources/chat/client/Client";
import { Transactions } from "./api/resources/transactions/client/Client";
import { Finch } from "./api/resources/finch/client/Client";
import { Reports } from "./api/resources/reports/client/Client";
import { Category } from "./api/resources/category/client/Client";

export declare namespace AccelBooksClient {
    interface Options {
        environment: core.Supplier<string>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class AccelBooksClient {
    constructor(protected readonly _options: AccelBooksClient.Options) {}

    protected _company: Company | undefined;

    public get company(): Company {
        return (this._company ??= new Company(this._options));
    }

    protected _export: Export | undefined;

    public get export(): Export {
        return (this._export ??= new Export(this._options));
    }

    protected _chat: Chat | undefined;

    public get chat(): Chat {
        return (this._chat ??= new Chat(this._options));
    }

    protected _transactions: Transactions | undefined;

    public get transactions(): Transactions {
        return (this._transactions ??= new Transactions(this._options));
    }

    protected _finch: Finch | undefined;

    public get finch(): Finch {
        return (this._finch ??= new Finch(this._options));
    }

    protected _reports: Reports | undefined;

    public get reports(): Reports {
        return (this._reports ??= new Reports(this._options));
    }

    protected _category: Category | undefined;

    public get category(): Category {
        return (this._category ??= new Category(this._options));
    }
}
