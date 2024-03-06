export enum BloodGroup {
    A = 1,
    B = 2,
    O = 3,
    AB = 4
}

export type BloodGroupType = keyof typeof BloodGroup;
