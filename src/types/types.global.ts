export interface TResponseFromAPI<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface TMeta {
  page: number;
  limit: number;
  totalCount: number;
  totalPage: number;
  data: number;
}
