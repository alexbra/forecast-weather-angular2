export class Day {
  constructor(
    public time: Date,
    public summary: string,
    public icon: string,
    public temperatureMin?: number,
    public temperatureMax?: number,
    public humidity?: number,
    public windSpeed?: number,
    public windBearing?: number,
    public cloudCover?: number,
    public pressure?: number,
    public weekday?: string,
    public date?: number
  ) { }
}