export declare class UpdateTeamDto {
    name?: string;
    teamLeader?: number;
    constructor();
    validate(): Promise<boolean>;
}
