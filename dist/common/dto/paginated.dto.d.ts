interface PaginationMeta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
interface PaginationLinks {
    first: string;
    previous: string;
    next: string;
    last: string;
}
declare class PaginatedDto<TData> {
    items: TData[];
    meta: PaginationMeta;
    links: PaginationLinks;
}
export { PaginationMeta, PaginatedDto };
