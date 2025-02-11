/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as AccelBooks from "../../../../../api/index";
import * as core from "../../../../../core";

export const PostCompanyRequest: core.serialization.Schema<
    serializers.PostCompanyRequest.Raw,
    AccelBooks.PostCompanyRequest
> = core.serialization.object({
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    legalName: core.serialization.property("legal_name", core.serialization.string().optional()),
    tin: core.serialization.string().optional(),
    usState: core.serialization.property("us_state", core.serialization.string().optional()),
    entityType: core.serialization.property("entity_type", core.serialization.string().optional()),
    phoneNumber: core.serialization.property("phone_number", core.serialization.string().optional()),
});

export declare namespace PostCompanyRequest {
    interface Raw {
        external_id?: string | null;
        legal_name?: string | null;
        tin?: string | null;
        us_state?: string | null;
        entity_type?: string | null;
        phone_number?: string | null;
    }
}
