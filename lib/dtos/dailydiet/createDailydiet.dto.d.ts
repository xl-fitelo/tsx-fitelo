import { MealDto } from '../routine/meal.dto';
export declare class CreateDailyDietDto {
    name?: string;
    submittedBy?: number;
    approvedBy?: number;
    status?: string;
    meals?: MealDto[];
    constructor();
    validate(): Promise<boolean>;
}
