interface RequestParamInterface {
  id: string;
  value: string | number;
}

export interface PaginationInterface {
  page?: number;
  pageSize?: number;
  count?: number;
  pageCount?: number;
  pageNumberIsGood?: boolean;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  numberOfFirstItemOnPage?: number;
  firstItemOnPage?: number;
  numberOfLastItemOnPage?: number;
  lastItemOnPage?: number;
  rows?: any[];
  requestParams?: RequestParamInterface[];
}
