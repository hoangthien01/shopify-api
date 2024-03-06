export enum EventStatus {
    PendingApprove = 1,
    Approved,
    Rejected,
    Active,
    Closed
}

export type EventStatusType = keyof typeof EventStatus;
