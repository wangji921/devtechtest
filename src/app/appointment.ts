export interface Appointment {
  // id: number;
  // userId: number;
  // title: string;
  // body: string;
  Description: string;
  Start: Date;
  End: Date;
  Notes: Array<string>;
  Party: Array<number>;
  Id: number;
  ProviderEmail: string;
}
