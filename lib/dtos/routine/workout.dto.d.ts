export declare class ExerciseDto {
    id?: number | string;
    sets?: number;
    repsPerSet?: number;
    duration?: string;
    constructor();
}
export declare class WorkoutDto {
    id?: number;
    time?: string;
    workoutDone?: boolean;
    exercises?: ExerciseDto[];
    constructor();
}
