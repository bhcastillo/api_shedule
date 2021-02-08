export interface IOrder {
  id: number;
  id_mark: number;
  quantity: number
}

export interface IOrderSucces {
  day: number;
  id_mark: number | undefined;
  name: string;
  quantity: number;
}