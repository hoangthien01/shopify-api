export enum AppointmentHistoryStatus {
    PendingApprove = 1,
    Approved,
    Rejected,
    ResultCreated,
    Responded,
    Closed
}

export type AppointmentHistoryStatusType = keyof typeof AppointmentHistoryStatus;
