export declare class UpdateAdminDto {
    email?: string;
    phone?: string;
    name?: string;
    photoURL?: string;
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
    roleId?: number | null;
    teamId?: number | null;
    status?: string;
    reportsPinnedBy?: number[] | null;
    constructor();
    validate(): Promise<boolean>;
}
