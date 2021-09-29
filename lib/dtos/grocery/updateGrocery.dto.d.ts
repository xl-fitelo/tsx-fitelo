export declare class UpdateGroceryDto {
    name?: string;
    quantity?: string;
    thumbnail?: string;
    buyLink?: string;
    constructor();
    validate(): Promise<boolean>;
}
