export class Authorization {
  id: number;
  badgeId: number;
  titel: string;
  instelling: string;
  reason: string;
  periode: Period;
  valid: boolean;
  gemachtigde: string;
  implications: [string];
  status: string;
}

export class Period {
  van: string;
  tot: string;
}
