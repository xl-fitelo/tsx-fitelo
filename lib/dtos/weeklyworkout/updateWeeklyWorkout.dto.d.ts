import { DailyWorkoutDto } from './dailyWorkout.dto';
export declare class UpdateWeeklyworkoutDto {
    name?: string;
    bmi?: string;
    level?: string;
    ageGroup?: string;
    target?: string;
    type?: string;
    equipment?: string;
    submittedBy?: number;
    approvedBy?: number;
    status?: string;
    dailyWorkouts?: DailyWorkoutDto[];
    constructor();
    validate(): Promise<boolean>;
}
