export interface TResponseFromAPI<T> {
  success: boolean;
  message: string;
  data: T;
}
