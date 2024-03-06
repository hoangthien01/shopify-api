export enum BloodType {
    APlus = 'A+',
    AMinus = 'A-',
    BPlus = 'B+',
    BMinus = 'B-',
    OPlus = 'O+',
    OMinus = 'O-',
    ABPlus = 'AB+',
    ABMinus = 'AB-'
}

export type BloodTypeType = keyof typeof BloodType;
