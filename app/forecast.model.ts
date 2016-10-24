import { Day } from './day.model';
export class Forecast {
  constructor(
    public latitude: number,
    public longitude: number,
    public timezone: string,
    public offset: number,
    public daily: Day[]
  ) { }
}