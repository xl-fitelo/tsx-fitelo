export declare class CreateAdminDto {
    email?: string;
    phone?: string;
    password: string;
    name?: string;
    displayName?: string;
    emergencyPhone?: string;
    personalEmail?: string;
    joiningDate?: string;
    reportingManager?: number;
    address?: string;
    experience?: string;
    city?: string;
    code?: string;
    skillSet?: string;
    specialSkill?: string;
    roleId: number;
    constructor(password: string, roleId: number);
    validate(): Promise<boolean>;
}
