export declare class Query {
    select: string;
    from: string;
    where?: string;
    orderBy?: string;
    constructor(select: string, from: string, where?: string, orderBy?: string);
    getCountSql(): string;
    getSql(limit: number, page: number): string;
}
export declare class Filter {
    field: string;
    operator: 'IN' | 'LIKE' | '=' | '>=' | '<=' | 'NOT LIKE' | '!=';
    value: any;
    constructor(field: string, operator: 'IN' | 'LIKE' | '=' | '>=' | '<=' | 'NOT LIKE' | '!=', value: any);
}
export declare class GetResourcesDto {
    fields?: string[];
    sort?: string;
    filters?: Filter[];
    limit?: number;
    page?: number;
    query?: Query;
    constructor();
    toParamsDict(): {
        [key: string]: any;
    };
    fromParamsDict(params: any): void;
    validate(): Promise<boolean>;
}
