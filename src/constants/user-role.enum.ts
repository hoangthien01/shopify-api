export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    HOSPITAL = 'HOSPITAL',
    COUNCIL = 'COUNCIL',
    EMPLOYEE = 'EMPLOYEE'
}

export type UserRoleType = keyof typeof UserRole;
