export interface Suppression {
    EmailAddress: string;
    SuppressionReason: string;
    Origin: string;
    CreatedAt: string;
}

export interface Suppressions {
    Suppressions: Suppression[];
}

export interface SuppressionStatus {
    EmailAddress: string;
    Status: string;
    Message: string;
}

export interface SuppressionStatuses {
    Suppressions: SuppressionStatus[];
}

interface SuppressionEntries {
    Suppressions: Array<{EmailAddress: string}>;
}

export type CreateSuppressionsRequest = SuppressionEntries;
export type DeleteSuppressionsRequest = CreateSuppressionsRequest;
