export declare class CreateUserDto {
    email?: string;
    phone?: string;
    password: string;
    name?: string;
    gender?: string;
    dob?: string;
    constructor(password: string);
    validate(): Promise<boolean>;
}
