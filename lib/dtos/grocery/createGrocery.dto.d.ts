export declare class CreateGroceryDto {
    name: string;
    quantity?: string;
    thumbnail?: string;
    buyLink?: string;
    constructor(name: string, quantity?: string, thumbnail?: string, buyLink?: string);
    validate(): Promise<boolean>;
}
