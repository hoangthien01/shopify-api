export enum Permission {
    View = 'view',
    Edit = 'edit',
    Delete = 'delete',
    Create = 'create'
}

export type PermissionType = keyof typeof Permission;
