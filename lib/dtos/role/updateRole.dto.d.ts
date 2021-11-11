import { Permission } from './createRole.dto';
export declare class UpdateRoleDto {
    name?: string;
    permissions?: Permission[];
    constructor();
    validate(): Promise<boolean>;
}
