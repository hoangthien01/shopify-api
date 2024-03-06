export enum PatientStatus {
    Active = 1,
    Closed
}

export type PatientStatusType = keyof typeof PatientStatus;
