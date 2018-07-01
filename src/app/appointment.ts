export interface Appointment {
  Description: string;
  Start: Date;
  End: Date;
  Notes: Array<string>;
  Party: Array<number>;
  Id: number;
  ProviderEmail: string;
}
