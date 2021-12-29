export interface Paging {
    limit: number;
    page: number;
    total: number;
}
export declare class PagingImp implements Paging {
    limit: number;
    page: number;
    total: number;
}
export interface GetResourcesResponseDict {
    data: any;
    paging: Paging;
    query?: string;
}
export declare class GetResourcesResponse implements GetResourcesResponseDict {
    data: any;
    paging: Paging;
    query?: string | undefined;
    constructor(data: any, paging: Paging, query?: string | undefined);
}
