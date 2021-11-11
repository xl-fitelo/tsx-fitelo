import { Macro } from './macro';
export declare class UpdateRecipeDto {
    name?: string;
    conditions?: string[];
    calories?: number;
    blogLink?: string;
    groceryIds?: number[];
    macros?: Macro[];
    constructor();
    validate(): Promise<boolean>;
}
