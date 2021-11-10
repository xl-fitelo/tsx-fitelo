import { MealDto } from './meal.dto';
import { WorkoutDto } from './workout.dto';
export declare class UpdateRoutineDto {
    meals?: MealDto[];
    workouts?: WorkoutDto[];
    constructor();
    validate(): Promise<boolean>;
}
