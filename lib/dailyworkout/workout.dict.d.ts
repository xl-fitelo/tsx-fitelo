import { ExerciseDict } from "../exercise/exercise.dict";
export interface WorkoutDict {
    id?: number;
    time?: string;
    workoutDone?: boolean;
    exerciseDicts?: ExerciseDict[];
}
