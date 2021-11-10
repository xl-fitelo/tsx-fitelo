import { MealDict } from './meal.dict';
export interface DailyDietDict {
    id?: number;
    name?: string;
    day?: number;
    submittedBy?: number | null;
    approvedBy?: number | null;
    status?: string | null;
    mealDicts?: MealDict[] | null;
}
