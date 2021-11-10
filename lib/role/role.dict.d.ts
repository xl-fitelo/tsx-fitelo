export interface PermissionDict {
    name?: string;
    menu?: boolean;
    view?: boolean;
    add?: boolean;
    edit?: boolean;
    delete?: boolean;
}
export interface RoleDict {
    id?: number;
    name?: string;
    permissions?: PermissionDict[];
}
