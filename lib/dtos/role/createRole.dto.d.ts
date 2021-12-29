export declare class Permission {
    name: string;
    menu: boolean;
    view: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
    constructor(name: string, menu: boolean, view: boolean, add: boolean, edit: boolean, remove: boolean);
}
export declare class CreateRoleDto {
    name: string;
    permissions: Permission[];
    constructor(name: string, permissions: Permission[]);
    validate(): Promise<boolean>;
}
