import { MealDto } from './meal.dto';
import { WorkoutDto } from './workout.dto';
export declare class CreateRoutineDto {
    date: string;
    meals?: MealDto[];
    workouts?: WorkoutDto[];
    constructor(date: string);
    validate(): Promise<boolean>;
}
