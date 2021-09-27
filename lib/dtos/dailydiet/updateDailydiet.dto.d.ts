import { MealDto } from '../routine/meal.dto';
export declare class UpdateDailyDietDto {
    name?: string;
    submittedBy?: number;
    approvedBy?: number;
    status?: string;
    meals?: MealDto[];
    constructor();
    validate(): Promise<boolean>;
}
