export declare class CreateTeamDto {
    name: string;
    teamLeader: number;
    memberIds: number[];
    constructor(name: string, teamLeader: number, ids: number[]);
    validate(): Promise<boolean>;
}
