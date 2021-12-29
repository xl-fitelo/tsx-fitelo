import { DailyDietDto } from './dailyDiet.dto';
export declare class UpdateWeeklydietDto {
    name?: string;
    conditions?: string[];
    dietPreference?: string;
    firstMajorFood?: string;
    secondMajorFood?: string;
    target?: string;
    portionSize?: string;
    residenceType?: string;
    submittedBy?: number;
    approvedBy?: number;
    status?: string;
    dailyDiets?: DailyDietDto[];
    constructor();
    validate(): Promise<boolean>;
}
