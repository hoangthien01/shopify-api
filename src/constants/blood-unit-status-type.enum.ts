export enum BloodUnitStatus {
    Storage = 1,
    Used = 2,
    Deleted = 3
}

export type BloodUnitStatusType = keyof typeof BloodUnitStatus;
