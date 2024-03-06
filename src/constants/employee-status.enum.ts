export enum EmployeeStatus {
    Inviting = 1,
    Active,
    Disabled
}

export type EmployeeStatusType = keyof typeof EmployeeStatus;
