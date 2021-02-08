export interface IShedule {
  id: number;
  day: number;
  hour: number;
  assigned: 0 | 1;
}
export interface ISheduleCount {
  day: number;
  hours: number
}