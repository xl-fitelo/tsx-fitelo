import { WorkoutDto } from '../routine/workout.dto';
export declare class CreateDailyWorkoutDto {
    name?: string;
    submittedBy?: number;
    approvedBy?: number;
    status?: string;
    workouts?: WorkoutDto[];
    constructor();
    validate(): Promise<boolean>;
}
