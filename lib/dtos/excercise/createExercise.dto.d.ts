export declare class CreateExerciseDto {
    name?: string;
    videoLink?: string;
    thumbnail?: string;
    duration?: string;
    caloriesBurn?: number;
    constructor();
    validate(): Promise<boolean>;
}
