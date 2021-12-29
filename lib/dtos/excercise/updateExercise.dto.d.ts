export declare class UpdateExerciseDto {
    name?: string;
    videoLink?: string;
    thumbnail?: string;
    duration?: string;
    caloriesBurn?: number;
    constructor();
    validate(): Promise<boolean>;
}
